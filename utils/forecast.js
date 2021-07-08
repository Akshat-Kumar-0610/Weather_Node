const request = require('request')
const weatherapikey = '67897c386bad4a7b81634832210607'

const getForecast= (city, callback)=>{
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherapikey}&q=${city}&days=1&aqi=yes&alerts=no`
    request({url:url,json:true},(error , response)=>{
        if(error){
            callback('There was a problem connecting to internet!',undefined)
        }else if(response.body.error){
            callback('No matching location found!',undefined)
        }else{
            callback(undefined,{
                forecastText: response.body.current.condition.text,
                temp:response.body.current.temp_c
            })            
        }
    
    })

}

module.exports={
    getForecast:getForecast
}