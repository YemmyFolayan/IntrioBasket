//CREATE AUTHORIZATION MODEL => REDIRECT PAGE\

//check if requests to server returns an error, invalid token. then redirect user to login
let cookieAggregator = localStorage.getItem("AdminLogin");
console.log({ cookieAggregator });

const redirectAdmin = () => {
  if (cookieAggregator === "true") {
    console.log("Admin logged in, YES");
  } else {
    console.log("not logged in");
    alert("Kindly Signup or Login to Proceed ");
    window.location.assign("/loginadmin.html");
  }
};
redirectAdmin();

// <script src="js/utils/AuthenticationAdminLogin.js"></script>

// <script src="js/utils/AuthenticationUserLogin.js"></script>
