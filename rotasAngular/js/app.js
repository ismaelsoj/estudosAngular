'use strict';
var app = angular.module('app',['ngRoute']);

app.config(ConfigRoute);

function ConfigRoute($routeProvider, $httpProvider){

  $httpProvider.defaults.useXDomain = true;      
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // remove o # da url
  //$locationProvider.hashPrefix('!')

  $routeProvider

  // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
  .when('/home', {
    templateUrl : 'views/home.html',
    controller  : 'HomeCtrl',
  })

  // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
  .when('/sobre', {
    templateUrl : 'views/sobre.html',
    controller  : 'SobreCtrl',
  })

  // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
  .when('/contato', {
    templateUrl : 'views/contato.html',
    controller  : 'ContatoCtrl',
  })

  // caso não seja nenhum desses, redirecione para a rota '/'
  .otherwise ({ redirectTo: '/' });
}
