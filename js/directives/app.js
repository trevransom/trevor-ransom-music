var app = angular.module("myApp", ['ngRoute']);
  
app.config(function ($routeProvider, $locationProvider, $httpProvider) {

  $routeProvider.when('/home',
  {
    templateUrl:    'views/home.html',
    controller:     'NavCtrl'
  });
  $routeProvider.when('/sounds',
  {
    templateUrl:    'views/sounds.html',
    controller:     'NavCtrl'
  });
  $routeProvider.when('/videos',
  {
    templateUrl:    'views/videos.html',
    controller:     'NavCtrl'
  });
  $routeProvider.otherwise(
  {
    redirectTo:     '/home',
    controller:     'NavCtrl'
  }
  );
});