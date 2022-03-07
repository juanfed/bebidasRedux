import { OBTNER_DATOS_SUCCESS } from '../type';

const estadoInicial = {
    categorias: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = estadoInicial, action) =>{
    switch (action.type) {
        case OBTNER_DATOS_SUCCESS:
            return {...state, categorias: action.payload }
    
        default:
            return state
    }
}