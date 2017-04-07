angular.module('mobileApp').controller('allmobiles',function($scope,$timeout,resolvedMobiles,$filter,$compile,$rootScope,$location,$routeParams,Mobiles,$http,$q)
{
	$scope.mobiles = resolvedMobiles
	$rootScope.mobiles = $scope.mobiles
})
