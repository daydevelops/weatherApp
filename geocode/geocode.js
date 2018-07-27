

const request = require('request');

function geocodeAddress(address, callback) {
    request({
        url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAyLZlj2zHg3TqgQE0flERVHXOjUxXQlM4&address='+encodeURIComponent(address),
        json:true
    },(error, response, body) => {
        if (error) {
            callback('error');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('address could not be found');
        } else if (body.status === 'OK') {
            callback(undefined,{
                address:body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                long:body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = {
    geocodeAddress
}
