//session management implemented and check out

var Form = document.getElementById("form");
const userNameDOM = document.getElementById("user");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

console.log(email);
console.log(password);

fetch(
  "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/login",
  {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
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

    //this is user id;

    var id = data.payload.id;

    var name = data.payload.fullname;
    console.log("this is : ", name, id);
    console.log(id);

    const userNameTemplate = (data) => {
      return `
        <div class="login d-flex" id="loginflex">
        ${data.payload.fullname}
        </div>
          `;
    };

    let htmlString = userNameTemplate(data);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    userNameDOM.appendChild(htmlFragment);

    const url = `http://intriobasket.pexceptos.com/api/user/${id}`;

    console.log(url);

    if (msg == "Log in Successful") {
      const name = data.payload.fullname;
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
            `Log in Succesfully !, welcome to IntrioBasket ${name}`
          )
        );
        panel.appendChild(text);
        container.replaceChild(panel, loaderDiv);
      }, 1000);

      setTimeout(function loggedin() {
        window.location.assign("/Homepage.html");
      }, 2200);

      localStorage.setItem("login", true);
      console.log("logged in");
    } else if (msg == "Incorrect Email or Password") {
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
          document.createTextNode(`Incorrect Email or Password!`)
        );
        panel.appendChild(text);
        container.replaceChild(panel, loaderDiv);
      }, 1000);

      console.log("Incorrect Email or Password");
    } else if (msg == "Email not found") {
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
        text.appendChild(document.createTextNode(`Email not found!`));
        panel.appendChild(text);
        container.replaceChild(panel, loaderDiv);
      }, 1000);

      console.log("Email not found");
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

console.log("hi");




/**
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

console.log(email);
console.log(password);

fetch(
  "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/login",
  {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
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

    //this is user id;

    var id = data.payload.id;

    var name = data.payload.fullname;
    console.log("this is : ", name, id);
    console.log(id);

    const userNameTemplate = (data) => {
      return `
      <div class="login d-flex" id="loginflex">
      ${data.payload.fullname}
      </div>
        `;
    };

    let htmlString = userNameTemplate(data);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    userNameDOM.appendChild(htmlFragment);
  });

  **/

/**
 * {
    "status": "OK",
    "message": "Log in Successful",
    "payload": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWN2b25kZWU1QGdtYWlsLmNvbSIsImlhdCI6MTYwMTk3NzI5OCwiZXhwIjoxNjAzMjczMjk4fQ.pI9QZNZ2Ki_61Ljnn32Ri9zUeUVYzt4Akfd7c0neFQo",
        "email": "ericvondee5@gmail.com",
        "id": "5f4d0fd68cc9aa11e6151b88",
        "fullname": "Eric",
        "gender": "Male"
    }
}
 */
