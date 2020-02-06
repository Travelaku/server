const router = require('express').Router()
const userRouter = require('./userRouter')
const geocodeRouter = require('./geocodeRouter')
const apiRouter = require('./apiRouter')

router.use('/', userRouter)
router.use('/api', apiRouter)
router.use('/', geocodeRouter)

module.exports = router