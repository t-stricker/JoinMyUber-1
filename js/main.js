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
  
   /* Checking if the user is logged */
  user.currentUser()
    .then(function () {
      var userId = user.get('_id');
      if(userId) {
        $('#username').show();
        document.getElementById('username').innerHTML = 'Welcome ' + user.get('displayName');
      }
      else{
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