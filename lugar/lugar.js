const axios = require('axios');


//si la respuesta no se hace en 5 segundos se cancela

const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 5000,
        headers: { 'x-rapidapi-key': '003c5a1c5amshc4b96c9a71fd9a6p10de65jsnf2063872c2b9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
}