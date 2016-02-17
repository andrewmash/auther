'use strict';
console.log("Login router running furiously");
var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../utils/HttpError');
var User = require('../api/users/user.model');

router.post('/', function (req, res, next) {
	console.log("Found dat route");
	User.findOne({ 'email': req.body.email, 'password': req.body.password })
	.exec()
	.then(function(user) {
		if (!user) {
			res.sendStatus(401);
		} else {
			req.session.userId = user._id;
			res.sendStatus(200);
		}
	}).then(null, next);
});

router.get('/logout',function(req,res) {
	req.session.destroy();
	console.log("route hit");
	res.end();
});

module.exports = router;