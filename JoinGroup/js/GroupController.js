angular.module('JMU', ['ngStamplay', 'ngRoute'], function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
  .controller('GroupCtrl', function ($scope, $location) {
  $scope.init = function () {
    console.log("init function called");

  };
  $scope.target = $location.search()['tid'];

});