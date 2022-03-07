import { combineReducers } from "redux";
import consultarDatosReducer from "./consultarDatosReducer";

export default combineReducers({
    categorias: consultarDatosReducer
})