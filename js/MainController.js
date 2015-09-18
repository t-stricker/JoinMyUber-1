angular.module('JMU', ['ngStamplay', 'ngRoute'])

  .controller('MainCtrl', function ($scope, $stamplay) {
  var user = $stamplay.User().Model;
  
  $scope.login = function () {
    user.login($scope.loginMail, $scope.password).then(function () {
      console.log("successfully logged in!");
      
      $scope.username = user.get('displayName');
      $scope.loginMail = " ";
      $scope.password = " ";
    });
  };
  
  $scope.logout = function () {
     user.logout();
     console.log("ausgeloggt");
  };
  
  user.currentUser()
            .then(function () {
              var userId = user.get('_id');  
              
              if (userId)
              {
                console.log(userId);
                console.log(user.get('displayName')); 
                $scope.username = user.get('displayName');
        
              }
              else
              {
                  $scope.username = 'Nicht eingeloggt';
              }
               
            })
            .catch(function (err) {
                //MANAGE err
            });

    
  /* GET the current logged use data */

});