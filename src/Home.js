import './App.css';
// import NavBar from './component/NavBar';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"
import BotonCities from "./component/BotonCities"
import Footer from './component/Footer';


function Home() {
  return (
    <>
      <Hero />
      <main>
        <BotonCities />
        <Caraousel />
      </main>
      < >
        <Footer />
      </>
    </>
  );
}

export default Home;



