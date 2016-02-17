'use strict';

app.controller('LoginCtrl', function ($scope, $http, $state, Auth) {

	$scope.submitLogin = function() {
		Auth.signupOrLogin('/login',$scope.email, $scope.password)
		.then(function(){ 
			$state.go('stories');
		});
	};
});