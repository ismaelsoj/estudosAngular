
app.controller('HomeCtrl', HomeCtrl);

function HomeCtrl($rootScope, $location){
   $rootScope.activetab = $location.path();
}
