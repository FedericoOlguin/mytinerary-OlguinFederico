const Actividades = require("../models/activities")


const actividadesController = {
    cargarActivitie: async (req, res) => {
        const { imageUrl, description, title, } = req.body.objActivity

        new Actividades({
            title: title,
            imageUrl: imageUrl,
            description: description,
        }).save().then((response) => res.json({ response }))
    },
    getAllActiviteis: async (req,res)=>{
        await Actividades.find().then(respon=>res.json({response:respon}))
    }
}

module.exports = actividadesController