'use strict'; 

var app = require('express')();
var session = require('express-session');
var path = require('path');
var passport = require('passport');
var passport-local = require('passport-local');

app.use(session({
	// this mandatory configuration ensures session IDs are not predictable
	secret: 'tongiscool'
}));

// put this right after the session setup middleware
app.use(function (req, res, next) {
    console.log('session', req.session);
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));

app.use('/login', require('../login/login.router'));

app.use('/auth', require('../auth/auth.router'));

var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
	app.get(stateRoute, function (req, res) {
		res.sendFile(indexPath);
	});
});

app.use(require('./error.middleware'));

module.exports = app;