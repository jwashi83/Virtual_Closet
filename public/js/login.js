$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email");
 

  // When the form is submitted, we validate there's an email entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim()
    };

    if (!userData.email) {
      return;
    }

    // If we have an email we run the loginUser function and clear the form
    loginUser(userData.email);
    emailInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email) {
    console.log(email)
    $.post("/api/login", {
      email: email
    })
      .then(function() {
        window.location.replace("/closet");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
