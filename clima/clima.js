const axios = require('axios');

const getClima = async (lat, lng) => {
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=baf8346ba1e8adbc8ca10380362b7a17`
  );

  if (resp.data.cod === 400) {
    throw new Error('Algun dato no es correcto.');
  }

  return resp.data.main.temp;
};

module.exports = {
  getClima
};
