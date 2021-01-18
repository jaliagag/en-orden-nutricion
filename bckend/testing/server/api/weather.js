const axios = require('axios');

// configuring the path to read the environment variable file, .env, to get the weather
require('dotenv').confg({path: "./../../../.env"})

const baseUrl = "http://api.openwehathermap.org/data/2.5/weather";

class Weather {
  getWeatherData = async (zipCode, tempMetric) => {
    let url = `${baseUrl}?zip=${zipCode},us&appid=${process.env.WEATHER_KEY}&units=${tempMetric}}`;

    return (await axios(url)).data
  }
}

module.exports = Weather
