const axios = require('axios');

const getLugarLatLng = async(dir) =>{
    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/geo/1.0/direct?q=${encodedUlr}&limit=1&appid=e67b2ab7d0b1f5db3583d263ae0562cb`
    });
    
    const resp = await instance.get();

    if (resp.data.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data[0];
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
    getLugarLatLng
}