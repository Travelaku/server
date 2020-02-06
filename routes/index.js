const router = require('express').Router()
const userRouter = require('./userRouter')
const apiRouter = require('./apiRouter')
const geocodeRouter = require('./geocodeRouter')

router.use('/', userRouter)
router.use('/api', apiRouter)
router.use('/', geocodeRouter)


module.exports = router