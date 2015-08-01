
app.controller('ContatoCtrl', ContatoCtrl);

function ContatoCtrl($rootScope, $location){
   $rootScope.activetab = $location.path();
}
