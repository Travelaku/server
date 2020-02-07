const axios = require('axios')

module.exports = {
  weatherbit(req, res, next) {
    const { lat, lng } = req.body
    axios({
      method: 'get',
      url: `https://api.weatherbit.io/v2.0/current/airquality?key=${process.env.WEATHERBIT}&lat=${lat}&lon=${lng}`
    })
      .then(({ data }) => {
        res
          .status(200)
          .json(data)
      })
      .catch(next)
  },

  airvisual(req, res, next) {
    const { lat, lng } = req.body
    axios({
      method: 'get',
      url: `http://api.airvisual.com/v2/nearest_city?key=${process.env.AIRVISUAL}&lat=${lat}&lon=${lng}`
    })
      .then(({ data }) => {
        res
          .status(200)
          .json(data.data.current)
      })
      .catch(next)
  }
}