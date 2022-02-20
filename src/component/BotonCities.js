import '../App.css';
import imagen1 from "../img/mapa.jpg"




function BotonCities() {


    return (
        <section className='sectionBtnCities d-flex justify-content-evenly p-5'>
            <div className='divSectionCities'>
                <h2 className='h2Cities'>See the world. It’s more fantastic than any dream</h2>
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">See all Cities</span>
                </button>
            </div>
            <img className='imagenSection' src={imagen1} alt="articulosDeViajes" />
        </section>
    )
}



export default BotonCities