// Import delle immagini
import company1Img from '../assets/images/company_1.jpeg';
import company2Img from '../assets/images/company_2.webp';
import company3Img from '../assets/images/company_3.webp';

function Banners() {
    const banner1 = {
        title: "Company 1",
        imageSrc: company1Img,  // Usa la variabile importata
        imageAlt: "Image of company 1!",
        description: "111 Aaa bbb ccc ddd eee",
    }

    const banner2 = {
        title: "Company 2",
        imageSrc: company2Img,
        imageAlt: "Image of company 2!",
        description: "222 Aaa bbb ccc ddd eee",
    }

    const banner3 = {
        title: "Company 3",
        imageSrc: company3Img,
        imageAlt: "Image of company 3!",
        description: "333 Aaa bbb ccc ddd eee",
    }

    const banner4 = {
        title: "Company 4",
        imageSrc: 'Ti ho fregato!',
        imageAlt: "Image of company 4!",
        description: "444 Aaa bbb ccc ddd eee",
    }

    return [
        banner1,
        banner2,
        banner3,
        banner4,
    ];
}

export default Banners;