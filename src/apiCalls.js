import axios from "axios";



export const getCiudades = async () => {

    try {
        let data = await axios.get("http://localhost:4000/api/cities")
        return data
    } catch (error) {
        throw error
    }
}


export const cargarCiudad = async (objData) => {
    try {
        let data = await axios.post("http://localhost:4000/api/cities", { objData })
        return data
    } catch (error) {
        throw error
    }
}


export const eliminarCiudad = async (idCiudad) => {
    console.log(idCiudad)
    try {
        let data = await axios.delete(`http://localhost:4000/api/cities/${idCiudad}`)
        return data
    } catch (error) {
        throw error
    }
}

export const modificarCiudad = async (idCiudad, objData) => {
    console.log(idCiudad, objData)
    try {
        let data = await axios.put(`http://localhost:4000/api/cities/${idCiudad}`, objData)
        return data
    } catch (error) {
        throw error
    }
}