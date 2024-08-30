
import './App.css';
import ActionButton from './components/actionbutton/ActionButton';
import Footer from './components/footer/Footer';
import HeroSlider from './components/heroSlider/HeroSlider';
import NavBar from './components/navbar/NavBar';
import bg from './assets/svg/SVG/Background.svg'
// import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


function App() {

  return (
    <>
      <NavBar />
      <HeroSlider />

      <Parallax speed={90} style={{zIndex:"2" , position:'relative'}}>
        <img src={bg} alt="" sizes="" srcset="" className='backgroundimages' />

      </Parallax>
      
      <ActionButton />
      <div className="height"></div>
      <Footer />
    </>
  );
}

export default App;
