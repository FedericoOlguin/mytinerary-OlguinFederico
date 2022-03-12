const Router = require("express").Router()

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades, cargarCiudad, eliminarCiudad, modificarCiudad, obtenerUnaCiudad } = ciudadesController

const itinerariosController = require("../controllers/itinerariosControllers")
const { consultaItinerarios, cargarItianerario, deleteItinerary, modificarItinerario, getItinerariesByCity } = itinerariosController
const usuariosController = require("../controllers/ususariosController")

const { getAllUsers, signUpUser, signOutUser, deleteUser, updateUser, getById } = usuariosController


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

Router.route("/itineraries/city/:id")
    .get(getItinerariesByCity)


Router.route("/auth/signUp")
    // .get(getAllUsers)
    .post(signUpUser)

Router.route("/auth/signOut")
    // .post(signOutUser)
// .put(updateUser)
// .delete(deleteUser)
// .get(getById)



module.exports = Router