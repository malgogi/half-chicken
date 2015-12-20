angular.module('halfchicken.controllers.myPage', [])
.controller('myPageMainCtrl', function( $scope, $state ){
	$scope.move = {
		modify : function () {
			$state.go( 'myPageModify' );
		}
	};
})
.controller('myPageModifyCtrl', function ( $scope ) {
	$scope.user = {
		img : 'img/user-default.png',
		id : '',
		email : '',
		password : '',
		confirmPassword : ''
	};
		
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
});