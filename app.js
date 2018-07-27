
const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            description:'address to fetch weather for',
            string:true
        }
    })
    .help()
    .argv;

var loc = {};
geocode.geocodeAddress(argv.a,(errorMsg, results) => {
    if (errorMsg) {
        console.log(errorMsg);
    } else {
        weather.getWeather(results.lat,results.long,(errorMsg,results2) => {
            if (errorMsg2) {
                console.log('ERROR: '+errorMsg);
            } else {
                console.log(results2);
            }
        });
    }
})
