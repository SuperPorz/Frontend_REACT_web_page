import { useState } from "react";
import BuildTable from "./BuildTable";

function Colleagues() {

    const [colleagues, setColleagues] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);//caricamento colleghi inizia con false

    async function handleClick() {
        // Se i dati sono già stati caricati, non fare nulla
        if (isLoaded) {
            return;
        }

        let response = await fetch("https://reqres.in/api/users", {
            headers: {'x-api-key': 'reqres-free-v1'}
        });
        let data = await response.json();
        console.log(data);
        setColleagues(data.data);
        setIsLoaded(true); // settiamo caricamento colleghi a true, cosi non viene più eseguita nessun'altra fetch
    }

    return(
        <>
            {colleagues.length > 0 && <BuildTable dataP={colleagues} />}
            <section className="rowSection aaa">
                <button onClick={handleClick} id="dataButton"disabled={isLoaded}>
                    {isLoaded ? 'Dati Caricati' : 'Get Colleagues'}
                </button>
            </section> 
        </>
    )
}

export default Colleagues;