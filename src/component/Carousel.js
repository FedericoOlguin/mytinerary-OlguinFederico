
import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import { getCiudades } from "../apiCalls"
import "../styles/carousel.css"
import datos from "./datos"


const Caraousel = () => {
    const [primerArray, setPrimero] = React.useState([])
    const [segundoArray, setSegundo] = React.useState([])
    const [tercerArray, setTercero] = React.useState([])
    // const [ArrayDatos, setArrayDatos] = React.useState([])
    const ArrayDatos = []
   
    React.useEffect(() => {
        getCiudades().then(response => {
            
            ArrayDatos.push(...(response.data.response.ciudades).slice(0, 12))
         
                .then(dividiArray())
            
        })
    }, [])

    function dividiArray() {
        console.log(ArrayDatos);
        setPrimero(ArrayDatos.slice(0, 4))
        setSegundo(ArrayDatos.slice(4, 8))
        setTercero(ArrayDatos.slice(8, 12))
    }

    



    // let ArrayDatos = []
    // ArrayDatos.push(...datos)
    // ArrayDatos.length = 12
    // let primerArray = []
    // let segundoArray = []
    // let tercerArray = []
    // primerArray.push(...ArrayDatos)
    // segundoArray.push(...ArrayDatos)
    // tercerArray.push(...ArrayDatos)
    // let cantidad = ArrayDatos.length / 4
    // primerArray.length = ArrayDatos.length / cantidad
    // segundoArray.splice(0, ArrayDatos.length / cantidad)
    // tercerArray.splice(0, segundoArray.length)

    // segundoArray.length = ArrayDatos.length / cantidad



    return (
        <section className="secction1">
            <h2 className="h2Carousel">Popular MyTineraries</h2>
            <Carousel className=" carouselC">
                <Carousel.Item className="  velocidad" interval={3000}>
                    <div className="contImgCarousel">
                        {console.log(primerArray)}

                        {primerArray.map(dato => {

                            return <>
                                <div className="divImgSpan">
                                    <img key={dato.ciudad}
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            </>

                        })}


                    </div>
                </Carousel.Item>
                <Carousel.Item className=" velocidad" interval={3000}>
                    <div className="contImgCarousel">
                        {console.log(segundoArray)}
                        {segundoArray.map(dato => {

                            return <>
                                <div className="divImgSpan">
                                    <img key={dato.ciudad}
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
                                        alt="First slide" />
                                    <span className="spanImagen">{dato.ciudad}</span>
                                </div>
                            </>

                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item className=" velocidad" interval={3000}>
                    <div className="contImgCarousel">
                        {console.log(tercerArray)}

                        {tercerArray.map(dato => {

                            return <>
                                <div className="divImgSpan">
                                    <img key={dato.ciudad}
                                        className="d-block imgCarousel"
                                        src={process.env.PUBLIC_URL + `/imagenes/${dato.imagen}`}
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

