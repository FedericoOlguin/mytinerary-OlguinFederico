import { combineReducers} from "redux"
import ciudadesReducer from "./ciudadesReducer"
import itineraryReducer from "./itineraryReducer"

const mainReducer = combineReducers({
    ciudadesReducer,
    itineraryReducer
})

export default mainReducer