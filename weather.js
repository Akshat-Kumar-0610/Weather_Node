const request = require('request')
const chalk = require('chalk')
const url = 'http://api.weatherapi.com/v1/forecast.json?key=fedd9d6a75744f7d97935207210607&days=1&aqi=yes&alerts=no'
const url1='http://api.weatherapi.com/v1'
key = 'fedd9d6a75744f7d97935207210607'
const getWeather = (city)=>{
    request({url:url1, q:'Mumbai', days:'1', key:key},(error , response)=>{
        console.log(response)
        if(error){
            console.log(response)
            console.log(chalk.black.bgRed('There was a problem connecting to internet.'))
        }else if(JSON.parse(response.body).error){
            console.log(response)
            console.log(chalk.black.bgRed('No matching location found!'))
        }else{
            const data = JSON.parse(response.body)
        
            console.log (data.current.condition)    
        }
    
    })
}

module.exports={
    getWeather:getWeather,
}