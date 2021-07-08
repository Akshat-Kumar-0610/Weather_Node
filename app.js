const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const chalk = require('chalk')

if(process.argv[2]){
    geocode.getGeocode(process.argv[2], (error,data)=>{
        if (error){
            return console.log(chalk.black.bgRed(error))
        }

        forecast.getForecast(data.city, (error, forecastdata) => {
            if (error){
                return console.log(chalk.black.bgRed(error))
            }
            return console.log(chalk.black.bgGreen(data.location+'\nLatitude :'+data.lat+'\nLongitude: '+data.long+'\nWeather in '+data.city+' is '+forecastdata.forecastText+' with temperature of '+forecastdata.temp+' C.'))

          })
    })
}else{
    return console.log(chalk.black.bgRed('Please enter the city oyu want to find weather for.'))
}

