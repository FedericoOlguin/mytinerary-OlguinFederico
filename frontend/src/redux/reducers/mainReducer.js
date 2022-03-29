import { combineReducers } from "redux"
import ciudadesReducer from "./ciudadesReducer"
import itineraryReducer from "./itineraryReducer"
import usuariosReducer from "./usuariosReducer"

const mainReducer = combineReducers({
    ciudadesReducer,
    itineraryReducer,
    usuariosReducer
})

export default mainReducer