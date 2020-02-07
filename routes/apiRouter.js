const router = require('express').Router()
<<<<<<< HEAD
const { publicHoliday, contentController } = require('../controllers')
=======
const attractionsController = require('../controllers/attractions')
const hotelsController = require('../controllers/hotels')
const { publicHoliday, geocodeController, airQualityController } = require('../controllers')
>>>>>>> development

router.get('/publicHoliday', publicHoliday.findPublicHoliday)
router.post('/getdata', contentController.getdata)

module.exports = router