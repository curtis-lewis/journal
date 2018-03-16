function getEntry(req, res) {
	var date = req.query.date;
	var rating = req.query.rating;
	var entry = req.query.entry;

	var data = {date: date, rating: rating, entry: entry};
	
	res.render('display', data);
}

module.exports = {getEntry: getEntry};