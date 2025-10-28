import BuildBanners from "./BuildBanners";
import Banners from './Banners';

let bannersCounterP = 0;
let array = Banners();

const SetBanners = () => {
    // Chiamata immediata per mostrare il primo banner dopo 100ms per aspettare il DOM
    setTimeout(() => BuildBanners(bannersCounterP), 100);
    
    // Avvia l'intervallo per cambiare banner ogni 3 secondi
    setInterval(() => {
        bannersCounterP = (bannersCounterP + 1) % array.length;
        BuildBanners(bannersCounterP);
    }, 3000);
    
    return <section id="bannerSection" className="rowSection aaa"></section>;
};

export default SetBanners;