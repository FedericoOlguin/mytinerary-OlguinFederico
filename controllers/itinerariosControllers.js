const Itinerarios = require("../models/itinerarys")

const ciudadesController = {

    consultaItinerarios: async (req, res) => {
        let itinerarios
        let error = null
        try {
            itinerarios = await Itinerarios.find().populate("activities").populate("comments.userId", { name: 1, imageUrl: 1 })
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

    deleteItinerary: async (req, res) => {
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
        let itinerariosAct = req.body.objItinerary
        let actualizado
        try {
            actualizado = await Itinerarios.findOneAndUpdate({ _id: id }, itinerariosAct, { new: true })
        } catch (error) {
            throw error
        }
        res.json({ success: actualizado ? true : false })
    },
    getItinerariesByCity: async (req, res) => {
        try {
            let itinerarios
            const id = req.params.id
            let error = null
            try {
                itinerarios = await Itinerarios.find({ ciudad: id }).populate("activities").populate("comments.userId", { name: 1, imageUrl: 1 })
                // console.log(itinerarios)
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
    getItineraryById: async (req, res) => {

        let itinerario
        const id = req.params.id
        let error = null
        try {
            itinerario = await Itinerarios.find({ _id: id }).populate("comments.userId", { name: 1, imageUrl: 1 })
        } catch (err) {
            console.log(err)
        }

        res.json({
            response: error ? "ERROR" : itinerario,
            success: error ? false : true,
            error: error
        })

    },
    likeDislike: async (req, res) => {
        const id = req.params.id
        const user = (req.user._id).toString()
        // console.log("user");
        // console.log(user)
        // console.log("idItinertario");
        // console.log(id)
        let itinerario
        let error = null
        let allItineraries
        try {
            itinerario = await Itinerarios.findOne({ _id: id })
            let ciudadI = itinerario.ciudad
            // console.log("-----------itinerario-----------")
            // console.log(ciudadI)
            if (itinerario.likes.includes(user)) {
                await Itinerarios.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                allItineraries = await Itinerarios.find({ ciudad: ciudadI }).populate("activities").populate("comments.userId", { name: 1, imageUrl: 1 })
                // console.log("{{{{{{{{{{{{{{{{{todos los itinerarios}}}}}}}}}}}}");
                // console.log(allItineraries);
                res.json({ success: true, response: allItineraries })

                // .then(respuesta => res.json({ success: true, response: respuesta }))
                // .catch(err => console.log(err))
            } else {
                await Itinerarios.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                allItineraries = await Itinerarios.find({ ciudad: ciudadI }).populate("activities").populate("comments.userId", { name: 1, imageUrl: 1 })
                res.json({ success: true, response: allItineraries })

                // .then(respuesta => res.json({ success: true, response: respuesta }))
                // .catch(err => console.log(err))
            }
        } catch (err) {
            error = err
            res.json({ success: false, response: error })
        }
    }
}

module.exports = ciudadesController