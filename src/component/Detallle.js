import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import "../styles/cardsDinamic.css"
// import { Link as LinkRouter } from "react-router-dom"
import Mensaje from "../component/Mensaje"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));




export default function Detalle(props) {
    const [expanded, setExpanded] = React.useState(false);



    function imprimirDinero(num) {
        let contador = num
        let dinero = []
        while (contador > 0) {

            dinero.push(<LocalAtmIcon key={contador} />)
            contador--
        }

        return dinero
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className='cardDetalle' sx={{ margin: 3.5 }}>

            <h2 className='textTitulo'>{props.itinerario.tituloIt}</h2>
            <div className='cardBodyDetalle'>
                <div className='contenedorCardDetalle'>

                    <div className='MediaDetalle'>
                        <img className='imagenCardDetalle' alt="UserPhoto" src={process.env.PUBLIC_URL + `../imagenes/${props.itinerario.user.foto}`} />
                        <h3 className='textDetalle'>{props.itinerario.user.nombre}</h3>
                    </div>
                    <p variant="body2" color="withe">
                        Contry: {props.itinerario.pais}
                    </p>
                    <p variant="body2" color="withe">
                        Duration: {props.itinerario.duration}hs.
                    </p>
                    <p variant="body2" color="withe">
                        Price: {imprimirDinero(props.itinerario.price).map(elemento => {
                            return elemento
                        })}
                    </p>
                </div>
                <div className='containerMediaDetalle'>
                    <CardMedia
                        className='imagenMedia'
                        component="img"
                        height="300"
                        image={process.env.PUBLIC_URL + `../imagenes/${props.itinerario.imagen}`}
                        alt="Paella dish"
                    />
                    <p className='aLaDerecha' variant="h2" color="withe">
                        {props.itinerario.tags.join(" ")}
                    </p>
                </div>
            </div>

            <CardActions disableSpacing className="botonesPrueba">
                <div><ThumbUpIcon /><span className='spanLike'> {`${props.itinerario.likes}`}</span></div>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    {expanded ? <h6>Close<CloseIcon /></h6> : <h6>Show more <AddIcon /></h6>}
                    {/* <h6>{!expanded ? "Show more" : "Close"}<AddIcon /></h6> */}
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <div>
                    <Mensaje />
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        {expanded ? <h6>Close <CloseIcon /></h6> : <h6>Show more <AddIcon /></h6>}
                        {/* <h6>{!expanded ? "Show more" : "Close"}<AddIcon /></h6> */}
                    </ExpandMore>
                </div>
            </Collapse>
        </Card>
    )
}