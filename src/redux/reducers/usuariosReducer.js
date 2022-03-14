const initialState = {
    user: null,
    message: null
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "user":
            return {
                ...state,
                user: action.payLoad
            }
        case "message":
            console.log(action.payLoad)
            return {
                ...state,
                message: action.payLoad.message
            }
        default:
            return state
    }
}

export default userReducer