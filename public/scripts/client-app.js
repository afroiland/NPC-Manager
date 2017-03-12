var app = angular.module('app', ['ngMaterial','ngRoute']);

app.config(function($mdThemingProvider) {
$mdThemingProvider.theme('default')
  .dark();
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/admin', {
      templateUrl: '/views/templates/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin'
    })
    .when('/NPCs', {
      templateUrl: '/views/templates/NPCs.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/addNPC', {
      templateUrl: '/views/templates/addNPC.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/random', {
      templateUrl: '/views/templates/random.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
