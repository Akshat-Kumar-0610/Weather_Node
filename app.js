const weather = require('./weather.js')
const chalk = require('chalk')

if(process.argv[2]){
    weather.getWeather(process.argv[2])
}else{
    return console.log(chalk.black.bgRed('Please enter the city oyu want to find weather for.'))
}