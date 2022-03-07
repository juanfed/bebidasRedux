import axios from "axios";
import { OBTNER_DATOS_SUCCESS } from '../type';

const consultarDatosAction = () => {
    return async (dispatch) => {
        try {
            const url = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
            dispatch(consulta(url.data.drinks));

        } catch (error) {
            console.error(error)
        }
    }
}

export default consultarDatosAction;

const consulta = (data) => ({type: OBTNER_DATOS_SUCCESS, payload:data})