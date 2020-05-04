const axios = require('axios');

const getClima = async(lng, lat) => {
    const apiKey = 'e0fb3e16d18426789e120e09dcfe6b1f';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}