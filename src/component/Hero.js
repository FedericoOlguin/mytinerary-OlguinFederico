import React from "react";
import video from "../media/avion1.mp4"
import "../App.css"

function Hero() {
    return (
        <>
            <div className="overlay"></div>
            <div className="heroTitulo">
                <h1 className="h1"><span className="spanTitulo">
                    Find your perfect trip,
                </span> designed by insiders who know and love their cities</h1>
            </div>
            <video className="videoHero" autoPlay muted loop>
                <source src={video} />
            </video>

        </>

    )
}

export default Hero