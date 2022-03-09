import axios from "axios";

const ciudadesActions = {

    getAllCiudades: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/cities")
            dispatch({ type: "fetch", payLoad: res.data.response })
        }
    },
    eliminarCiudad: (id) => {
        return async (dispatch, getState) => {

            try {
                const res = await axios.delete(`http://localhost:4000/api/cities/${id}`)
                dispatch({ type: "delete", payLoad: res.data.response })
            } catch (err) {
                console.error(err)
            }
        }
    },
    filtrar: (ciudades, value) => {
        return (dispatch, getState) => {
            dispatch({ type: "filtrar", payLoad: { ciudades, value } })
        }
    },
    cargarCiudad: (ciudad, description, imagen, pais) => {

        return async (dispatch, getState) => {
            try {
                const res = await axios.post("http://localhost:4000/api/cities", { ciudad, description, imagen, pais })
                dispatch({ type: "cargarCiudad", payLoad: res.data.response })
            } catch (err) {
                console.log(err)
            }
        }
    },
    getUnaCity: (idCity) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`http://localhost:4000/api/cities/${idCity}`)
                // console.log(res)
                return(res.data.response)
                // dispatch({ type: "traerUnaCiudad", payLoad: res.data.response })
            } catch (err) {
                console.log(err)
            }
        }
    }
}



export default ciudadesActions