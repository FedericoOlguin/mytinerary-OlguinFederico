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
import Actividades from "../component/Actividades"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { connect } from "react-redux";
import itinerarioActions from "../redux/actions/itinerariosActions"
import Swal2 from 'sweetalert2'






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




function Detalle(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [inputText, setInputText] = React.useState()
    const [modifi, setModifi] = React.useState()

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
    function likeDislike(id) {
        props.likeOrDislike(id)

    }
    const alertLike = () => {

       
        Swal2.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Login to interact',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const modifyComment = async (event) => {

        const objComment = {
            commentId: event.target.id,
            comment: modifi
        }
        props.modificarComment(objComment)
            .then(Swal2.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            }))
    }

    const deleteCommment = async (event) => {
        Swal2.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal2.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                props.deleteComment(event.target.id)
            }
        })

    }

    const sendComment = async () => {
        console.log("comment enviado");
        const objComment = {
            itineraryId: props.itinerario._id,
            comment: inputText
        }
        await props.addComment(objComment)
            .then(response => setInputText(""))
    }


    return (
        <Card className='cardDetalle' sx={{ margin: 3.5 }}>
            {/* {props.itinerario.activities.map(x=>{
               console.log(x)
            })} */}

            <h2 className='textTitulo'>{props.itinerario.tituloIt}</h2>
            <div className='cardBodyDetalle'>
                <div className='contenedorCardDetalle'>

                    <div className='MediaDetalle'>
                        <img className='imagenCardDetalle' alt="UserPhoto" src={process.env.PUBLIC_URL + `../imagenes/${props.itinerario.user.foto}`} />
                        <h3 className='textDetalle'>{props.itinerario.user.nombre}</h3>
                    </div>
                    <p variant="body2" color="withe">
                        Country: {props.country}
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
                {/* {console.log(props.itinerario)} */}
                {props.user ? (<button onClick={() => { likeDislike(props.itinerario._id) }}>
                    <ThumbUpIcon className={(props.itinerario?.likes).includes(props.user.id) ? "press" : "unPress"} /> </button>)
                    : (<button onClick={alertLike}> <ThumbUpIcon className="unPress" /> </button>)}

                <div ><span className='spanLike'> {`${props.itinerario.likes.length}`}</span></div>
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
                    <h3 className="text-center">Activities</h3>
                    <div className="actContainer">

                        {props.itinerario.activities.map(act =>
                            <Actividades key={act._id} activity={act} />
                        )}

                    </div>
                    <h3 className="text-center">Comments</h3>
                    <div className="boxComment">
                        {props.itinerario.comments?.map(comment =>
                            <div key={comment._id}>
                                {comment.userId?._id !== props.user?.id ?
                                    (
                                        <div className="commentContainer" >
                                            <div >
                                                <img className="avatarComment" src={comment.userId?.imageUrl} alt="userImg" />

                                                {comment.userId?.name.firstName}
                                            </div>
                                            <div className="commentDiv" >
                                                <p className="comment">{comment.comment}</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        <div className="commentContainer" >
                                            <div >
                                                <img className="avatarComment" src={comment.userId?.imageUrl} alt="userImg" />
                                                {comment.userId?.name.firstName}
                                            </div>
                                            <div className="commentDiv" >
                                                <textarea className="comment" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                                                <button className="btnComment btnModify" id={comment._id} onClick={modifyComment}>Modificar</button>
                                                <button className="btnComment btnDelete" id={comment._id} onClick={deleteCommment}>Eliminar</button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        )}

                    </div>
                    {props.user ?
                        (<div className="commentDiv">
                            <h4 className="center">Leave us your comment</h4>
                            <div className="commentDivF">
                                <textarea className="commentF" placeholder="Your comment" onChange={(event) => setInputText(event.target.value)} value={inputText} />
                                <button className="btnComment btnModify" onClick={sendComment}>Send</button>
                            </div>
                        </div>) :
                        (
                            <h4 className="text-center">If you want to comment, you must log in</h4>
                        )}
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



const mapDispatchToProps = {
    likeOrDislike: itinerarioActions.likeOrDislike,
    addComment: itinerarioActions.addComment,
    modificarComment: itinerarioActions.modificarComment,
    deleteComment: itinerarioActions.deleteComment
}
const mapStateToProps = (state) => {
    return {
        user: state.usuariosReducer.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detalle)