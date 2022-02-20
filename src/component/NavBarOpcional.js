import React from "react";
import "../App.css"
import user from "../img/avatar.svg"
import logo from "../img/LogoMi.svg"
import menu from "../img/menuHamburger.svg"


function NavBar() {
  const [navbar,setNavbar]= React.useState(false)
  const colorNav=()=>{
     if(window.scrollY>=5){
       setNavbar(true)
     }else{
       setNavbar(false)
     }
  }
window.addEventListener("scroll",colorNav)
  return (
    <nav className={navbar?"navbarBackgound navbar-expand-lg ":" navbar navbar-expand-lg "}>
      <a className="navbar-brand linkLogo" href="#">
          <img className="logo" src={logo} /> MyTinerary</a>
      <div className={navbar?"containerF":"container-fluid"}>
        
        <button className="navbar-toggler sinBorde" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><img className="menuHambur" src={menu}/></span>
        </button>
        <li class="nav-item dropdown linkAvatar">
            <a class="nav-link dropdown-toggle linkAvatar" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="userImg" src={user} alt="usuario" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Log In</a></li>
              <li><a class="dropdown-item" href="#">Sign Up</a></li>
              </ul>
             </li>
       
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="ulNav">
              <li className="navLi">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="navLi">
                <a className="nav-link " href="#">Cities</a>
              </li>
          </ul>
          
        </div>
        
      </div>
    </nav>
  )

}
export default NavBar


