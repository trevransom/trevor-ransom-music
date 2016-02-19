var app = angular.module("myApp", ['ngRoute']);
  
app.config(function ($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider.when('/home',
  {
    templateUrl:    'home.html',
    controller:     'HomeCtrl'
  });
  $routeProvider.when('/sounds',
  {
    templateUrl:    'views/sounds.html',
    controller:     'AboutCtrl'
  });
  $routeProvider.when('/videos',
  {
    templateUrl:    'views/videos.html',
    controller:     'AboutCtrl'
  });
  $routeProvider.otherwise(
  {
    redirectTo:     '/home',
    controller:     'HomeCtrl', 
  }
  );
});