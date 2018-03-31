function login(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	
	var data = {username: username, password: password};
	
	res.render('loginTest', data);
	req.session.loggedIn = true;
	req.session.username = username;
}

module.exports = {login: login};