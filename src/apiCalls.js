import axios from "axios";



export const getCiudades = async () => {

    try {
        let data = await axios.get("http://localhost:4000/api/cities")
        return data
    } catch (error) {
        throw error
    }
}