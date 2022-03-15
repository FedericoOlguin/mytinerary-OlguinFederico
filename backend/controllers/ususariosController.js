const Usuario = require("../models/users")
const bcryptjs = require("bcryptjs")



const usuariosController = {

    signUpUser: async (req, res) => {
        const { from, firstName, lastName, email, password, imageUrl, country } = req.body.objUser
        const name = {
            firstName: firstName,
            lastName: lastName,
        }
        try {

            // busco por email al usuario
            const userExiste = await Usuario.findOne({ email })
            // Se comprueba si el usuario existe o no
            if (userExiste) {
                // El usuario existe
                // Se comprueba el metodo por el cual esta registrado
                if (userExiste.from.indexOf(from) !== -1) {
                    // El metodo de registro ya existe, se retorna un mensaje avisando que solo tiene que realizar el signin
                    res.json({ success: false, from: "signup", message: "You have already registered in this way. please sign in" })
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
                            message: "We send you an email to validate it, check your mailbox to complete the registration"
                        })
                    } else {
                        // Al ser una cuenta ya existente de servicios externos solo se carga al usuario a la base de datros  
                        userExiste.save()
                        res.json({
                            success: true,
                            from: from,
                            message: "We added " + from + " to your means of registration."
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
                        message: "Congratulations, your user has been created with " + from
                    })
                } else {
                    console.log("entro al controlador correcto")
                    // El metodo es desde el formulario, se carga el usuario y se requiere comprobacion de email
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "signup",
                        message: "We send you an email to validate it, check your mailbox to complete the registration"
                    })
                }
            }
        } catch (err) {
            console.log(err);
            res.json({ success: false, message: "Something went wrong, Please try again later" })
        }
    },
    signInUser: async (req, res) => {
        const { email, password, from } = req.body.objUser
        try {
            const userExiste = await Usuario.findOne({ email })
            if (!userExiste) {
                res.json({ success: false, message: "Your user has not been registered, sign up" })
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
                            message: "Welcome " + userData.name.firstName
                        })
                    } else {
                        res.json({
                            success: false,
                            message: "You have not registered with " + from + ". If you want to enter with this method you must register with" + from
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
                                message: "Welcome " + (userData.name).firstName
                            })
                        } else {
                            res.json({
                                success: false,
                                message: "Username or password do not match"
                            })
                        }

                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You have not verified your email, please verify your email to complete your registration"
                        })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    },
    signOutUser: async (req, res) => {
        let datoUser = req.body.userEmail
        let newUser = await Usuario.findOne({ datoUser })
        console.log(newUser);
        await newUser.save()
        res.json(console.log("closed session " + newUser.email))

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