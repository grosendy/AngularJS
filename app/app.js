var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('ninjaController',['$scope', function($scope){

  $scope.message = "Hello Ninja";

  $scope.ninjas = ['Yoshi', 'Pedro', 'Mario', 'Gabriel']
}]);
