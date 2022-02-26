const Router = require("express").Router()

const ciudadesController = require("../controllers/ciudadesController")
const { consultaCiudades } = ciudadesController


Router.route("/cities").get(consultaCiudades)



module.exports = Router