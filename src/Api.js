 const Api ={
    getTemp:(unit)=>{
       return fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=Munich,de&APPID=886705b4c1182eb1c69f28eb8c520e20&cnt=10&units=${unit}`)
        .then((resp) => resp.json())
        .then((data)=>{
            debugger
            return data.list
        })
        .catch((err)=>{

        })
    }   
}


export default Api;