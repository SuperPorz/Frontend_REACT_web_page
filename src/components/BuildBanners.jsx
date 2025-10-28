import DOMPurify from 'dompurify';
import Banners from './Banners';

const BuildBanners = (bannersCounterP) => {
    // Recupera i banners dall'array
    const data = Banners();

    // Controlla che data sia un array valido
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error("Dati banner non validi:", data);
        return;
    }

    const bannerCompany = data[bannersCounterP % data.length];

    // Controlla che bannerCompany esista
    if (!bannerCompany) {
        console.error("Banner company non trovato");
        return;
    }

    // TROVA la sezione esistente nel DOM (non crearla come JSX!)
    const bannerSection = document.getElementById("bannerSection");
    
    if (!bannerSection) {
        console.error("Sezione banner non trovata nel DOM");
        return;
    }
    
    // Pulisce la sezione prima di aggiungere nuovi banner
    bannerSection.innerHTML = "";
    
    const banner = document.createElement("section");
    banner.className = "rowSection aqua";

    const img = document.createElement("img");
    img.src = DOMPurify.sanitize(bannerCompany.imageSrc);
    img.alt = DOMPurify.sanitize(bannerCompany.imageAlt);
    img.width = 200;
    img.height = 200;

    const innerSection = document.createElement("section");
    innerSection.className = "columnSection pBlue";

    const h2 = document.createElement("h2");
    h2.textContent = DOMPurify.sanitize(bannerCompany.title);

    const p = document.createElement("p");
    p.textContent = DOMPurify.sanitize(bannerCompany.description);

    innerSection.appendChild(h2);
    innerSection.appendChild(p);
    banner.appendChild(img);
    banner.appendChild(innerSection);
    bannerSection.appendChild(banner);
};

export default BuildBanners;