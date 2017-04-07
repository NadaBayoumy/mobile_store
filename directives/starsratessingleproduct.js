angular.module('mobileApp').directive('starRatingMobile',function(){
  return{
    template:'<i class="glyphicon glyphicon-star" ng-class="{\'glyphicon-star\' : !rate.empty , \'glyphicon-star-empty\' : rate.empty}" ng-repeat="rate in rates track by $index" ng-click="doRate($index)"></i>',
    scope:{
      ngModel:'='
    },
    require:['ngModel'],
    link:function(scope){
      scope.doRate = function(index){
          scope.ngModel = index+1;
          scope.render()
      }
      scope.$watch('ngModel',function(newVal,oldVal){
        console.log(newVal);
        console.log(oldVal);
        if(newVal != oldVal){
            scope.render();
        }
      })
      scope.render=function(){
          scope.rates =[]
          for (var i = 0; i < scope.ngModel; i++) {
            scope.rates.push({empty:false})
          }
          for (var i = 0; i < 5-scope.ngModel; i++) {
            scope.rates.push({empty:true})
          }
      }
      scope.render()
    }
  }
})
