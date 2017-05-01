var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(function($mdThemingProvider) {
$mdThemingProvider.theme('default')
  .primaryPalette("teal")
  .accentPalette("grey")
  .dark();
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    // .when('/home', {
    //   templateUrl: '/views/templates/home.html',
    //   controller: 'HomeController',
    //   controllerAs: 'home'
    // })
    // .when('/admin', {
    //   templateUrl: '/views/templates/admin.html',
    //   controller: 'AdminController',
    //   controllerAs: 'admin'
    // })
    .when('/NPCs', {
      templateUrl: '/views/templates/NPCs.html',
      controller: 'npcsController',
      controllerAs: 'npcs'
    })
    .when('/addNPC', {
      templateUrl: '/views/templates/addNPC.html',
      controller: 'AddnpcController',
      controllerAs: 'addnpc'
    })
    .when('/random', {
      templateUrl: '/views/templates/random.html',
      controller: 'RandomController',
      controllerAs: 'random'
    })
    .when('/combat', {
      templateUrl: '/views/templates/combat.html',
      controller: 'CombatController',
      controllerAs: 'combat'
    })
    .otherwise({
      redirectTo: '/NPCs'
    });

}]);
