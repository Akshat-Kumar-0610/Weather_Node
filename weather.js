const request = require('request')
const chalk = require('chalk')
const key = '67897c386bad4a7b81634832210607'

const getWeather = (city)=>{

    const url = 'http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}days=1&aqi=yes&alerts=no'
    request({url:url},(error , response)=>{
        if(error){
            console.log(chalk.black.bgRed('There was a problem connecting to internet.'))
        }else if(JSON.parse(response.body).error){
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