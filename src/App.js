import './App.css';
import HeroSection from './Comp/Hero';
import Portfolio from './Comp/Portfolio';
import Skills from './Comp/Skills';
import Aboutme from './Comp/About';
import Footer from './Comp/Footer';


function App() {
  return (
    <div className="App">
    <HeroSection/>
    <Aboutme/>

    <Portfolio/>
    <Skills/>
    <Footer/>

    </div>
  );
}

export default App;
