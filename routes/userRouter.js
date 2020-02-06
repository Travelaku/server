const router = require('express').Router()

router.post('/register', (req, res) => res.send('tes register'))
router.post('/login', (req, res) => res.send('tes login'))

module.exports = router