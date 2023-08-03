const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demend: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(35,139)
//     .then(console.log)
//     .catch(console.log);

const geInfo = async(direccion) => {
    try{
        const coords = await lugar.getLugarLatLng(direccion);
        const weather   = await clima.getClima(coords.lat,coords.lng);
        return `El clima de ${coords.direccion} es de ${weather.temp}C°\nCon sensacion termica de ${weather.feels_like}C°`;
    }catch (e){
        return `No se pudo determinar el clima de ${direccion}`;
    }finally{
        console.log('Ejecucion completada');
    }
}

geInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);