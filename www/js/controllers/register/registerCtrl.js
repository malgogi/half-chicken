angular.module('halfchicken.controllers.register', [])
.controller('registerCtrl', function( $scope, $ionicModal ){
	console.log( 'zzz' );
	
	$ionicModal.fromTemplateUrl('templates/modal/modal-register-map.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
		$scope.modal.show();
		initMap();
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
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

	var map;
	var input;
	var searchBox;
	var markers = [];
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 8
	  });
	  	input = document.getElementById('pac-input');
	  	var options = {
	  		types: ['geocode']
	  	};
	  	searchBox = new google.maps.places.SearchBox(input);
	  	var autocomplete = new google.maps.places.Autocomplete( input, options );
	  	//map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  		//autocomplete.bindTo('bounds', map);

	  searchBox.addListener('places_changed', function() {
		    var places = searchBox.getPlaces();

		    if (places.length == 0) {
		      return;
		    }

		    // Clear out the old markers.
		    markers.forEach(function(marker) {
		      marker.setMap(null);
		    });
		    markers = [];

		    // For each place, get the icon, name and location.
		    var bounds = new google.maps.LatLngBounds();
		    places.forEach(function(place) {
		      var icon = {
		        url: place.icon,
		        size: new google.maps.Size(71, 71),
		        origin: new google.maps.Point(0, 0),
		        anchor: new google.maps.Point(17, 34),
		        scaledSize: new google.maps.Size(25, 25)
		      };

		      // Create a marker for each place.
		      markers.push(new google.maps.Marker({
		        map: map,
		        icon: icon,
		        title: place.name,
		        position: place.geometry.location
		      }));

		      if (place.geometry.viewport) {
		        // Only geocodes have viewport.
		        bounds.union(place.geometry.viewport);
		      } else {
		        bounds.extend(place.geometry.location);
		      }
		    });
		    map.fitBounds(bounds);
		  });
	  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	}
	// Fixe for ngAutocomplete
$scope.disableTap = function(){
    container = document.getElementsByClassName('pac-container');
    // disable ionic data tab
    angular.element(container).attr('data-tap-disabled', 'true');
    // leave input field if google-address-entry is selected
    angular.element(container).on("click", function(){
        document.getElementById('autocomplete').blur();
    });
    console.log( 'zzzz' );
}
	// initMap();
	//$scope.openModal();
})

.directive('disabletap', function($timeout) {
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