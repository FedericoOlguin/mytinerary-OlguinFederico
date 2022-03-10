import '../styles/BotonCities.css';
import imagen1 from "../img/mapa.jpg"
import {Link as LinkRouter} from "react-router-dom"





function BotonCities() {


    return (
        <section id='cities' className='sectionBtnCities d-flex justify-content-evenly p-5'>
            <div className='divSectionCities'>
                <h2 className='h2Cities'>See the world. It’s more fantastic than any dream</h2>
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <LinkRouter to='/cities' className="button-text">See all Cities</LinkRouter>
                </button>
            </div>
            <img className='imagenSection' src={imagen1} alt="articulosDeViajes" />
        </section>
    )
}



export default BotonCities