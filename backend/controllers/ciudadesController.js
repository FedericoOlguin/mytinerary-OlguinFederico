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
        const { ciudad, pais, imagen } = req.body.objData

        new Ciudades({
            ciudad: ciudad,
            imagen: imagen,
            pais: pais
        }).save().then((respuesta) => res.json({ respuesta }))
    },



    eliminarCiudad: async (req, res) => {
        const id = req.params.id
        await Ciudades.findByIdAndDelete({ _id : id })

    },

    modificarCiudad: async (req, res) => {

    }
}

module.exports = ciudadesController