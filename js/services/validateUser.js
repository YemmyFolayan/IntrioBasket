//////////////////
//CREATE AUTHORIZATION MODEL => REDIRECT PAGE\

let loginStatus = localStorage.getItem("login");
console.log({ loginStatus });

const redirect = () => {
if (loginStatus === "true") {
    console.log("logged in, YES");
} else {
    console.log("not logged in");
    alert("Kindly Signup or Login to Proceed ")
    window.location.assign("/login.html");
}
};
redirect();

//////////////