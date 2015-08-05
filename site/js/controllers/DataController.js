app.controller('DataController', DataController);

function DataController($scope, $timeout){
  $scope.hora = new Date();
  $scope.runTimer = function(){
    $scope.hora = new Date();
    timer = $timeout($scope.runTimer, 1000);
  };
  var timer = $timeout($scope.runTimer, 1000);
}
