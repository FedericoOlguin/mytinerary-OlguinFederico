import React from "react";
import "../App.css"
import facebook from "../img/IconFacebook.png"
import instagram from "../img/IconInstagram.png"
import twitter from "../img/IconTwitter.png"
import whatsapp from "../img/IconWhatsapp.png"




const Footer = () => {
    return (
        <>
            <div className="divNavFooter">
                <ul>
                    <li className=""><a className="footerNav" aria-current="page" href="#">Home</a></li>
                    <li className=""><a className="footerNav " href="#">Cities</a></li>
                    <li><a className="footerNav" href="#">Log In</a></li>
                    <li><a className="footerNav" href="#">Sign Up</a></li>

                </ul>
            </div>
            <div className="diVFooter">
                <div>
                    <p><a className="navbar-brand linkLogo" href="#">MyTinerary</a></p>
                    <p>Contacto <a>xxxxx@gamil.com</a></p>
                    <p></p>
                </div>

            </div>
            <div className="divIcon">
                <ul>
                    <li><a className="nav-link"><img className="iconFooter" src={facebook} /></a></li>
                    <li><a className="nav-link"><img className="iconFooter" src={twitter} /></a></li>
                    <li><a className="nav-link"><img className="iconFooter" src={instagram} /></a></li>
                    <li><a className="nav-link"><img className="iconFooter" src={whatsapp} /></a></li>
                </ul>

            </div>
            <div className="divCopy">
                <h6 >Copyrigth&copy; 2022 All rights reserved</h6>
            </div>
        </>
    )
}
export default Footer


