
import './App.css';
import AboutUs from './components/aboutus/AboutUs';
import ActionButton from './components/actionbutton/ActionButton';
import Footer from './components/footer/Footer';
import HeroSlider from './components/heroSlider/HeroSlider';
import NavBar from './components/navbar/NavBar';



function App() {

  return (
    <>
      <NavBar />
      <HeroSlider />
      <AboutUs />


      <ActionButton />
      <div className="height"></div>
      <Footer />
    </>
  );
}

export default App;
