var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var fullname = document.getElementById("fullname").value;

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var gender = document.getElementById("gender").value;

  console.log(fullname);
  console.log(password);
  console.log(email);
  console.log(phonenumber);
  console.log(gender);

  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create",
    {
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
        phonenumber: phonenumber,
        gender: gender,
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

      if (msg == "User Created Succesfully") {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(
              `User Created Succesfully !, welcome to IntrioBasket ${name}, Proceed to Sign In`
            )
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        //redirect user to homepage after successful login

        setTimeout(function () {
          window.location.assign("/login.html");
        }, 2200);

        console.log("User Created Succesfully");
      } else if (msg == "Email already exists") {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(document.createTextNode(`Email already exists !`));
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("Email already exists");
      } else if (msg == "Please input all fields") {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(document.createTextNode(`Please input all fields!`));

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("Please input all fields");
      } else {
        const name = email;
        const container = document.getElementById("containerr");
        const loader = document.createElement("div");
        loader.className = "progress";
        const loadingBar = document.createElement("div");
        loadingBar.className = "indeterminate";
        loader.appendChild(loadingBar);
        container.appendChild(loader);
        setTimeout(function () {
          const loaderDiv = document.querySelector("div.progress");
          const panel = document.createElement("div");
          panel.className = "card-panel green";
          const text = document.createElement("span");
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`An error occurred, Try Again!`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        console.log("An error occurred, Try Again!");
      }
    });
});

// // const activateLoginApicall = () => {
// const formElement = document.getElementById("form");

// // 'email' is the value of the name attribute of the input element for email
// // 'password' is the value of the name attribute of the input element for password
// //  const email = formElement.elements["email"].value;
// //  const password = formElement.elements["password"].value;
// //  console.log(email);
// //  console.log(formElement);
// const url = "http://intriobasket.pexceptos.com/api/user/create";

// formElement
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//       const searchParams = new URLSearchParams();

//     return new Promise((resolve, reject) => {

//     fetch(url, {
//       method: "post",
//       body: searchParams,
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         reject(response);
//       }
//     });
//   })
//   .then((data) => resolve(data))
//   .catch((err) => {
//     reject(err);
//   });

// //  console.log(formData);
// //    return new Promise((resolve, reject) => {
// //      fetch(url, {
// //        method: "POST",
// //        body: search,
// //      })
// //        .then((response) => {
// //          if (response.ok) {
// //            return response.json();
// //          } else {
// //            reject(response);
// //          }
// //        })
// //        .then((data) => resolve(data))
// //        log
// //        .catch((err) => {
// //          reject(err);
// //        });
// //    });
// //  };

// //  const login = async (event) => {
// //    event.preventDefault();
// //    try {
// //      const data = await activateLoginApicall();

// //      //whatever you want to do with data
// //    } catch (error) {
// //      //oops error, whatever you want to do with the error
// //    }
// //  };

//  const fetchHelper = ("http://intriobasket.pexceptos.com/api/user/create", config = {}) => {
//       const token = localStorage.getItem("token")
//       return fetch(
//       "http://intriobasket.pexceptos.com/api/user/create",
//       { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } })
//  }
