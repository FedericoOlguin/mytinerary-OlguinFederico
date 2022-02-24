import React from "react";
import "../styles/cardsDinamic.css"
import fallido from "../img/Xfallido.svg"



function SinResultado(props) {

    const estado = props.estado
    const valorInput = props.valueInput


    return (
        <div className={estado ? "alertSinResultado" : "alertSinResultadoFalse"}>
            {estado ?
                (<>
                    <h3>Sorry, we can't find any results for "{valorInput}"</h3>
                    <img alt="sinResultado" className="iconSinResultado" src={fallido} />
                </>) :
                (<>
                </>)
            }
        </div>
    )
}

export default SinResultado