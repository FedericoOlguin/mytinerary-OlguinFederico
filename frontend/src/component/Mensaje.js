import React from "react";
import "../App.css"
import "../styles/mensaje.css"
import { Link as ListRouter } from "react-router-dom"




const Mensaje = () => {
    return (
        <div className="contenedorMensaje">

            <div className="divMensaje">
                <h1>Under Construction</h1>
                <ListRouter className="btnIrHome" aria-current="page" to="/cities">Cities</ListRouter>
            </div>

        </div>
    )
}

export default Mensaje