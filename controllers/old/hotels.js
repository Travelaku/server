const axios = require('axios')

class hotelsController{
  static getHotels(re,res,next){
    let longitude = 106.816666
    let latitude = -6.200000
    // res.send("hai")
    axios({
      method : 'get',
      url : `https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?latitude=${latitude}&longitude=${longitude}&currency=IDR`,
      headers : {
        'x-rapidapi-host' :  process.env.RAPID_HOST,
        'x-rapidapi-key' : process.env.RAPID_KEY
      }
    })
    .then(result=>{
      let data = result.data.data.map(el=>{
        if(el.name){
          let obj = {}
          obj.name = el.name
          obj.rating = el.rating
          obj.price = el.price
          obj.hotel_class = el.hotel_class
          return obj
        }
      })
      res.status(201).json(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = hotelsController