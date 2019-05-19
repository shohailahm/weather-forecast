import {METRICRESULTS,IMPRESULTS} from '../../constants'
const initialState = {
    metrics: null,
    imperials:null
};

export default (state = initialState, action) => {

    switch (action.type) {
       case METRICRESULTS:
        return {...state,metrics:action.data}
        case IMPRESULTS:
         return {...state,imperials:action.data}   
         default:
            return state;
    }
};