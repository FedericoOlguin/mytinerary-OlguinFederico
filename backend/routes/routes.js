const Router = require("express").Router()
const validator = require("../config/validacion")
const passport = require("../config/passport")

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades, cargarCiudad, eliminarCiudad, modificarCiudad, obtenerUnaCiudad } = ciudadesController

const itinerariosController = require("../controllers/itinerariosControllers")
const { consultaItinerarios, cargarItianerario, deleteItinerary, modificarItinerario, getItinerariesByCity, likeDislike } = itinerariosController

const usuariosController = require("../controllers/ususariosController")
const { signInUser, signUpUser, signOutUser, verifyEmail, verificarToken } = usuariosController


const actividadesController = require("../controllers/actividadesController")
const { cargarActivitie, getAllActiviteis } = actividadesController

const commentsController = require("../controllers/commentsController")
const { addComment, modificarComment, deleteComment } = commentsController






// rutas de ciudades
Router.route("/cities")
    .get(consultaCiudades)
    .post(cargarCiudad)

Router.route("/cities/:id")
    .delete(eliminarCiudad)
    .put(modificarCiudad)
    .get(obtenerUnaCiudad)

// rutas de comentarios 
Router.route("/itineraries/comment")
    .post(passport.authenticate("jwt", { session: false }), addComment)
    .put(passport.authenticate("jwt", { session: false }), modificarComment)

Router.route("/itineraries/comment/:id")
    .post(passport.authenticate("jwt", { session: false }), deleteComment)

// rutas de itinerarios
Router.route("/itineraries")
    .get(consultaItinerarios)
    .post(cargarItianerario)

Router.route("/itineraries/:id")
    .delete(deleteItinerary)
    .put(modificarItinerario)

Router.route("/itineraries/city/:id")
    .get(getItinerariesByCity)

// ruta like/dislike 
Router.route("/likeDislike/:id")
    .put(passport.authenticate("jwt", { session: false }), likeDislike)

// rutas actividades
Router.route("/activities")
    .get(getAllActiviteis)
    .post(cargarActivitie)

// rutas sigIn/signUp user
Router.route("/auth/signUp")
    .post(validator, signUpUser)

Router.route("/auth/signIn")
    .post(signInUser)

Router.route("/auth/signOut")
    .post(signOutUser)

// rutas para verificar token y email
Router.route("/verify/:uniqueString")
    .get(verifyEmail)

Router.route("/auth/signInToken")
    .get(passport.authenticate("jwt", { session: false }), verificarToken)



module.exports = Router