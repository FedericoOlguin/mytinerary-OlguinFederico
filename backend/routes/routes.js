const Router = require("express").Router()

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades, cargarCiudad, eliminarCiudad, modificarCiudad, obtenerUnaCiudad } = ciudadesController

const itinerariosController = require("../controllers/itinerariosControllers")
const { consultaItinerarios, cargarItianerario, eliminarItinerario, modificarItinerario, obtenerItinerarioPorCiudad } = itinerariosController


Router.route("/cities")
    .get(consultaCiudades)
    .post(cargarCiudad)

Router.route("/cities/:id")
    .delete(eliminarCiudad)
    .put(modificarCiudad)
    .get(obtenerUnaCiudad)


Router.route("/itinerarys")
    .get(consultaItinerarios)
    .post(cargarItianerario)


Router.route("/itinerarys/:id")
    .delete(eliminarItinerario)
    .put(modificarItinerario)

Router.route("/itinerarys/city/:id")
    .get(obtenerItinerarioPorCiudad)


module.exports = Router