import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Home from './Home';
import NavBar from './component/NavBar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
