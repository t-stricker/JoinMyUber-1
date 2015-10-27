angular.module('JMU', ['ngStamplay', 'ngRoute'], function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
  .controller('GroupCtrl', function ($scope, $stamplay, $location) {
  var user = $stamplay.User().Model;
  $scope.userID;

  $scope.init = function () {
    console.log("init function called");
  };
  
  $scope.go = function () {
    console.log("go");
    $scope.userID = user.get('_id');
  }
  
  
  $scope.id = $location.search()['id'];
  /* GET the current logged use data */
  user.currentUser()
    .then(function () {
    var userId = user.get('_id');
    var displayName = user.get('displayName');
    
  	
    if (userId) {
      console.log(userId);
      console.log(displayName);
    }
    else {
      console.log("logged out...");
    }

  })
    .catch(function (err) {
    //MANAGE err
  });
});