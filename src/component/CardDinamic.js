import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoupeIcon from '@mui/icons-material/Loupe';
import "../styles/cardsDinamic.css"
import { Link as LinkRouter } from "react-router-dom"
import fotoHero from "../img/Planoantiguo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import SinResultado from './SinResultado';
import { connect } from 'react-redux';
import ciudadesActions from "../redux/actions/ciudadesActions"




function CardDinamic(props) {
    const [valorInput, setValorInput] = React.useState("")
    React.useEffect(() => {
        if (props.ciudades.length < 1) {
            props.getAllCiudades()
        }
        // console.log(props)
    }, [])


    function filtro(e) {
        let busqueda = e.target.value.trim()
        setValorInput(busqueda)
        props.filtrar(props.auxiliar, busqueda)
    }



    


    return (
        <div className='mainCards'>

            <img alt='imagenFondo' className='fotoHero' src={fotoHero} />

            <h1 className='textoHero'>Cities</h1>
            <label for="search">
                <SearchIcon />
                <input className='inputSearch' onInput={filtro} placeholder='Find your next destination' type="text" id='search' />
            </label>
            <div className='overlay2'></div>

            <div className='cardContainer'>
                <SinResultado estado={props.ciudades.length ? false : true} valueInput={valorInput} />
                {(props?.ciudades).map(place =>
                    <Card className='card' key={place._id} sx={{ maxWidth: 400, margin: 3.5 }}>
                        <CardHeader className='textCenter'
                            title={place.ciudad}

                        />
                        <CardMedia
                            component="img"
                            height="300"
                            image={process.env.PUBLIC_URL + `../imagenes/${place.imagen}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="white" fontSize="1rem">
                            Contry: {place.pais}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <LinkRouter to={`/detalle/${place._id}`}>
                                <IconButton aria-label="share">
                                    <LoupeIcon />
                                </IconButton>
                            </LinkRouter>

                        </CardActions>

                    </Card>


                )}
            </div>
        </div>
    );
}


const mapDispatchToProps = {
    getAllCiudades: ciudadesActions.getAllCiudades,
    eliminarCiudad: ciudadesActions.eliminarCiudad,
    filtrar: ciudadesActions.filtrar
}
const mapStateToProps = (state) => {
    return {
        ciudades: state.ciudadesReducer.ciudades,
        auxiliar: state.ciudadesReducer.auxiliar
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardDinamic)


