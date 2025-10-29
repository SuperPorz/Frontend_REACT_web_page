import { useState } from 'react';

function Form() {
    // Stato per i valori degli input
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // Stato per sapere se i campi sono validi o no
    const [isUsernameValid, setIsUsernameValid] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(null);

    // Funzione che controlla se il nome è valido
    function checkUsername(nome) {
        const regex = /^[a-zA-ZÀ-ÿ\s]{3,16}$/;
        
        if (nome && regex.test(nome)) {
            return true;
        }
        return false;
    }

    // Funzione che controlla se l'email è valida
    function checkEmail(mail) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (mail && regex.test(mail)) {
            return true;
        }
        return false;
    }

    // Quando l'utente scrive nel campo Nome
    function handleUsernameChange(e) {
        const valore = e.target.value;
        setUsername(valore);
        
        // Controlla subito se è valido
        const valido = checkUsername(valore);
        setIsUsernameValid(valido);
        
        console.log('Nome:', valore, '- Valido:', valido);
    }

    // Quando l'utente scrive nel campo Email
    function handleEmailChange(e) {
        const valore = e.target.value;
        setEmail(valore);
        
        // Controlla subito se è valido
        const valido = checkEmail(valore);
        setIsEmailValid(valido);
        
        console.log('Email:', valore, '- Valido:', valido);
    }

    // Funzione che restituisce la classe CSS giusta
    function getClassUsername() {
        if (isUsernameValid === null) {
            return ''; // Nessuna classe all'inizio
        }
        if (isUsernameValid === true) {
            return 'valid';
        }
        return 'invalid';
    }

    function getClassEmail() {
        if (isEmailValid === null) {
            return ''; // Nessuna classe all'inizio
        }
        if (isEmailValid === true) {
            return 'valid';
        }
        return 'invalid';
    }

    return (
        <>
            <section className="rowSection aaa">
                <form className="flexForm">
                    <label htmlFor="nomeText">Nome:</label>
                    <input
                        type="text"
                        id="nomeText"
                        name="username"
                        placeholder="Nome"
                        value={username}
                        onChange={handleUsernameChange}
                        className={getClassUsername()}
                        required
                    />

                    <label htmlFor="emailText">Email:</label>
                    <input
                        type="text"
                        id="emailText"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className={getClassEmail()}
                        required
                    />

                    <input type="submit" value="Invia" />
                </form>
            </section>
        </>
    );
}

export default Form;