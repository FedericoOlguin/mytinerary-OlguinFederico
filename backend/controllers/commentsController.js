const Itinerarios = require("../models/itinerarys")



const commentsController = {
    addComment: async (req, res) => {
        const { itineraryId, comment } = req.body.comment
        const user = req.user.id
        try {
            const resComment = await Itinerarios.findOneAndUpdate({ _id: itineraryId }, { $push: { comments: { comment: comment, userId: user } } })

            const idCiudad = resComment.ciudad
            const devolver = await Itinerarios.find({ ciudad: idCiudad })
                .populate("comments.userId", { name: 1, imageUrl: 1 })
                .populate("activities")
          

            res.json({ success: true, response: devolver, message: "Thanks for your comment" })

        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, Please try again later" })
        }
    },
    modificarComment: async (req, res) => {
        const { commentId, comment } = req.body.comment
        // const user = req.user.id
        try {
            const resComment = await Itinerarios.findOneAndUpdate({ "comments._id": commentId }, { $set: { "comments.$.comment": comment } }, { new: true })
            const idCiudad = resComment.ciudad
            const devolver = await Itinerarios.find({ ciudad: idCiudad })
                .populate("comments.userId", { name: 1, imageUrl: 1 })
                .populate("activities")

            res.json({ success: true, response: devolver, message: "Thanks for your comment" })
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, Please try again later" })
        }
    },
    deleteComment: async (req, res) => {
        const id = req.params.id
        // const user = req.user.id


        try {
            const resComment = await Itinerarios.findOneAndUpdate({ "comments._id": id }, { $pull: { comments: { _id: id } } }, { new: true })
            const idCiudad = resComment.ciudad
            const devolver = await Itinerarios.find({ ciudad: idCiudad })
            .populate("comments.userId", { name: 1, imageUrl: 1 })
            .populate("activities")
            console.log("---------------------devolver--------------------");
            console.log(devolver);
            console.log("---------------------devolver--------------------");

            res.json({ success: true, response: devolver, message: "Thanks for your comment" })
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, Please try again later" })
        }
    }

}


module.exports = commentsController