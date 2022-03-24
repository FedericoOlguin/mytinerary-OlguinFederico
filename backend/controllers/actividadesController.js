const Actividades = require("../models/activities")


const actividadesController = {
    cargarItianerario: async (req, res) => {
        const { imageUrl, description, title, } = req.body.objActivity

        new Actividades({
            title: title,
            imageUrl: imageUrl,
            description: description,
        }).save().then((response) => res.json({ response }))
    },
}

module.exports = actividadesController