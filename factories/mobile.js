angular.module('mobileApp').factory('Mobiles',function($filter,$rootScope,$location,$routeParams,$http,$q)
{
	return {
		getAllMobilesFromServer:function(){
			var def = $q.defer();
			$http({
				url: '/products.json',
				method:'GET',
			}).then(function(res){
				if(res.data.length>0){
					def.resolve(res.data);
					console.log(res.data);
				}else{
					def.reject("no data")
					console.log("nodata");
				}
			},function(err){
				def.reject(err)
				console.log("nodata");
			})
			return def.promise;
		},
		getMobileDetails:function(pindex){
			var def = $q.defer();
			$http({
				url: '/products.json',
				method:'GET',
			}).then(function(res){
				if(res.data.length>0){
					def.resolve(res.data[pindex]);
					console.log(res.data[pindex]);
				}else{
					def.reject("no data")
					console.log("nodata");
				}
			},function(err){
				def.reject(err)
				console.log("nodata");
			})
			return def.promise;
		}
	}
});
