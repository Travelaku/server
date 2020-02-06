const router = require('express').Router()
const { geocodeController } = require('../controllers')

router.get('/getcoordinate', geocodeController.getCoordinate)

module.exports = router