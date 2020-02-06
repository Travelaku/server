const router = require('express').Router()
const attractionsController = require('../controller.js/attractions')
const hotelsController = require('../controller.js/hotels')

router.get('/attractions', attractionsController.getAttractions)
router.get('/hotels', hotelsController.getHotels)

module.exports = router