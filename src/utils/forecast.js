const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=07adf470fc2316b399f48c1c1ccc2806&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.current.weather_descriptions[0], body.current.temperature,  body.current.humidity, body.location.name)
        }
    })
}

module.exports = forecast