app.controller('LogoutCtrl', function ($scope, $http, $state) {
	$scope.logout = function() {
		$http.get('/login/logout')
		.then(function(res) {
			console.log("mondo success");
			$state.go('login');
		});
	};

});
