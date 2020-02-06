const axios = require('axios')

module.exports = {
  getCoordinate(req, res, next) {
    const { address } = req.body
    axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLEAPIKEY}&address=${address}`
    })
      .then(({ data }) => {
        res
          .status(200)
          .json(data.results[0].geometry.location)
      })
      .catch(next)
  }
}