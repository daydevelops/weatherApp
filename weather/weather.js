const request = require('request');

function getWeather(lat,lng,callback) {
request({
    url:'https://api.darksky.net/forecast/412a0358be10f507c17ee694deb36581/'+lat+','+lng+'?units=ca',
    json:true
},(error, response, body) => {
    debugger
    if (!error && response.statusCode===200) {
        callback(undefined,JSON.stringify(body.currently,undefined,4));
    } else {
        callback('unable to fetch weather');
    }
})
}

module.exports = {
    getWeather
}
