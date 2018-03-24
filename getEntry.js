function getEntry(req, res) {
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
		var date = req.query.date;
		var rating = req.query.rating;
		var entry = req.query.entry;

	var data = {date: date, rating: rating, entry: entry};
	
	res.render('display', data);

	const query = {
		name: 'insert-entry',
		text: 'INSERT INTO ENTRY (user_id, post_date, rating, content) VALUES ($1, $2, $3, $4)',
		values: [1,  date, rating, entry]
	}

	client.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
		} else {
			console.log(res.rows)
		}
	})
}

module.exports = {getEntry: getEntry};