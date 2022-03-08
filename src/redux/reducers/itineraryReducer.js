const initialState = {
    itinerarios: [],
    auxiliar: []
}


const itinerariosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "fetch":
            return {
                ...state,
                itinerarios: action.payLoad.itinerarios,
                auxiliar: action.payLoad.itinerarios
            }
        case "delete":
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
                auxiliar: [...itinerariosAct]
            }
        case "filtrarItinerary":
            let filtrado = []
            filtrado.push(action.payLoad.itinerarios.filter(element => element.toLowerCase().startsWith(action.payLoad.value.toLowerCase())))
            return {
                ...state,
                itinerarios: filtrado[0]
            }
        case "filtrarByCiudad":
            let devolver = []
            devolver.push(action.payLoad.datos.filter(itinerary => itinerary.ciudad == action.payLoad.idCiudad))
            return {
                ...state,
                itinerarios: devolver[0]
            }
        default:
            return state
    }

}
export default itinerariosReducer