const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad obtener el codigo',
        demando: true
    }
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLong(argv.direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temperatura}.`;
    } catch (e) {
        return `No de pudo determinar el clima de ${direccion}`;
    }
}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);