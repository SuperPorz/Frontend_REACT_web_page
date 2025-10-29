//importazione classi bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';

//importazione componenti
import Header from './components/Header';
import SetLetter from './components/SetLetter';
import SetBanners from './components/SetBanners';
import Form from './components/Form';
import Colleagues from './components/Colleagues';
import Footer from './components/Footer';


function App()
{
  return(
    <>
      <Header />
      <SetLetter 
        messageP="CacioCavallissimo!" 
        targetIdP="pTitolo"
      />
      <SetBanners />
      <Form />
      <Colleagues />
      <Footer />
    </>
  )
}

export default App;