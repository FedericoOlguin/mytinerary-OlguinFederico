import './App.css';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"
import BotonCities from "./component/BotonCities"


function Home() {
  return (
    <>
      <Hero />
      <main>
        <BotonCities />
        <Caraousel />
      </main>
    </>
  );
}

export default Home;



