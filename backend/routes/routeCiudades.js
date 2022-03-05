const Router = require("express").Router()

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades, cargarCiudad, eliminarCiudad, modificarCiudad, obtenerUnaCiudad } = ciudadesController


Router.route("/cities")
    .get(consultaCiudades)
    .post(cargarCiudad)

Router.route("/cities/:id")
    .delete(eliminarCiudad)
    .put(modificarCiudad)
    .get(obtenerUnaCiudad)



    

module.exports = Router