import axios from "axios"



const itinerarioActions = {

    getAllItinerarios: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itineraries")
            dispatch({ type: "fetchItinerary", payLoad: res.data.response })
        }
    },


    filtrarItinerary: (itinerarios, value) => {
        return (dispatch, getState) => {
            dispatch({ type: "filtrarItinerary", payLoad: { itinerarios, value } })
        }
    },


    filtrarByCiudad: (idCiudad) => {

        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/city/${idCiudad}`)

            dispatch({ type: "fetchItinerary", payLoad: res.data.response })
        }
    },
    likeOrDislike: (idIytinerario) => {
        // console.log(token);
        if (localStorage.getItem("token")) {

            return async (dispatch, getState) => {
                const res = await axios.put(`http://localhost:4000/api/likeDislike/${idIytinerario}`, {}, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                    }
                })

                dispatch({ type: "fetchItinerary", payLoad: res.data.response })
            }
        } else {
            console.log("debe iniciar session")
        }
    },

    addComment: (comment) => {
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itineraries/comment`, { comment }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            console.log(res.data.response);
            dispatch({ type: "fetchItinerary", payLoad: res.data.response })
            dispatch({ type: "message", payLoad: { view: true, message: res.data.message } })
        }
    },
    modificarComment: (comment) => {
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/itineraries/comment`, { comment }, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            dispatch({ type: "fetchItinerary", payLoad: res.data.response })
            dispatch({ type: "message", payLoad: { view: true, message: res.data.message } })
        }
    },
    deleteComment: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/itineraries/comment/${id}`, {}, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")   //dejar espacio en bearer antes del cierre de las comillas ( "Bearer ")
                }
            })
            dispatch({ type: "fetchItinerary", payLoad: res.data.response })
            dispatch({ type: "message", payLoad: { view: true, message: res.data.message } })
        }
    }

}

export default itinerarioActions