const router = require('express').Router()
const { publicHoliday, contentController } = require('../controllers')

router.get('/publicHoliday', publicHoliday.findPublicHoliday)
router.post('/getdata', contentController.getdata)

module.exports = router