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
import EditIcon from '@mui/icons-material/Edit';
// import datos from "./datos"
import "../styles/cardsDinamic.css"
import { Link as ListRouter } from "react-router-dom"
import fotoHero from "../img/Planoantiguo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import SinResultado from './SinResultado';
import { getCiudades, cargarCiudad, eliminarCiudad, modificarCiudad } from "../apiCalls"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { Box, Container, CssBaseline, TextField, Button, Grid } from "@material-ui/core"



export default function CardDinamic() {

    const [mensaje, setMensaje] = React.useState(false)
    const [valorInput, setValorInput] = React.useState("")
    const [datosApi, setDatosApi] = React.useState([])
    const [datosImprimir, setDataImprimir] = React.useState([])
    const [reload, setReload] = React.useState(false)
    const [idCiudad, setIdCiudad] = React.useState()


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

    // const formDatos = (e) => {
    //     e.preventDefault()
    //     const data = new FormData(e.target)
    //     let objData = {
    //         ciudad: data.get("Ciudad"),
    //         imagen: data.get("Imagen"),
    //         pais: data.get("Pais"),
    //         description: data.get("Description")
    //     }
    //     cargarCiudad(objData).then(setReload(!reload))

    // }
    // const modificar = (e) => {
    //     e.preventDefault()
    //     const data = new FormData(e.target)
    //     let objData = {
    //         ciudad: data.get("Ciudad"),
    //         imagen: data.get("Imagen"),
    //         pais: data.get("Pais"),
    //         description: data.get("Description")
    //     }
    //     setReload(!reload)
    //     modificarCiudad(idCiudad, objData)
    // }

    // const borrarCiudad = (idCiudad) => {
    //     console.log(idCiudad)
    //     eliminarCiudad(idCiudad).then(setReload(!reload)
    //     )
    // }



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
                            height="300"
                            image={process.env.PUBLIC_URL + `../imagenes/${place.imagen}`}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="white" fontSize="1rem">
                                Pais: {place.pais}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            {/* <IconButton aria-label="add to favorites" onClick={() => { borrarCiudad(place._id) }}>
                                <DeleteForeverIcon />
                            </IconButton> */}
                            {/* <IconButton aria-label="add to favorites" onClick={() => { setIdCiudad(place._id) }}>
                                <EditIcon />
                            </IconButton> */}
                            <ListRouter to={`/detalle/${place._id}`}>
                                <IconButton aria-label="share">
                                    <LoupeIcon />
                                </IconButton>
                            </ListRouter>

                        </CardActions>

                    </Card>


                )}
            </div>


            {/* <div>
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
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Description"
                                        label="Description"
                                        name="Description"
                                        autoComplete="Description"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 4, mb: 2 }}
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" noValidate onSubmit={modificar} sx={{ mt: 3 }}>
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
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Description"
                                        label="Description"
                                        name="Description"
                                        autoComplete="Description"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                MODIFY DATA
                            </Button>

                        </Box>
                    </Box>
                </Container>

            </div> */}
        </div>
    );
}





