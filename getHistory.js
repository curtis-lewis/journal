function getHistory(req, res) {
	const { Client } = require('pg');

	var test = [];

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
			test = res.rows;
			alert(res.rows);
		}
		client.end();
	});

	var data = {test: test};	
	res.render('history', data);
}

// function setValue(value) {
// 	test = value;
// 	console.log(test);
// }

module.exports = {getHistory: getHistory};