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
                const res = await axios.post(`http://localhost:4000/api/auth/signUp`, { objUser })

                dispatch({
                    type: "message",
                    payLoad: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })

            } catch (err) {
                console.log(err);
            }
        }
    },
    signIn: (objUser) => {
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signIn`, { objUser })
                if (res.data.success) {
                    localStorage.setItem("token",res.data.response.token)
                    dispatch({ type: "user", payLoad: res.data })
                } else {
                    dispatch({
                        type: "message",
                        payLoad: {
                            view: true,
                            message: res.data.message,
                            success: res.data.success
                        }
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    signOut: (userEmail) => {
        console.log(userEmail)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`http://localhost:4000/api/auth/signOut/`, { userEmail })
                localStorage.removeItem("token")
                dispatch({ type: "userSignOut", payLoad: null })

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