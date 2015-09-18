Stamplay.init("joinmyuber");
var user = new Stamplay.User().Model;

$(document).ready(function () {

  $('#login').on('click', function (e) {
    e.preventDefault();
    userLogin();
  });

  $('#logout').on('click', function (e) {
    e.preventDefault();
    user.logout();
  });

  $('#getrides').on('click', function (e) {
    e.preventDefault();
   getCollectionRides();
  });
  
  $('#creategroup').on('click', function (e) {
    e.preventDefault();
    console.log('create group clicked');
    
    var to = $("#creategroupform [name='to']").val();
    var from = $("#creategroupform [name='from']").val();
    
    if (to == "" || from == "") {
        alert("Name must be filled out");
        return false;
    }
    
    var rideInstance = new Stamplay.Cobject('ride').Model;
   
    rideInstance.set('to', to);
    rideInstance.set('from', from);
    rideInstance.save().then(function () {
      //The SDK saved succesfully the dinner object instance
    }, function (err) {
        //Something went wrong, the SDK returns the error
      });
  });

  
 function getCollectionRides() {
     var rideCollection = new Stamplay.Cobject('ride').Collection;
      rideCollection.select('to').select('from').fetch().then(function() {
      Console.log(rideCollection);
       // returns the first 20 dinners with only title attribute
      })
    
 }
  	
  
  /* Checking if the user is logged */
  user.currentUser()
    .then(function () {
    var userId = user.get('_id');
    if (userId) {
      $('#username').show();
      document.getElementById('username').innerHTML = 'Welcome ' + user.get('displayName');
    }
    else {
      /*hide Hi <username>*/
      console.log("not logged in")
      $('#username').hide();
    }
    console.log(userId);
  });
});

function userLogin() {
  var email = $("#loginform input[name='email']").val();
  var password = $("#loginform input[name='pass']").val();

  var loginData = {
    email: email,
    password: password
  };

  console.log(email, password);
    
  // login user
  user.login(email, password).then(function () {
    console.log("successfully logged in!");
    window.location.href = "/index.html";
  });

}