const initialState = {
    ciudades: [],
    auxiliar: [],
    filtrado: []
}

const ciudadesReducer = (state = initialState, action) => {
    // console.log(action.payLoad)
    switch (action.type) {
        case "fetch":
            return {
                ...state,
                ciudades: action.payLoad.ciudades,
                auxiliar: action.payLoad.ciudades
            }

        case "delete":
            return {
                ...state,
                ciudades: action.payLoad.ciudades
            }

        case "cargarCiudad":
            let ciudadesAct = [...state.ciudades]
            ciudadesAct.push(...action.payLoad)
            return {
                ...state,
                ciudadesAct,
                auxiliar: [...ciudadesAct]
            }

        case "filtrar":

            let filtrado = []
            filtrado.push(state.auxiliar.filter((city => city.ciudad.toLowerCase().startsWith(action.payLoad.value.toLowerCase()))))
            return {
                ...state,
                ciudades: filtrado[0]
            }

        case "traerUnaCiudad":
            return {
                ...state,
                ciudades: action.payLoad
            }

        default:
            return state
    }
}

export default ciudadesReducer