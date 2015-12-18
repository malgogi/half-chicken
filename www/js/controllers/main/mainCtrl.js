angular.module('halfchicken.controllers.main', [])
.controller('mainCtrl', function( $scope, $state ){
	$scope.move = {
		setting : function () {
			$state.go( 'setting' );
		}
	};
	console.log ( 'main ctrl' );	
})