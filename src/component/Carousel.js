
import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "../App.css"
import datos from "./datos"


const Caraousel = () => {
    let primerArray = []
    let segundoArray = []
    primerArray.push(...datos)
    segundoArray.push(...datos)
    let cantidad = datos.length / 4
    primerArray.length = datos.length / cantidad
    segundoArray.splice(0, datos.length / cantidad)

    return (
        <section className=" secction1">
            <h2 className="h2Carousel">Popular MyTineraries</h2>
            <Carousel className=" carouselC">
                <Carousel.Item className=" justify-content-center aling-items-center w-70" interval={3000}>
                    <div className="contImgCarousel">
                        {primerArray.map(dato => {

                            return <>
                                <div className="divImgSpan">
                                    <img key={dato.ciudad}
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.img}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            </>

                        })}


                    </div>
                </Carousel.Item>
                <Carousel.Item className=" justify-content-center aling-items-center w-70" interval={3000}>
                    <div className="contImgCarousel">

                        {segundoArray.map(dato => {

                            return <>
                                <div className="divImgSpan">
                                    <img key={dato.ciudad}
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.img}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            </>

                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}
export default Caraousel
