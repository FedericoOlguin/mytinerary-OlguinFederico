
import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "../styles/carousel.css"
import datos from "./datos"


const Caraousel = () => {
    let ArrayDatos = []
    ArrayDatos.push(...datos)
    ArrayDatos.length = 12
    let primerArray = []
    let segundoArray = []
    let tercerArray = []
    primerArray.push(...ArrayDatos)
    segundoArray.push(...ArrayDatos)
    tercerArray.push(...ArrayDatos)
    let cantidad = ArrayDatos.length / 4
    primerArray.length = ArrayDatos.length / cantidad
    segundoArray.splice(0, ArrayDatos.length / cantidad)
    tercerArray.splice(0, segundoArray.length)

    segundoArray.length = ArrayDatos.length / cantidad


    return (
        <section className=" secction1">
            <h2 className="h2Carousel">Popular MyTineraries</h2>
            <Carousel className=" carouselC">
                <Carousel.Item className="  velocidad" interval={3000}>
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
                <Carousel.Item className=" velocidad" interval={3000}>
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
                <Carousel.Item className=" velocidad" interval={3000}>
                    <div className="contImgCarousel">

                        {tercerArray.map(dato => {

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

