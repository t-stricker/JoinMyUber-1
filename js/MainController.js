angular.module('JMU', ['ngStamplay', 'ngRoute'])

  .controller('MainCtrl', function ($scope, $stamplay) {
  var user = $stamplay.User().Model;
  

  
  $scope.rideArray =  [
    {id:1, name:'hans'},
    {id:2, name:'peter'}
  ];
  
  $scope.login = function () {
    user.login($scope.loginMail, $scope.password).then(function () {
      console.log("successfully logged in!");
      window.location.href = "/index.html";
    });
  };

  $scope.logout = function () {
    user.logout();
    console.log("logging out...");
    window.location.href = "/index.html";
  };
  
  $scope.createGroup = function () {
    var rideInstance = $stamplay.Cobject('ride').Model;
    
    rideInstance.set('to', $scope.to);
    rideInstance.set('from', $scope.from);
    rideInstance.save().then(function () {
      //The SDK saved succesfully the dinner object instance
    }, function (err) {
        //Something went wrong, the SDK returns the error
      });
      $scope.to = "";
      $scope.from = "";
  };
  
    $scope.getRides = function () {
      $scope.rideCollection = $stamplay.Cobject('ride').Collection;
      $scope.rideCollection.select('to').select('from').fetch().then(function() {
      Console.log($scope.rideCollection);
       // returns the first 20 dinners with only title attribute
      });
  };
  
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