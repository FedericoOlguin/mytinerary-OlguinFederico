const mongoose = require("mongoose")



const activitiesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String }
})


const Actividades = mongoose.model("actividades", activitiesSchema)
module.exports = Actividades