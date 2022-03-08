import axios from "axios"



const itinerarioActions = {
    getAllItinerarios: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/itinerarys")
            dispatch({ type: "fetch", payLoad: res })
        }
    },
    eliminarItinerario: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.delete(`http://localhost:4000/api/itinerarys/${id}`)
                dispatch({ type: "delete", payLoad: res.data.response })
            } catch (err) {
                console.log(err)
            }
        }
    },
    filtrarItinerary: (itinerarios, value) => {
        return (dispatch, getState) => {
            dispatch({ type: "filtrarItinerary", payLoad: { itinerarios, value } })
        }
    },
    cargarItinerario: (objItinerary) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post("http://localhost:4000/api/itinerarys",objItinerary)
                dispatch({ type: "cargarItinerario", payLoad: res.data.response })
            } catch (err) {
                console.log(err)
            }
        }
    },
    filtrarByCiudad: (idCiudad) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itinerarys/city/${idCiudad}`)
            dispatch({ type: "filtrarByCiudad", payLoad: {idCiudad} })
        }
    },
    modificarItinerario: (idCiudad, ciudad, user, titulo, duration, price, likes, tags, comments) => {
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/itinerarys/${idCiudad}`, { ciudad, user, titulo, duration, price, likes, tags, comments })
            dispatch({type:""})
        }
    }
}

export default itinerarioActions