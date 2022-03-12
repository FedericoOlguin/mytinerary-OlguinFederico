import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './component/NavBar';
import Home from './Home';
import Footer from "./component/Footer"
import Cities from "./Cities"
import Detalle from "./Detalle"
import SignUp from './component/SignUp';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/cities' element={<Cities />} />
        <Route  path='/detalle/:id' element={<Detalle />} />
        <Route  path='/signUp' element={<SignUp />} />
        <Route  path='*' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
