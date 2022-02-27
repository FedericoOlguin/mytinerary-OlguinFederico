const mongoose = require("mongoose")


const ciudadesSchema = new mongoose.Schema({
    ciudad: { type: String, require: true },
    imagen: { type: String, require: true },
    pais: { type: String, require: true }
})


const Ciudades = mongoose.model("ciudades", ciudadesSchema)

module.exports = Ciudades


