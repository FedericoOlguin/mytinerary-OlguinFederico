
import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import Foto1 from "../img/IslasLofotenNoruega2.jpg"
import Foto2 from "../img/IslasSanBlasPanama.jpg"
import Foto3 from "../img/VillaLaAngostauraArgentina.jpg"
import Foto4 from "../img/PukhetTailandia.jpg"
import Foto5 from "../img/AmsterdamPaisesBajos.jpg"
import Foto6 from "../img/DubrovnikCroatia.jpg"
import Foto7 from "../img/KyotoJapon.jpg"
import Foto8 from "../img/RhodesIslandGreece.jpg"
import "../App.css"


const Caraousel = () => {
    return (
        <section className=" secction1">
            <h2 className="h2Carousel">Popular Mytineraries</h2>
            <Carousel className=" carouselC">

                <Carousel.Item className=" justify-content-center aling-items-center w-70" interval={150000000}>
                    <div className="contImgCarousel">
                        <img
                            className="d-block imgCarousel"
                            src={Foto1}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto2}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto3}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto4}
                            alt="First slide"
                        />

                    </div>
                </Carousel.Item>
                <Carousel.Item className=" justify-content-center aling-items-center w-70" interval={150000000}>
                    <div className="contImgCarousel">
                        <img
                            className="d-block imgCarousel "
                            src={Foto5}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto6}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto7}
                            alt="First slide"
                        />

                        <img
                            className="d-block imgCarousel "
                            src={Foto8}
                            alt="First slide"
                        />

                    </div>
                </Carousel.Item>

            </Carousel>

        </section>

    )
}
export default Caraousel

