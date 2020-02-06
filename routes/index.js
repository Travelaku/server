const router = require('express').Router()
const userRouter = require('./userRouter')
const geocodeRouter = require('./geocodeRouter')

router.use('/', userRouter)
router.use('/', geocodeRouter)

module.exports = router