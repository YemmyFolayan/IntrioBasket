let resetToken;
const initResetToken = async () => {
  try {
    resetToken = decodeURI(document.location.href).split("?")[1].split("=")[1];
  } catch (err) {
    throw new Error(err);
  }
};

initResetToken();

console.log("token");
console.log(resetToken);

var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  console.log(password);
  console.log(confirm_password);

  const container = document.getElementById("containerr");
  const loader = document.createElement("div");
  loader.className = "progress";
  const loadingBar = document.createElement("div");
  loadingBar.className = "indeterminate";
  loader.appendChild(loadingBar);
  container.appendChild(loader);
  const loaderDiv = document.querySelector("div.progress");
  const panel = document.createElement("div");
  panel.setAttribute("id", "boxe");
  panel.className = "card-panel green";
  const text = document.createElement("span");

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/reset-password/${resetToken}`,
    {
      method: "POST",
      body: JSON.stringify({
        password: password,
        confirm_password: confirm_password,
      }),
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;
      console.log(resetToken);
      console.log(msg);
      if (msg == "password updated successfully") {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`password updated successfully`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);

        //redirect user to homepage after successful login

        setTimeout(function () {
          window.location.assign("/login.html");
        }, 2900);

        console.log("password updated successfully");
      } else {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`Token Expired, Try Again!`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);
        // setTimeout(function () {
        //   // Removes an element from the document
        //   $(".card-panel green").remove();
        // }, 1009);

        console.log("Token Expired, Try Again!");
      }
    });
});
