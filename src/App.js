import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import NavBar from './component/NavBar';
import Home from './Home';
import Footer from "./component/Footer"
import Cities from "./Cities"
import Detalle from "./Detalle"
import SignUp from './component/SignUp';
import SignIn from "./component/SignIn"
import { connect } from 'react-redux';
import usersActions from './redux/actions/usuariosActions';




function App(props) {

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      props.verifyToken(token)

    }
  }, [])
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/detalle/:id' element={<Detalle />} />
        <Route path='/signUp' element={props.user ? <Navigate replace to="/" /> : <SignUp />} />
        <Route path='/signIn' element={props.user ? <Navigate replace to="/" /> : <SignIn />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <div className="contenedorSweet" id="custom-target"></div>
      <Footer />
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  verifyToken: usersActions.verifyToken
}
const mapStateToProps = (state) => {
  return {
    user: state.usuariosReducer.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
