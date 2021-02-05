//CREATE AUTHORIZATION MODEL => REDIRECT PAGE\

//check if requests to server returns an error, invalid token. then redirect user to login
let cookieUserLogin = localStorage.getItem("UserLogin");
console.log({ cookieUserLogin });

const redirect = () => {
  if (cookieUserLogin === "true") {
    console.log("logged in, YES");
  } else {
    console.log("not logged in");
    alert("Kindly Signup or Login to Proceed ");
    window.location.assign("/login.html");
  }
};
redirect();
