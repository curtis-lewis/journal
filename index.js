const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool, Client } = require('pg')

const pool = new Pool({
	user: 'j_user',
	host: 'localhost',
	database: 'journal',
	password: 'j_pass',
	port: 5432,
})

const client = new Client({
	user: 'j_user',
	host: 'localhost',
	database: 'journal',
	password: 'j_pass',
	port: 5432,
})
client.connect()

var getEntry = require('./getEntry.js')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/entry', getEntry.getEntry)
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
