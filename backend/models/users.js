const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

    name: {
        firstName: { type: String, require: true },
        lastName: { type: String, require: true }
    },
    email: { type: String },
    password: [{type: String}],
    imageUrl: { type: String, required: true },
    country: { type: String, required: true },
    emailVerificado: { type: Boolean, require: true },
    from: { type: Array }
})


const Usuarios = mongoose.model("usuarios", userSchema)

module.exports = Usuarios