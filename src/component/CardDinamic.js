import * as React from 'react';
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
import LoupeIcon from '@mui/icons-material/Loupe';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import datos from "./datos"
import "../styles/cardsDinamic.css"
import { Link as ListRouter } from "react-router-dom"
import fotoHero from "../img/Planoantiguo.jpg"
import SearchIcon from '@mui/icons-material/Search';

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

export default function CardDinamic() {
    const [expanded, setExpanded] = React.useState(false);
    const [datosImprimir, setDataImprimir] = React.useState(datos)


    function buscar(e) {
        console.log("Busqueda " + e.target.value)
        // setDataInput(e.target.value)
        filtrar(e.target.value.trim())
    }
    function filtrar(busqueda) {
        let result = []
        result.push(...datos.filter(place => place.ciudad.toLocaleLowerCase().startsWith(busqueda.toLowerCase())))
        if (result.length > 0) {
            setDataImprimir(result)
        } else {
            setDataImprimir(datos)
        }
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mainCards'>

            <img alt='imagenFondo' className='fotoHero' src={fotoHero} />
            <h1 className='textoHero'>MyTinerary</h1>
            <div className='overlay2'></div>
            <label for="search"><SearchIcon /><input className='inputSearch' onInput={buscar} placeholder='Find your next destination' type="text" id='search' /></label>
            <h2 className='h2'>Cities</h2>
            <div className='cardContainer'>
                {datosImprimir.map(place =>

                    <Card className='card' key={place.id} sx={{ maxWidth: 400, margin: 3.5 }}>
                        <CardHeader className='textCenter'
                            title={place.ciudad}
                        //   subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="250"
                            image={process.env.PUBLIC_URL + `./imagenes/${place.img}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <ListRouter to={`/detalle/${place.id}`}>
                                <IconButton aria-label="share">
                                    <LoupeIcon />
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
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                    stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and
                                    peppers, and cook without stirring, until most of the liquid is absorbed,
                                    15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice, and cook again without
                                    stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>


                )}
            </div>

        </div>
    );
}





