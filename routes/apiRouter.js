const router = require('express').Router()
const attractionsController = require('../controllers/attractions')
const hotelsController = require('../controllers/hotels')
const { publicHoliday, geocodeController, airQualityController } = require('../controllers')

router.get('/attractions', attractionsController.getAttractions)
router.get('/hotels', hotelsController.getHotels)
router.get('/getcoordinate', geocodeController.getCoordinate)
router.get('/publicHoliday', publicHoliday.findPublicHoliday)
router.get('/weatherbit', airQualityController.weatherbit)
router.get('/airvisual', airQualityController.airvisual)


module.exports = router