'use strict';

app.controller('SignupCtrl', function ($scope, $http, $state, Auth) {

	$scope.submitSignup = function() {
		Auth.signupOrLogin('/api/users',$scope.email,$scope.password)
		.then(function(res) {
			$state.go('stories');
		});
	};
});