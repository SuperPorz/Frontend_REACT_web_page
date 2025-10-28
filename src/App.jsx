//importazione classi bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//importazione componenti
import Header from './components/Header';
import SetLetter from './components/SetLetter';
import SetBanners from './components/SetBanners';

//import Colleagues from './components/Colleagues';
//import Footer from './components/Footer';
//import Form from './components/Form';

//inizializzazione scritte animate.
let classes = ["pBlue", "pAzzurro", "pRosso", "pRosa", "pGiallo"];

//inizializzazione dati tabella Colleagues
//let isLoaded = false;

// convenzione: per le props ueremo una P finale, tipo: tutorialP, cardP, navP ecc

function App()
{
  console.log('APP()');
  return(
    <>
      <Header />
      <SetLetter 
        messageP="CacioCavallissimo!" 
        targetIdP="pTitolo"
        classesP={classes}
      />
      <SetBanners />
      {/* 
      <Form />
      <Colleagues />
      <Footer /> 
      */}
    </>
  )
}

export default App;