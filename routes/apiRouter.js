const express = require('express')
const router = express.Router()
const PublicHoliday = require('../controllers/publicHoliday')

router.get('/publicHoliday', PublicHoliday.findPublicHoliday)

module.exports = router