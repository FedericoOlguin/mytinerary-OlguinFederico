import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Hero from "./component/Hero"
import Caraousel from "./component/Carousel"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />

      </header>
      <main>
        <Caraousel />

      </main>
    </div>
  );
}

export default App;
