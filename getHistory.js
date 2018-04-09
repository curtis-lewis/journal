function getHistory(req, res) {
	const { Client } = require('pg');

	var results = [];

	const client = new Client({
  		connectionString: process.env.DATABASE_URL,
  		ssl: true,
	});

	client.connect();

	// prepare query
	const query = {
		name: 'select-history',
		text: 'SELECT content FROM entry'
	};

	// run query
	client.query(query, (err, res) => {
		if (err) {
			console.log(err.stack);
		} else {
			console.log(res.rows);
			results = res.rows;
		}
		client.end();
	});

	var data = {results: results};	
	res.render('history', data);
}

module.exports = {getHistory: getHistory};