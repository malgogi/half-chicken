angular.module('halfchicken.services.shopList', [])
//shop 정보를 가져오는 서비스
.service('shopListService', function( $http ){

	return {
		get : function () {
			return $http.get('data/store.json');
		}
	};
})