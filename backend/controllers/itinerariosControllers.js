const Itinerarios = require("../models/itinerarys")

const ciudadesController = {

    consultaItinerarios: async (req, res) => {
        let itinerarios
        let error = null
        try {
            itinerarios = await Itinerarios.find()
        } catch (err) {
            error = err
            console.log(error)
        }

        res.json({
            response: error ? "ERROR" : { itinerarios },
            success: error ? false : true,
            error: error
        })
    },
    cargarItianerario: async (req, res) => {
        const { ciudad, user, titulo, duration, price, likes, tags, comments, activities } = req.body.objItinerary

        new Itinerarios({
            ciudad: ciudad,
            user: user,
            tituloIt: titulo,
            price: price,
            duration: duration,
            likes: likes,
            tags: tags,
            comments: comments,
            activities: activities

        }).save().then((response) => res.json({ response }))
    },

    eliminarItinerario: async (req, res) => {
        const id = req.params.id
        let itinerariosAct
        try {
            await Itinerarios.findByIdAndDelete({ _id: id })
            itinerariosAct = await Itinerarios.find()
        } catch (err) {
            console.log(err)
        }
        res.json({ response: itinerariosAct, success: true })
    },

    modificarItinerario: async (req, res) => {
        let id = req.params.id
        const { ciudad, user, titulo, duration, price, likes, tags, comments, activities } = req.body.objItinerary
        let itinerariosAct = {
            ciudad: ciudad,
            user: user,
            tituloIt: titulo,
            price: price,
            duration: duration,
            likes: likes,
            tags: tags,
            comments: comments,
            activities: activities
        }
        let actualizado
        try {
            actualizado = await Itinerarios.findOneAndUpdate({ _id: id }, itinerariosAct, { new: true })
        } catch (error) {
            throw error
        }
        res.json({ success: actualizado ? true : false })
    },
    obtenerItinerarioPorCiudad: async (req, res) => {
        try {
            let itinerarios 
            const id = req.params.id
            let error = null
            try {
                itinerarios = await Itinerarios.find({ ciudad: id })
            } catch (err) {
                console.log(err)
            }
            
            // res.json({ response: itinerarios, success: true })
            res.json({
                response: error ? "ERROR" : itinerarios,
                success: error ? false : true,
                error: error
            })
        } catch (err) {
            console.log(err)
        }
    },
}

module.exports = ciudadesController