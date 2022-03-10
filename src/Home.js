import './App.css';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"
import BotonCities from "./component/BotonCities"
import React from 'react';


function Home() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <main key={"main"}>
        <BotonCities />
        <Caraousel />
      </main>
    </>
  );
}

export default Home;



