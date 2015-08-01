var app = angular.module('app',['ngRoute']);

app.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($rootScope, $location){
   $rootScope.activetab = $location.path();
}
