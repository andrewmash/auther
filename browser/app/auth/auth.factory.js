'use strict';

app.factory('Auth', function ($http) {
	
	var Auth={};
	Auth.signupOrLogin = function(route, email, pass) {
		return $http.post(route, {email: email, password: pass})
		.then(function (res) {
			Auth.currentUser = res.data;
			console.log(Auth.currentUser);
		});
	};

	Auth.currentUser = {};

return Auth;

});