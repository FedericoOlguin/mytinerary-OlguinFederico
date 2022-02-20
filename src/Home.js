import './App.css';
import NavBar from './component/NavBar';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"
import Footer from './component/Footer';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <main>
        <Caraousel />
      </main>
      <footer >
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;



