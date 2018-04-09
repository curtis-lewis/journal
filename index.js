/// heroku config
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var getEntry = require('./getEntry.js')
var getHistory = require('./getHistory.js')
var login = require('./login.js')
var session = require('client-sessions')
var bodyParser = require('body-parser')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(session({
  	cookieName: 'session',
  	secret: 'secret',
  	duration: 30 * 60 * 1000,
  	activeDuration: 5 * 60 * 1000
  }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/entry', getEntry.getEntry)
  .get('/history', getHistory.getHistory)
  .post('/login', login.login)
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
