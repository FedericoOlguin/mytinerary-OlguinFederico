const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({
    ciudad: { type: String, require: true },
    user: {
        nombre: { type: String, require: true }, 
        foto: { type: String, require: true },
    },
    tituloIt: { type: String, require: true },
    imagen:{type:String,require:true},
    price: { type: Number, require: true },
    duration: { type: Number, require: true },
    likes: { type: Array, default: [] },
    tags: { type: Array, require: true },
    comments: { type: Array, require: true },
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activities",
    }]
})

const Itinerarios = mongoose.model("itinerarios", itinerarySchema)

module.exports = Itinerarios