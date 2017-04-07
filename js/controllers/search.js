angular.module('mobileApp').controller('search',function($scope,$timeout,resolvedMobiles,$filter,$compile,$rootScope,$location,$routeParams,Mobiles,$http,$q)
{
	$scope.mobiles = resolvedMobiles
	$rootScope.mobiles = $scope.mobiles
})
