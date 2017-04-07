angular.module('mobileApp').config(function($routeProvider) {
	$routeProvider.when('/',{
		templateUrl: 'templates/allmobiles.html',
		controller:'allmobiles',
		resolve:{
			resolvedMobiles:function(Mobiles){
				return Mobiles.getAllMobilesFromServer().then(function(res){
					console.log('res in routes is' , res)
					return res;
				})
			}
		}
	})
	.when('/singlemobile/:mobile_id',{
		templateUrl: 'templates/singlemobile.html',
		controller:'singlemobile'
	})
	.when('/search',{
		templateUrl: 'templates/search.html',
		controller:'search',
		resolve:{
			resolvedMobiles:function(Mobiles){
				return Mobiles.getAllMobilesFromServer().then(function(res){
					console.log('res in routes is' , res)
					return res;
				})
			}
		}
	})
});
