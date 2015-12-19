angular.module('halfchicken.controllers.user.login', [])
.controller('logInCtrl', function( $scope, $http, DEPLOY_SERVER_URL, $state ){
	$scope.move = {
		main : function () {
			$state.go( 'main' );
		},
		signUp : function () {
			$state.go( 'signup' );
		}
	};
	$http.get( DEPLOY_SERVER_URL + '/things' ).then( function ( response ) {
		console.log ( response.data );
	});
})