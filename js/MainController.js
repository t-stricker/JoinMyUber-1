var JMU = angular.module('JMU', ['mdl','ngStamplay']);
JMU.config(function (mdlConfigProvider){
        "use strict";
        // mdlConfigProvider.floating = false;
        // mdlConfigProvider.rippleEffect = false;
    });
    
  /*
  .run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', ()=> {
          $timeout(() => {
            componentHandler.upgradeAllRegistered();
          })
        })
      })

.factory('myService', function () {
        return {
            say: function () {
              return "fuu";
                //return "Hello World";
            }
        }
    })
    */


JMU.controller('MainCtrl', function ($scope, $stamplay) {
  var user = $stamplay.User().Model;
  var rideCollection = $stamplay.Cobject('ride').Collection;
  
  $scope.say = "";
  $scope.userId = "";
  $scope.displayName = "";
  
  $scope.test = function() {
    $scope.say = "fickdich";
  }
 
   
   
   
   
   
  
  $scope.rideColl = [];

  $scope.init = function () {
    console.log("init function called");
    $scope.test();
    $scope.getuser();
    //getRides();
  };

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
  
  $scope.signup = function () {
    user.signup().then(function () {
      console.log("successfully signed-up!");
      window.location.href = "/index.html";
    });
  };
  
   $scope.joinGroup = function (id) {
     
    console.log("join group pressed id is" + id);
    window.location.href = "JoinGroup/group.html?id=" + id;
    
    
  };
  
    $scope.openCreateGroup = function () {
    window.location.href = "article/index.html";
  };

  $scope.createGroup = function () {
    console.log("create new group...");
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

  var getRidesFunction = function () {

    console.log("rides called");

    rideCollection.select('to').select('from').fetch().then(function () {
      $scope.rideColl = rideCollection.instance;
      //console.log(rideCollection.instance);
      //console.log($scope.rideColl[1].instance);
      // returns the first 20 entries
    });
  };

  
  /* GET the current logged use data */
  $scope.getuser = function() {
    user.currentUser()
    .then(function () {
    $scope.userId = user.get('_id');
    $scope.displayName = user.get('displayName');
     //$scope.uID = userId;
     //$scope.uName = dispalyName;

    if ($scope.userId) {
      console.log($scope.userId);
      console.log($scope.displayName);
      $scope.getRides();
    }
    else {
      console.log("logged out...");
    }

  })
    .catch(function (err) {
    //MANAGE err
  });
  };
  
});