angular.module('halfchicken.controllers.user.signUp', [])
.controller('signUpCtrl', function( $scope, $http, DEPLOY_SERVER_URL ){
	$scope.user = {
		img : 'img/user-default.png',
		id : '',
		email : '',
		password : '',
		confirmPassword : ''
	};

	console.log ( 'zzzz' );
	$scope.getPicture = function () {
		//DestinationType 0 is base64
		var options = {
			destinationType : Camera.DestinationType.DATA_URL,
			pictureSourceType : Camera.PictureSourceType.PHOTOLIBRARY
		};

		navigator.camera.getPicture( 
			function success( img ) {
				$scope.user.img = "data:image/jpeg;base64," + img;
				$scope.$apply();
			}, 
			function error( reason ) {
				console.log ( 'failed' );
				console.log( reason );
			}, options );
	};
})