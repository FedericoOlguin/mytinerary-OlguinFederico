const initialState = {
    ciudades: [],
    auxiliar: []
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
                ciudades: action.payLoad
            }

        case "cargarCiudad":
            let ciudadesAct = [...state.productos]
            ciudadesAct.push(...action.payLoad)
            return {
                ...state,
                ciudadesAct,
                auxiliar: [...ciudadesAct]
            }

        case "filtrar":

            let filtrado = []
            filtrado.push(action.payLoad.ciudades.filter((city => city.ciudad.toLowerCase().startsWith(action.payLoad.value.toLowerCase()))))
            return {
                ...state,
                ciudades: filtrado[0]
            }

        
        default:
            return state
    }
}

export default ciudadesReducer