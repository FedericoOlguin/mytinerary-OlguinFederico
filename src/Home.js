import './App.css';
import NavBar from './component/NavBar';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"
import BotonCities from "./component/BotonCities"
import Footer from './component/Footer';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <main>
      <BotonCities/>
        <Caraousel />
      </main>
      <footer >
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;



