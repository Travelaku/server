const router = require('express').Router()
const attractionsController = require('../controller.js/attractions')
const hotelsController = require('../controller.js/hotels')
const { publicHoliday, geocodeController, airQualityController } = require('../controllers')

router.get('/attractions', attractionsController.getAttractions)
router.get('/hotels', hotelsController.getHotels)
router.get('/getcoordinate', geocodeController.getCoordinate)
router.get('/publicHoliday', publicHoliday.findPublicHoliday)
router.get('/weatherbit', airQualityController.weatherbit)
router.get('/airvisual', airQualityController.airvisual)


module.exports = router