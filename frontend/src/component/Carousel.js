
import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { getCiudades } from "../apiCalls"
import "../styles/carousel.css"
// import datos from "./datos"


const Caraousel = () => {
    const [primerArray, setPrimero] = React.useState([])
    const [segundoArray, setSegundo] = React.useState([])
    const [tercerArray, setTercero] = React.useState([])
    const ArrayDatos = []

    React.useEffect(() => {
        getCiudades().then(response => {
            ArrayDatos.push(...(response.data.response.ciudades).slice(0, 12))
            dividiArray()
            // ArrayDatos.push(...(response.data.response.ciudades).slice(0, 12))
            //     .then(dividiArray())
        })
    }, [])

    function dividiArray() {
        setPrimero(ArrayDatos.slice(0, 4))
        setSegundo(ArrayDatos.slice(4, 8))
        setTercero(ArrayDatos.slice(8, 12))
    }


    if (!ArrayDatos) {
        return (
            <h1>-------------------(Loading........)-------------</h1>
        )
    }
    return (
        <section className="secction1" >
            <h2 className="h2Carousel">Popular MyTineraries</h2>
            <Carousel className=" carouselC" key={"8"}>
                <Carousel.Item className="  velocidad" interval={3000}>
                    <div className="contImgCarousel">


                        {primerArray.map(dato => {

                            return (
                                <div className="divImgSpan" key={dato._id}>
                                    <img
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            )

                        })}


                    </div>
                </Carousel.Item>
                <Carousel.Item className=" velocidad" interval={3000}>
                    <div className="contImgCarousel">

                        {segundoArray.map(dato => {

                            return (
                                <div className="divImgSpan" key={dato._id}>
                                    <img
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            )

                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item className=" velocidad" interval={3000}>
                    <div className="contImgCarousel">
                        {tercerArray.map(dato => {
                            return (
                                <div className="divImgSpan" key={dato._id}>
                                    <img
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            )
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )

}
export default Caraousel

