import DOMPurify from 'dompurify';

const CreateSetLetter = (message, targetId, classes) => {
    let charsCounter = 0;
    let classesCounter = 0;
    
    const intervalID = setInterval(() => {
        const element = document.getElementById(targetId);
        
        if (charsCounter < message.length && element) {
            const currentChar = message.charAt(charsCounter);
            element.innerHTML += DOMPurify.sanitize(
                `<span class="${classes[classesCounter]}">${currentChar}</span>`
            );

            classesCounter = (classesCounter + 1) % classes.length;
            charsCounter++;
        } else {
            clearInterval(intervalID);
        }
    }, 100);
    
    return intervalID; // Restituisci l'ID per eventuale cleanup
};

export default CreateSetLetter;