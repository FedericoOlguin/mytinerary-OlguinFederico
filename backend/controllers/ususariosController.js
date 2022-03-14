const Usuario = require("../models/users")
const bcryptjs = require("bcryptjs")



const usuariosController = {

    signUpUser: async (req, res) => {
        const { from, name, email, password, imageUrl, country, emailVerificado } = req.body.objUser
        try {
            // busco por email al usuario
            const userExiste = await Usuario.findOne({ email })
            // Se comprueba si el usuario existe o no
            if (userExiste) {
                // El usuario existe
                // Se comprueba el metodo por el cual esta registrado
                if (userExiste.from.indexOf(from) !== -1) {
                    // El metodo de registro ya existe, se retorna un mensaje avisando que solo tiene que realizar el signin
                    res.json({ success: false, from: "signup", message: " ya has realizado SignUp de esta forma. Por favor realiza SignIn " })
                } else {
                    // El metodo de registro no existe, y se procede a encriptar la contraseña y asignar lkos valores en las variables
                    const passwordHasheada = bcryptjs.hashSync(password, 10)
                    userExiste.from.push(from)
                    userExiste.password.push(passwordHasheada)

                    // Se comprueba  el metodo y la procedencia del registro (si desde el propio formulario o desde una cuenta de google,facebook,etc)
                    if (from === "signup") {
                        // Al registrarse  desde el formulario de la pagina se procede a enviar un email de confirmacion y se guarda al usuario en la base de datos
                        await userExiste.save()
                        res.json({
                            success: true, from: "signup",
                            message: "Te enviamos un email para validarlo, revisa tu casilla de correo para completar el registro"
                        })
                    } else {
                        // Al ser una cuenta ya existente de servicios externos solo se carga al usuario a la base de datros  
                        userExiste.save()
                        res.json({
                            success: true,
                            from: from,
                            message: "Agregamos " + from + " a tus medios para realizar signup"
                        })
                    }
                }
            } else {
                // El usuario no existe
                // Se encripta la contraseña, se crea un objeto usuario para cargar todos los datos
                const passwordHasheada = bcryptjs.hashSync(password, 10)
                const newUser = await new Usuario({
                    name: name,
                    email: email,
                    password: [passwordHasheada],
                    imageUrl: imageUrl,
                    country: country,
                    emailVerificado: true,
                    from: [from],
                })
                // Se comprueba el metodo y la proicedencia del registro
                if (from !== "signup") {
                    // al ser de una cuenta de terceros solo se carga el usuario
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Felicidades se ha creado tu usuario con " + from
                    })
                } else {
                    // El metodo es desde el formulario, se carga el usuario y se requiere comprobacion de email
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "Te enviamos un email para validarlo, revisa tu casilla de correo para completar el registro"
                    })
                }
            }
        } catch (err) {
            console.log(err);
            res.json({ success: false, message: "Algo salio mal Vuelve a uintentarlo mas tarde" })
        }
    },
    signInUser: async (req, res) => {
        const { email, password, from } = req.body.objUser
        try {
            const userExiste = await Usuario.findOne({ email })
            console.log(userExiste)
            if (!userExiste) {
                res.json({ success: false, message: "Tu usuario no ha sido registrado, realiza sig up" })
            } else {
                if (from !== "signin") {
                    let passwordEquals = userExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if (passwordEquals.length > 0) {
                        const userData = {
                            name: userExiste.name,
                            email: userExiste.email,
                            from: userExiste.from
                        }
                        await userExiste.save()
                        res.json({
                            success: true,
                            response: { userData },
                            message: "Bienvenido " + userData.name.firstName
                        })
                    } else {
                        res.json({
                            success: false,
                            message: "No ahs realizado registro con " + from + " si quieres ingresar con este metodo debes hacer el signUp con " + from
                        })
                    }
                } else {
                    if (userExiste.emailVerificado) {
                        let passwordEquals = userExiste.password.filter(pass => bcryptjs.compareSync(password, pass))
                        if (passwordEquals.length > 0) {
                            const userData = {
                                name: userExiste.name,
                                email: userExiste.email,
                                imageUrl: userExiste.imageUrl
                            }
                            res.json({
                                success: true,
                                response: { userData },
                                message: "Bienvenido " + (userData.name).firstName
                            })
                        } else {
                            res.json({
                                success: false,
                                message: "El usuario o password no coinciden"
                            })
                        }

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "No has verificado tu email, por favor verifica tu casilla para competar tu sign up"
                        })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
    // deleteUser: async (req, res) => {
    //     const id = req.params.id
    //     let usersAct
    //     try {
    //         await Usuario.findByIdAndDelete({ _id: id })
    //         usersAct = await Usuario.find()
    //     } catch (err) {
    //         console.log(err)
    //     }
    //     res.json({ response: usersAct, success: true })
    // },
    // updateUser: async (req, res) => {
    //     let id = req.params.id
    //     let userAct = req.body.objUser
    //     let actualizado
    //     try {
    //         actualizado = await Usuario.findOneAndUpdate({ _id: id }, userAct, { new: true })
    //     } catch (error) {
    //         throw error
    //     }
    //     res.json({ success: actualizado ? true : false })
    // },

    // getById: async (req, res) => {
    //     const id = req.params.id
    //     let usuario
    //     let error
    //     try {
    //         usuario = await Usuario.findOne({ _id: id })
    //     } catch (err) {
    //         error = err
    //     }
    //     res.json({
    //         response: error ? "ERROR" : usuario,
    //         success: error ? false : true,
    //         error: error
    //     })
    // }
}

module.exports = usuariosController