import { useRef } from 'react';

function DraggableImage({ src, alt, style, className }) {
    const draggedElementRef = useRef(null);
    const offsetRef = useRef({ x: 0, y: 0 });
    const originalParentRef = useRef(null);
    const originalStyleRef = useRef(null);

    function handleMouseDown(e) {
        // Controlla che sia il bottone sinistro (button === 0)
        if (e.button !== 0) return;

        const img = e.currentTarget;
        draggedElementRef.current = img;

        // Salva il parent originale e lo stile originale
        originalParentRef.current = img.parentElement;
        originalStyleRef.current = img.getAttribute('style');

        offsetRef.current = {
            x: e.clientX - img.getBoundingClientRect().left,
            y: e.clientY - img.getBoundingClientRect().top
        };

        img.style.position = 'absolute';
        img.style.zIndex = '500';
        img.style.cursor = 'grabbing';

        document.body.append(img);
        moveElement(e.pageX, e.pageY);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        // Previeni il comportamento default
        e.preventDefault();
    }

    function moveElement(pageX, pageY) {
        if (draggedElementRef.current) {
            draggedElementRef.current.style.left = pageX - offsetRef.current.x + 'px';
            draggedElementRef.current.style.top = pageY - offsetRef.current.y + 'px';
        }
    }

    function handleMouseMove(e) {
        moveElement(e.pageX, e.pageY);
    }

    function handleMouseUp(e) {
        // NON controllare e.button qui! Rimuovi sempre i listener
        
        const img = draggedElementRef.current;
        if (!img) return;

        // Rimuovi SEMPRE gli event listener
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        // Trova l'elemento sotto il cursore
        img.hidden = true;
        let elementUnderItem = document.elementFromPoint(e.clientX, e.clientY);
        img.hidden = false;

        // Cerca una cella della tabella (td)
        let targetCell = null;
        if (elementUnderItem) {
            targetCell = elementUnderItem.closest('td');
        }

        // Se ho trovato una cella valida, sposta l'immagine lì
        if (targetCell) {
            targetCell.append(img);
            img.setAttribute("style", originalStyleRef.current || "");
            img.style.cursor = 'grab';
        } else {
            // Altrimenti ripristina la posizione originale
            if (originalParentRef.current) {
                originalParentRef.current.append(img);
                img.setAttribute("style", originalStyleRef.current || "");
                img.style.cursor = 'grab';
            }
        }

        // Reset dei ref
        draggedElementRef.current = null;
        originalParentRef.current = null;
        originalStyleRef.current = null;
    }

    return (
        <img
            src={src}
            alt={alt}
            style={{ ...style, cursor: 'grab' }}
            className={className}
            onMouseDown={handleMouseDown}
            draggable={false}
        />
    );
}

export default DraggableImage;