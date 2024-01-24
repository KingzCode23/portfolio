import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/services/Service';
import Qualification from './components/Qualification/Qualification';
import Certificate from './components/certificate/Certificate';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scroolup/Scrollup';
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Certificate />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}
export default App;
