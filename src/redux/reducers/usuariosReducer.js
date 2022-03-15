const initialState = {
    user: null,
    snackbar: {
        view: false,
        message: "",
        success: false
    }
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "user":
            return {
                ...state,
                user: action.payLoad
            }
        case "message":
            return {
                ...state,
                snackbar: action.payLoad
            }
        default:
            return state
    }
}

export default userReducer