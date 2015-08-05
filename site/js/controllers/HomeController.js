app.controller('HomeController', HomeController);
function HomeController($scope, $filter){
  //var date = new Date();
  //$scope.hora = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() +
  //" " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  $scope.boasVindas = 'Seja bem vindo! Esse é um site de testes. Atualmente estou estudando AngularJS. No futuro, testarei o ReactJS';
  //$filter('date')($scope.hora, 'dd/MM/yyyy HH:mm:ss', -0300);
}
