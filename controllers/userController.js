const { User } = require('../models')
const { compare } = require('../helpers/hash')
const { sign } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports = {
  register(req, res, next) {
    const { username, email, password } = req.body
    User.create({
      username,
      email,
      password
    })
      .then(user => {
        res
          .status(201)
          .json(user)
      })
      .catch(err => {
        next({
          errorMessage: 'bad request',
          msg: err.errors[0].message
        })
      })
  },

  login(req, res, next) {
    const { email, password } = req.body
    const err = {
      errorMessage: 'bad request',
      msg : 'Invalid username / password'
    }
    User.findOne({ where: { email } })
      .then(user => {
        const valid = compare(password, user.password)
        if (!valid) {
          next({ msg: "Invalid Username / Password" })
        } else {
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email
          }
          const access_token = sign(payload)
          res
            .status(200)
            .json({ token: access_token, username: user.username })
        }
      })
      .catch(next(err))
  },

  googleSignIn(req, res, next) {
    let email
    let username
    console.log('MASUK')
    client.verifyIdToken({
      idToken: req.body.google_token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        console.log('MASUK 1')
        email = ticket.getPayload().email
        username = ticket.getPayload().name
        return User.findOne({ where: { email } })
      })
      .then(userData => {
        if (!userData) {
          console.log('masuk')
          return User.create({
            username,
            email,
            password: 'tesdoang'
          })
        }
        else {
          return userData
        }
      })
      .then(user => {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email
        }
        const access_token = sign(payload)
        res
          .status(200)
          .json({ token: access_token, email: user.email })
      })
      .catch(next)
  }
}