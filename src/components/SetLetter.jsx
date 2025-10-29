import CreateSetLetter from './CreateSetLetter';

const SetLetter = ({ messageP, targetIdP}) => {

    let classes = ["pBlue", "pAzzurro", "pRosso", "pRosa", "pGiallo"];

    // Avvia l'animazione quando il componente è montato
    setTimeout(() => {
        CreateSetLetter(messageP, targetIdP, classes);
    }, 100);
    
    return null; // Non renderizza nulla, solo logica perchè aggancia un testo ad un pezzo HTML già fornito da Header.jsx
};

export default SetLetter;