const request = require('request')
const yargs = require('yargs')
const weather = require('./weather.js')
const url = 'http://api.weatherapi.com/v1/forecast.json?key=fedd9d6a75744f7d97935207210607&days=1&aqi=yes&alerts=no'

yargs.command({
    command: 'weather',
    describe: 'Enter city.',
    builder: {
        city: {
            describe: 'Enter city.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        weather.getWeather(argv.city)
    }

})
console.log(yargs.argv) 

