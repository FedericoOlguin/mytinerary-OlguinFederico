const Router = require("express").Router()
const validator = require("../config/validacion")
const passport = require("../config/passport")

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades, cargarCiudad, eliminarCiudad, modificarCiudad, obtenerUnaCiudad } = ciudadesController

const itinerariosController = require("../controllers/itinerariosControllers")
const { consultaItinerarios, cargarItianerario, deleteItinerary, modificarItinerario, getItinerariesByCity, likeDislike } = itinerariosController
const usuariosController = require("../controllers/ususariosController")

const { signInUser, signUpUser, signOutUser, verifyEmail, verificarToken } = usuariosController


Router.route("/cities")
    .get(consultaCiudades)
    .post(cargarCiudad)

Router.route("/cities/:id")
    .delete(eliminarCiudad)
    .put(modificarCiudad)
    .get(obtenerUnaCiudad)


Router.route("/itineraries")
    .get(consultaItinerarios)
    .post(cargarItianerario)

Router.route("/itineraries/:id")
    .delete(deleteItinerary)
    .put(modificarItinerario)

Router.route("/likeDislike/:id")
    .put(passport.authenticate("jwt", { session: false }), likeDislike)

Router.route("/itineraries/city/:id")
    .get(getItinerariesByCity)


Router.route("/auth/signUp")
    .post(validator, signUpUser)

Router.route("/auth/signIn")
    .post(signInUser)

Router.route("/auth/signOut")
    .post(signOutUser)


Router.route("/verify/:uniqueString")
    .get(verifyEmail)


Router.route("/auth/signInToken")
    .get(passport.authenticate("jwt", { session: false }), verificarToken)



module.exports = Router