import axios from "axios";

const productosActions = {

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
    }
}



export default productosActions