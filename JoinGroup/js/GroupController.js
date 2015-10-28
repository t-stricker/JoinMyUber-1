angular.module('JMUnew', ['ngStamplay', 'ngRoute'], function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
  .controller('GroupCtrl', function ($scope, $stamplay, $location) {
  var user = $stamplay.User().Model;
   
  $scope.id = $location.search()['id'];
  this.rideInstance = {};
    
  //GET the current logged use data 
  $scope.userID;
  user.currentUser()
    .then(function () {
    //var userId = user.get('_id');
    var displayName = user.get('displayName');

    $scope.userID = user.get('_id');

    if ($scope.userID) {
      console.log($scope.userID);
      console.log(displayName);
    }
    else {
      console.log("logged out...");
    }

  })
    .catch(function (err) {
    //MANAGE err
  });

  var ride = $stamplay.Cobject('ride').Model;
  ride.fetch($scope.id).then(function () {
    this.rideInstance = ride.instance;
    console.log($scope.rideInstance);
  })


  $scope.init = function () {
    console.log("init function called");
  };

  $scope.go = function () {
    console.log("go");
    $scope.userID = user.get('_id');
  };


  

});