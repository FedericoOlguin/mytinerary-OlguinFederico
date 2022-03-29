import axios from "axios";


const actividadesActions = {

    getAllactivities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerarry-olguin.herokuapp.com/api/activities")
            // dispatch({ type: "fetch", payLoad: res.data.response })
            return res
        }
    },
    cargarItinerario: (objActivity) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post("https://mytinerarry-olguin.herokuapp.com/api/activities", objActivity)
                // dispatch({ type: "cargarItinerario", payLoad: res.data.response })
                return res
            } catch (err) {
                console.log(err)
            }
        }
    },
}

export default actividadesActions