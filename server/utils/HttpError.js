'use strict';

var http = require('http');

function HttpError (status, message) {
	var err = new Error(message || http.STATUS_CODES[status]);
	err.status = status;
	err.__proto__ = HttpError.prototype;
	return err;
}

HttpError.prototype = new Error;

HttpError.prototype.middleware = function () {
	var self = this;
	return function (req, res, next) {
		next(self);
	}
};

module.exports = HttpError;