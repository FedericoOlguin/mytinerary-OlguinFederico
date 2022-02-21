import React from "react";
import "../styles/footer.css"
import facebook from "../img/IconFacebook.png"
import instagram from "../img/IconInstagram.png"
import twitter from "../img/IconTwitter.png"
import whatsapp from "../img/IconWhatsapp.png"




const Footer = () => {
    return (
        <footer>
            <div className="divNavFooter">
                <ul>
                    <li className=""><a className="footerNav" aria-current="page" href="/">Home</a></li>
                    <li className=""><a className="footerNav " href="/cities">Cities</a></li>
                    <li><a className="footerNav" href="#">Log In</a></li>
                    <li><a className="footerNav" href="#">Sign Up</a></li>

                </ul>
            </div>
            <div className="diVFooter">

                <p><a className="navbar-brand linkLogo" href="/">MyTinerary</a></p>
                <p>Contacto: <a href="http://gmail.com/" target="_blank" rel="nopener noreferrer">xxxxx@gamil.com</a></p>
                <p>Direccion: San Martín 4598  Capital Federal.</p>


            </div>
            <div className="divIcon">
                <ul>
                    <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://facebook.com/"><img className="iconFooter" src={facebook} alt="iconoFacebook" /></a></li>
                    <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://twitter.com/"><img className="iconFooter" src={twitter} alt="iconoTwitter" /></a></li>
                    <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.instagram.com/"><img className="iconFooter" src={instagram} alt="iconoInstagram" /></a></li>
                    <li><a className="nav-link" target="_blank" rel="noreferrer nopener" href="https://www.whatsapp.com/"><img className="iconFooter" src={whatsapp} alt="iconoWhatsapp" /></a></li>
                </ul>

            </div>
            <div className="divCopy">
                <h6 >Copyrigth&copy; 2022 All rights reserved</h6>
            </div>
        </footer>
    )
}
export default Footer


