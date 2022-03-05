import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/cardsDinamic.css"
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Mensaje from "../component/Mensaje"
import { connect } from "react-redux"
import ciudadesActions from "../redux/actions/ciudadesActions"


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function DetalleCard(props) {
    const [expanded, setExpanded] = React.useState(false);
    const { id } = useParams()
    const [datosApi, setDatosApi] = React.useState([])
    React.useEffect(() => {
        props.getAllCiudades()
        setDatosApi((props.ciudades).filter(place => place._id == id))

    }, [])


    // nombre = datosApi.map(dato => dato.ciudad)


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mainCards'>
            <img alt='imagenFondo' className='fotoHero' src={process.env.PUBLIC_URL + `/imagenes/${datosApi.map(city => city.imagen)}`} />
            <h1 className='textoHero'>{datosApi.map(city => city.ciudad)}</h1>
            <div className='overlay2'></div>
            <h2 className='h2'>Itineraries For  {datosApi.map(city => city.ciudad)}</h2>

            <div className='cardContainer'>
                {datosApi.map(place =>
                    <Card className='card' key={place._id} sx={{  margin: 3.5 }}>
                        <CardHeader className='textCenter'
                            title={place.ciudad}
                        //   subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="800"
                            width="1000"
                            image={process.env.PUBLIC_URL + `../imagenes/${place.imagen}`}
                            alt="City photo"
                        />
                        <CardContent>
                            <Typography variant="body2" color="withe">
                                Pais: {place.pais}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <LinkRouter to={`/detalle/${place._id}`}>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </LinkRouter>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {place.description}
                                </Typography>
                                <Typography paragraph>

                                </Typography>
                                <Typography>
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                )}
            </div>

        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        ciudades: state.ciudadesReducer.ciudades,
        auxiliar: state.ciudadesReducer.auxiliar
    }
}

const mapDispatchToProps = {
    getAllCiudades: ciudadesActions.getAllCiudades
}


export default connect(mapStateToProps, mapDispatchToProps)(DetalleCard)