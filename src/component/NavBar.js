import React from "react";
import "../App.css"
import user from "../img/avatar.svg"
import logo from "../img/LogoMi.svg"


function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand linkLogo" href="#">
          <img className="logo" src={logo} /> My Tinerary</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="ulNav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Cities</a>
            </li>
          </ul>
          <a className="d-flex mx-5">
            <img className="userImg" src={user} alt="usuario" />
          </a>
        </div>
      </div>
    </nav>
  )

}
export default NavBar