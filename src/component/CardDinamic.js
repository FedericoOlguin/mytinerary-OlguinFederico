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
// import datos from "./datos"
import "../styles/cardsDinamic.css"
import { Link as ListRouter } from "react-router-dom"
import fotoHero from "../img/Planoantiguo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import SinResultado from './SinResultado';
import { getCiudades, cargarCiudad, eliminarCiudad } from "../apiCalls"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Container, CssBaseline, TextField, Button, Grid } from "@material-ui/core"

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

    const [mensaje, setMensaje] = React.useState(false)
    const [valorInput, setValorInput] = React.useState("")
    const [datosApi, setDatosApi] = React.useState([])
    const [datosImprimir, setDataImprimir] = React.useState([])
    const [reload, setReload] = React.useState(false)


    React.useEffect(() => {
        getCiudades()
            .then(response => {
                setDatosApi(response.data.response.ciudades)
                setDataImprimir(response.data.response.ciudades)
            })
    }, [reload])

    function filtrar(e) {

        let busqueda = e.target.value.trim()
        setValorInput(busqueda)
        let result = []
        result.push(...datosApi.filter(place => place.ciudad.toLowerCase().startsWith(busqueda.toLowerCase())))
        if (result.length > 0) {
            setDataImprimir(result)
            setMensaje(false)
        } else {
            setDataImprimir(datosApi)
            setMensaje(true)
        }
    }

    const formDatos = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        let objData = {
            ciudad: data.get("Ciudad"),
            imagen: data.get("Imagen"),
            pais: data.get("Pais")
        }
        cargarCiudad(objData).then(setReload(!reload))

    }

    const borrarCiudad = (idCiudad) => {
        console.log(idCiudad)
        eliminarCiudad(idCiudad).then(setReload(!reload)
        )
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mainCards'>

            <img alt='imagenFondo' className='fotoHero' src={fotoHero} />

            <h1 className='textoHero'>Cities</h1>
            <label for="search">
                <SearchIcon />
                <input className='inputSearch' onInput={filtrar} placeholder='Find your next destination' type="text" id='search' />
            </label>
            <div className='overlay2'></div>

            <div className='cardContainer'>
                <SinResultado estado={mensaje} valueInput={valorInput} />
                {datosImprimir.map(place =>

                    <Card className='card' key={place._id} sx={{ maxWidth: 400, margin: 3.5 }}>
                        <CardHeader className='textCenter'
                            title={place.ciudad}

                        />
                        <CardMedia
                            component="img"
                            height="250"
                            image={process.env.PUBLIC_URL + `../imagenes/${place.imagen}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="white">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="add to favorites" onClick={() => { borrarCiudad(place._id) }}>
                                <DeleteForeverIcon />
                            </IconButton>
                            <ListRouter to={`/detalle/${place._id}`}>
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


            <div>
                <h1>POST DATOS CITIES</h1>


                <Container component="container" maxWidth="md">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate onSubmit={formDatos} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="Ciudad"
                                        name="Ciudad"
                                        required
                                        fullWidth
                                        id="Ciudad"
                                        label="Ciudad"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Pais"
                                        label="Pais"
                                        name="Pais"
                                        autoComplete="Pais"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Imagen"
                                        label="Imagen"
                                        name="Imagen"
                                        autoComplete="Imagen"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                SEND DATA
                            </Button>

                        </Box>
                    </Box>

                </Container>

            </div>
            <div>
                <h1>Modificar datos (put)</h1>


                <Container component="container" maxWidth="md">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate onSubmit={formDatos} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="Ciudad"
                                        name="Ciudad"
                                        required
                                        fullWidth
                                        id="Ciudad"
                                        label="Ciudad"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Pais"
                                        label="Pais"
                                        name="Pais"
                                        autoComplete="Pais"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Imagen"
                                        label="Imagen"
                                        name="Imagen"
                                        autoComplete="Imagen"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                SEND DATA
                            </Button>

                        </Box>
                    </Box>

                </Container>

            </div>
        </div>
    );
}





