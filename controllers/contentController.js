const axios = require('axios');
const gak = process.env.GOOGLEAPIKEY
const wb = process.env.WEATHERBIT
const av = process.env.AIRVISUAL
const thost = process.env.RAPID_HOST
const tkey = process.env.RAPID_KEY


const geocodeBase = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
})

const wbBase = axios.create({
  baseURL: 'https://api.weatherbit.io/v2.0/current',
})

const avBase = axios.create({
  baseURL: 'http://api.airvisual.com/v2',
})

const hotels = (host, key, coord) => {
  return axios({
    method: 'get',
    url: `https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?latitude=${coord.lat}&longitude=${coord.lng}&currency=IDR`,
    headers: {
      'x-rapidapi-host': host,
      'x-rapidapi-key': key
    }
  })
}

const attractions = (host, key, coord) => {
  return axios({
    method: 'get',
    url: `https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?latitude=${coord.lat}&longitude=${coord.lng}`,
    headers: {
      'x-rapidapi-host': host,
      'x-rapidapi-key': key
    }
  })
}


const geocode = (key, address) => {
  const url = `/geocode/json?key=${key}&address=${address}`
  return geocodeBase.get(url)
}

const weatherbit = (key, coord) => {
  const url = `/airquality?key=${key}&lat=${coord.lat}&lon=${coord.lng}`
  return wbBase.get(url)
}

const airvisual = (key, coord) => {
  const url = `/nearest_city?key=${key}&lat=${coord.lat}&lon=${coord.lng}`
  return avBase.get(url)
}


module.exports = {
  getdata(req, res, next) {
    const { address } = req.body
    geocode(gak, address)
      .then(({ data }) => {
        coord = data.results[0].geometry.location
        const wbit = weatherbit(wb, coord)
        const avis = airvisual(av, coord)
        const tahotels = hotels(thost, tkey, coord)
        const taattract = attractions(thost, tkey, coord)

        Promise.all([wbit, avis, tahotels, taattract])
          .then(values => {
            const value1 = values[0].data
            const value2 = values[1].data.data.current
            const value3 = values[2].data.data.map(el => {
              if (el.name) {
                let obj = {}
                obj.name = el.name
                obj.rating = el.rating
                obj.price = el.price
                obj.hotel_class = el.hotel_class
                return obj
              }
            })
            const value4 = values[3].data.data.map(el => {
              if (el.name) {
                let obj = {}
                obj.name = el.name
                obj.image_url = el.photo.images.medium.url
                obj.address = el.address || el.address_obj.city
                obj.rating = el.rating || 'none'
                obj['category/type'] = `${el.category.name}, ${el.subcategory[0].name}`
                return obj
              }
            })
            res
              .status(200)
              .json({ weatherbit: value1, airvisual: value2, hotels: value3, attractions: value4 })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}