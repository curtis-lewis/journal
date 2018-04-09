function getEntry(req, res) {
	// get variables from the form
	var date = req.query.date;
	var rating = req.query.rating;
	var entry = req.query.entry;

	// set form variables to data
	var data = {date: date, rating: rating, entry: entry};

	// begin server connection
	const { Client } = require('pg');

	const client = new Client({
  		connectionString: process.env.DATABASE_URL,
  		ssl: true,
	});

	client.connect();

	// prepare query
	const query = {
		name: 'insert-entry',
		text: 'INSERT INTO ENTRY (user_id, post_date, rating, content) VALUES ($1, $2, $3, $4)',
		values: [1,  date, rating, entry]
	};

	// run query
	client.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
		} else {
			console.log(res.rows)
		}
		client.end();
	});

	// show results page (mostly for debugging)
	res.render('display', data);

}

// export getEntry()
module.exports = {getEntry: getEntry};