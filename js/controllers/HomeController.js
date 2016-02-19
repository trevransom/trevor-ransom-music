app.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'home';
    return page === currentRoute ? 'active' : '';
  };
  
  $scope.loadHome = function () {
    $location.url('/home');
  };

  $scope.loadSounds = function () {
    $location.url('/sounds');
  };
    
  $scope.loadVideos = function () {
    $location.url('/videos');
  };  
}]);