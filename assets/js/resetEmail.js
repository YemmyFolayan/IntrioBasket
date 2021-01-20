var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;

  console.log(email);
  const name = email;
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
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/reset-token/",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
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

      //const resetPassToken = data.payload.token;

      //localStorage.setItem("resetPassToken", resetPassToken);

      if (msg == "Reset link sent sucessfully") {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode("Reset link sent sucessfully")
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);

        console.log("Reset link sent sucessfully");
      } else {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`An error occurred, Try Again!`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);
        // setTimeout(function () {
        //   // Removes an element from the document
        //   $(".card-panel green").remove();
        // }, 1009);

        console.log("An error occurred, Try Again!");
      }
    });
});
