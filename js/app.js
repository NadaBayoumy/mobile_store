angular.module('mobileApp',["ngRoute"]);
angular.module('mobileApp').run(function($rootScope,$location){
  $rootScope.searchmobiles = function(){
    $location.url('/search/')
  }
});
