const router = require('express').Router()
const { publicHoliday, geocodeController, airQualityController } = require('../controllers')

router.get('/getcoordinate', geocodeController.getCoordinate)
router.get('/publicHoliday', publicHoliday.findPublicHoliday)
router.get('/weatherbit', airQualityController.weatherbit)
router.get('/airvisual', airQualityController.airvisual)

module.exports = router