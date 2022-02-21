import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './component/NavBar';
import Home from './Home';
import Footer from "./component/Footer"
import Cities from "./Cities"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
