var app = angular.module('app',['ngRoute']);

app.controller('SobreCtrl', SobreCtrl);

function SobreCtrl($rootScope, $location){
   $rootScope.activetab = $location.path();
}
