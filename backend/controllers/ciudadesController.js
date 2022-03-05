const Ciudades = require("../models/ciudades")

const ciudadesController = {

    consultaCiudades: async (req, res) => {
        let ciudades
        let error = null
        try {
            ciudades = await Ciudades.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response: error ? "ERROR" : { ciudades },
            success: error ? false : true,
            error: error
        })
    },
    cargarCiudad: async (req, res) => {
        const { ciudad, pais, imagen, description } = req.body.objData

        new Ciudades({
            ciudad: ciudad,
            imagen: imagen,
            pais: pais,
            description: description
        }).save().then((respuesta) => res.json({ respuesta }))
    },



    eliminarCiudad: async (req, res) => {
        const id = req.params.id
        await Ciudades.findByIdAndDelete({ _id: id })

    },

    modificarCiudad: async (req, res) => {
        let id = req.params.id
        let ciudadAct = req.body
        let actualizado
        try {
            actualizado = await Ciudades.findOneAndUpdate({ _id: id }, ciudadAct, { new: true })
        } catch (error) {
            throw error
        }
        res.json({ success: actualizado ? true : false })
    },
    obtenerUnaCiudad: async (req, res) => {
        const id = req.params.id
        let ciudad
        let error = null
        try {
            ciudad = await Ciudades.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? "ERROR" : ciudad,
            success: error ? false : true,
            error: error
        })
    }
}

module.exports = ciudadesController