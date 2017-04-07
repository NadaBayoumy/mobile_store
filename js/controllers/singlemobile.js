angular.module('mobileApp').controller('singlemobile',function($scope,$filter,$rootScope,$location,$routeParams,Mobiles,$http,$q)
{
		Mobiles.getMobileDetails($routeParams['mobile_id']).then(function(data){
					$scope.mobile = data;
					$scope.features = {}
				  angular.forEach($scope.mobile.features, function(value, key){
									if(key != "dual sim"){
										 $scope.features[key] = value
									}
			     });
					$scope.reviews = data["reviews"];
					},function(err){
						console.log(err);
					}
	   );
})
