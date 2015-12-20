angular.module('halfchicken.controllers.register', [])
.controller('registerCtrl', function( $scope, $ionicModal, shopListService ){

	var map, markers = [];
	$scope.shopList = [];
	$scope.meeting = {
		shop : {
			name : '',
			shopId : '',
			latitude : 0,
			longitude : 0
		}
	};

	$scope.modalInfo = {
		searchText : '',

	};

	$ionicModal.fromTemplateUrl('templates/modal/modal-register-map.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		console.log('zzz');
		$scope.modal.show();
		initMap();
	};

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.pickStore = function ( store ) {
		$scope.clearMarker( map, markers);
		$scope.addMarker( map, markers, store );
		$scope.meeting.shop = store;
		console.log ( store );
	};

	$scope.registerStore = function() {
		$scope.closeModal();
	};

	$scope.addMarker = function ( map, markers, store ) {
	    var icon = {
			url: store.img,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(25, 25)
		};

		var latLng = { lat : store.latitude, lng : store.longitude };
		// Create a marker for each place.
		markers.push(new google.maps.Marker({
			map: map,
			icon: icon,
			title: store.name,
			position: latLng
		}));

		map.setCenter( latLng );
	};

	$scope.removeMarker = function ( map, markers, idx ) {

	};

	$scope.clearMarker = function ( map, markers ) {
		markers.forEach(function(marker) {
			marker.setMap(null);
		});
		markers = [];
	};

	//Cleanup the modal when we're done with it!
	$scope.$on('$destroy', function() {
		$scope.modal.remove();
	});

	// Execute action on hide modal
	$scope.$on('modal.hidden', function() {
		// Execute action
	});

	// Execute action on remove modal
	$scope.$on('modal.removed', function() {
		// Execute action
	});
	
	function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: 37.586296, lng: 127.0269483},
		    zoom: 17
		  });
	};

	// Fixe for ngAutocomplete
	$scope.disableTap = function(){
	    container = document.getElementsByClassName('pac-container');
	    // disable ionic data tab
	    angular.element(container).attr('data-tap-disabled', 'true');
	    // leave input field if google-address-entry is selected
	    angular.element(container).on("click", function(){
	        document.getElementById('autocomplete').blur();
	    });
	    
	}

	// initMap();
	//$scope.openModal();
	(function () {
		console.log ( $scope );
		shopListService
			.get()
			.then( function ( res ) {
				console.log ( res.data );
				if( res.status === 200 ) {
					$scope.shopList = res.data;
				}
			})

	}());

})

.directive('disabletap', function($timeout, $interval) {
  return {
    link: function() {
      $timeout(function() {
        container = document.getElementsByClassName('pac-container');
        // disable ionic data tab

        angular.element(container).attr('data-tap-disabled', 'true');
        // leave input field if google-address-entry is selected
        // angular.element(container).on("click", function(){
        //     document.getElementById('type-selector').blur();
        // });

      },500);

    }
  };
});