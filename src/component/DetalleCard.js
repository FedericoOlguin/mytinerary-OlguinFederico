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
// import datos from "./datos"
import "../styles/cardsDinamic.css"
import { Link as ListRouter } from "react-router-dom"
import { useParams } from 'react-router-dom'
import fotoHero from "../img/GLoboTierra.jpg"
import Mensaje from "../component/Mensaje"
import axios from 'axios';


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

export default function DetalleCard() {
    const [expanded, setExpanded] = React.useState(false);
    const { id } = useParams()
    const [datosApi, setDatosApi] = React.useState([])
    let card = ""
    React.useEffect(() => {
        axios.get("http://localhost:4000/api/cities")
            .then(response => {
                setDatosApi((response.data.response.ciudades).filter(place => place._id == id))
            })
    }, [])


    card = datosApi.map(dato => dato.ciudad)


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mainCards'>
            <img alt='imagenFondo' className='fotoHero' src={fotoHero} />
            <h1 className='textoHero'>{card}</h1>
            <div className='overlay2'></div>
            <h2 className='h2'>Detail</h2>
            <Mensaje />
            <div className='cardContainer'>
                {datosApi.map(place =>

                    <Card className='card' key={place._id} sx={{ maxWidth: 1000, margin: 3.5 }}>
                        <CardHeader className='textCenter'
                            title={place.ciudad}
                        //   subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="600"
                            image={process.env.PUBLIC_URL + `../imagenes/${place.imagen}`}
                            alt="Paella dish"
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
                            <ListRouter to={`/detalle/${place._id}`}>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                            </ListRouter>
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
