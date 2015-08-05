'use strict';
var app = angular.module('ismaelsoj.eti.br',['ngRoute']);

app.config(ConfigRoute);

function ConfigRoute($routeProvider, $httpProvider){

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // remove o # da url
  //$locationProvider.hashPrefix('!')

  $routeProvider

  // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
  .when('/contato', {
    templateUrl : 'views/contato.html',
    controller  : 'ContatoController',
  })

  // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
  .when('/formacao', {
    templateUrl : 'views/formacao.html',
    controller  : 'FormacaoController',
  })

  .when('/', {
    templateUrl : 'views/home.html',
    controller  : 'HomeController',
  })

  // caso não seja nenhum desses, redirecione para a rota '/'
  .otherwise ({ redirectTo: '/' });
}
