import React from 'react';
import "../styles/cardsDinamic.css"
import { useParams } from 'react-router-dom'
import { connect } from "react-redux"
import ciudadesActions from "../redux/actions/ciudadesActions"
import itinerarioActions from '../redux/actions/itinerariosActions';
import CircularIndeterminate from "./CircularIndeterminate"
import Detalle from "./Detallle"


function DetalleCard(props) {
    const { id } = useParams()
    const [datosApi, setDatosApi] = React.useState((props.ciudades.filter(Itin => Itin._id === id))[0])

    React.useEffect(() => {
        window.scrollTo(0, 0)
        if (props.ciudades.length < 1) {
            props.getUnaCity(id)
                .then(response => setDatosApi(response))
        }
        props.filtrarByCiudad(id)
    }, [])

    // console.log(props.itinerarios)
    // nombre = datosApi.map(dato => dato.ciudad)



    if (!datosApi) {
        return (<CircularIndeterminate />)
    }
    return (

        <div className='mainCards'>
            {/* {console.log(datosApi)} */}

            <img alt='imagenFondo' className='fotoHero' src={process.env.PUBLIC_URL + `/imagenes/${datosApi.imagen}`} />
            <h1 className='textoHero'>{datosApi.ciudad}</h1>
            <div className='overlay2'></div>
            <h2 className='h2'>  {datosApi.ciudad} Itineraries</h2>

            <div className='cardContainer'>
                {props.itinerarios.length ? (
                    props.itinerarios?.map(Itin =>
                        <Detalle key={Itin._id} itinerario={Itin} country={datosApi.pais}/>
                    )
                ) : (
                    <div className='iconoNotFound'>
                        <h3>"Sorry, there are no itineraries yet"</h3>
                        <img alt="sinResultado" className="iconSinResultado" src="/static/media/Xfallido.f341724b46f3c5333a40309cb5cb8c9a.svg" />
                    </div>
                )}

            </div>

        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        ciudades: state.ciudadesReducer.ciudades,
        auxiliar: state.ciudadesReducer.auxiliar,
        itinerarios: state.itineraryReducer.itinerarios
    }
}

const mapDispatchToProps = {
    getAllCiudades: ciudadesActions.getAllCiudades,
    filtrarByCiudad: itinerarioActions.filtrarByCiudad,
    getUnaCity: ciudadesActions.getUnaCity
}


export default connect(mapStateToProps, mapDispatchToProps)(DetalleCard)