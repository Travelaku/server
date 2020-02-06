const router = require('express').Router()
const userRouter = require('./userRouter')
const apiRouter = require('./apiRouter')

router.use('/', userRouter)
router.use('/api', apiRouter)

module.exports = router