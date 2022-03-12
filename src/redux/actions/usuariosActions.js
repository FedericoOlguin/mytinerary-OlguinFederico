import axios from "axios";


const usersActions = {

    getAllUsers: () => {
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/users")
            dispatch({ type: "getAll", payLoad: res.data.response })
        }
    },
    deleteUser: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.delete(`http://localhost:4000/api/users/${id}`)
                dispatch({ type: "deleteUser", payLoad: res.data.response })
            } catch (err) {
                console.log(err);
            }
        }
    },
    signUp: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signUp/`, { objUser })
                dispatch({ type: "cargarUser", payLoad: res.data.response })
            } catch (err) {
                console.log(err);
            }
        }
    },
    getById: (id) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.get(`http://localhost:4000/api/users/${id}`)
                dispatch({ type: "getById", payLoad: res.data.response })
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export default usersActions