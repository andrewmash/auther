'use strict';

app.factory('Auth', function ($http) {
	
	var Auth={};
	Auth.signupOrLogin = function(route, email, pass) {
		return $http.post(route, {email: email, password: pass});
	};

return Auth;

});