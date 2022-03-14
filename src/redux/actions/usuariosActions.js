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
                dispatch({ type: "message", payLoad: res.data })
            } catch (err) {
                console.log(err);
            }
        }
    },
    signIn: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signIn/`, { objUser })
                if (res.data.success) {
                    dispatch({ type: "user", payLoad: res.data })
                } else {
                    console.log(res.data.message)
                }
            } catch (err) {
                console.log(err)
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