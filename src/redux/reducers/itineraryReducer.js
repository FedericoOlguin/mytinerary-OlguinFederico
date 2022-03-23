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
        case "deleteItinerary":
            return {
                ...state,
                itinerarios: action.payLoad.itinerarios
            }
        case "cargarItinerario":
            let itinerariosAct = [...state.itinerarios]
            itinerariosAct.push(action.payLoad)
            return {
                ...state,
                itinerariosAct,
                auxiliarItinerario: [...itinerariosAct]
            }
        case "filtrarItinerary":
            let filtrado = []
            filtrado.push(action.payLoad.itinerarios.filter(element => element.toLowerCase().startsWith(action.payLoad.value.toLowerCase())))
            return {
                ...state,
                itinerarios: filtrado[0]
            }
        case "filtrarByCiudad":
            // console.log(action.payLoad)
            let devolver = action.payLoad
            // console.log(devolver)
            return {
                ...state,
                itinerarios: devolver
            }
        default:
            return state
    }

}
export default itinerariosReducer