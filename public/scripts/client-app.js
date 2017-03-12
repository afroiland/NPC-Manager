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
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
