const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e67b2ab7d0b1f5db3583d263ae0562cb&units=metric`);

    return resp.data.main;
}

module.exports = {
    getClima
}