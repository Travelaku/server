const axios = require('axios')

class attractionsController{
  static getAttractions (req,res){
    let longitude = 106.816666
    let latitude = -6.200000
    // res.send("hai")
    axios({
      method : 'get',
      url : `https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?longitude=${longitude}&latitude=${latitude}`,
      headers : {
        'x-rapidapi-host' :  'tripadvisor1.p.rapidapi.com',
        'x-rapidapi-key' : '3f5ba6176emsh4b621e659e7f996p12fc18jsn30e17cb5d654'
      }
    })
    .then(result=>{
      // console.log(result)
      let data = result.data.data.map(el=>{
        if(el.name){
          let obj = {}
          obj.name = el.name
          obj.image_url = el.photo.images.medium.url
          obj.address = el.address||el.address_obj.city
          obj.rating = el.rating||'none'
          obj['category/type'] = `${el.category.name}, ${el.subcategory[0].name}`
          return obj
        }
      })
      console.log(data);
      
      res.status(201).json(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
}

module.exports = attractionsController