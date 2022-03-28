const initialState = {
    itinerarios: [],
    auxiliarItinerario: [],
    snakbar: {
        view: false,
        success: false,
        message: ""
    }
}


const itinerariosReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "fetchItinerary":
            return {
                ...state,
                itinerarios: action.payLoad,
                auxiliarItinerario: action.payLoad
            }
        case "filtrarItinerary":
            let filtrado = []
            filtrado.push(action.payLoad.itinerarios.filter(element => element.toLowerCase().startsWith(action.payLoad.value.toLowerCase())))
            return {
                ...state,
                itinerarios: filtrado[0]
            }

        case "message":
            return {
                ...state,
                snakbar:action.payLoad
            }
        // case "filtrarByCiudad":

        //     let devolver = action.payLoad

        //     return {
        //         ...state,
        //         itinerarios: devolver
        //     }
        default:
            return state
    }

}
export default itinerariosReducer