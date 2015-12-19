angular.module('halfchicken.controllers.myPage', [])
.controller('myPageMainCtrl', function( $scope, $state ){
	$scope.move = {
		modify : function () {
			$state.go( 'myPageModify' );
		}
	};
})