//save token in local storage and access it here
//let resetToken = localStorage.getItem("resetPassToken");
//console.log({ resetToken });
//.get() resource from //http://intriobasket.pexceptos.com/resetform/9018eaca87c1c8387948978868b9c62d96a921d6

/*
$.get('http://127.0.0.1:5500/resetform', params {
  resetPassToken: DOMSettableTokenList,
});

*/

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

  //https://cors-anywhere.herokuapp.com/

  //use query Params
  /*
  let resetId;
  const resetPassDetails = async () => {
    try {
      resetId = decodeURI(`http://127.0.0.1:5500/resetform`)
        .split("/")[1]
        .split("/")[1];
      //document.location.href
      console.log(resetId);
    } catch (err) {
      handleProductIdError();
      throw new Error(err);
    }
  };
  */

  //http://intriobasket.pexceptos.com/resetform/563273f5c7597adca6f1d6ccc5e08d577f3dda6d

  //resetPassDetails();

  fetch(
    `http://intriobasket.pexceptos.com/api/user/reset-password/${resetId}`,
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

      if (msg == "User Created Successfully") {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`Password Successfully Reset`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);

        //redirect user to homepage after successful login

        setTimeout(function () {
          window.location.assign("/login.html");
        }, 2200);

        console.log("User Created Succesfully");
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
