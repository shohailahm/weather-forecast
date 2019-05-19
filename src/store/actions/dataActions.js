import Api from '../../Api';
import {METRICRESULTS,IMPRESULTS} from '../constants';
export const userActions={
    getTemp
}


function getTemp(units){
    return dispatch=>{
        if(units==="metric"){
            return  Api.getTemp(units).then(res=>{
                dispatch(getResultsMetric(res))
            })
        }
       return Api.getTemp(units).then(res=>{
            dispatch(getResultsImp(res))
        })
    } 
}

function getResultsMetric(res){
 return {type:"METRICRESULTS",data:res}
}

function getResultsImp(res){
    return {type:"IMPRESULTS",data:res}
   }
   
