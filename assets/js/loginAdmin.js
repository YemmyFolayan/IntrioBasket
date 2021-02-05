//session management implemented and check out

var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  //https://cors-anywhere.herokuapp.com/
  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/admin/login",
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

      const AdminId = data.payload.id;

      const adminToken = data.payload.token;

      //SAVE this ID to session storage to re-use it in cart
      localStorage.setItem("AdminId", AdminId);

      const name = data.payload.fullname;
      console.log("this is : ", name, AdminId);

      localStorage.setItem("name", name);

      localStorage.setItem("adminToken", adminToken);

      const role = data.payload.role;

      //AT this block, i want to compare the id with the one in user also use the id for cart logic

      if (msg == "Log in Successful") {
        const name = data.payload.fullname;

        //const role = data.payload.role;

        localStorage.setItem("adminName", name);

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
              `Log in Successfully, welcome Admin! ${name}`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        if (role == "admin") {
          console.log("Admin ROLE");
          setTimeout(function () {
            window.location.assign("/admindashboard/dashboardadmin.html");
          }, 2200);
        } else if (role == "superAdmin") {
          console.log("SuperAdmin ROLE");
          setTimeout(function () {
            window.location.assign("/admindashboard/dashboardSuperAdmin.html");
          }, 2200);
        } else if (role == "accountManager") {
          console.log("AccountManager ROLE");
          setTimeout(function () {
            window.location.assign(
              "/admindashboard/dashboardAccountManager.html"
            );
          }, 2200);
        } else if (role == "aggregator") {
          console.log("Aggregator ROLE");
          setTimeout(function () {
            window.location.assign("/admindashboard/dashboardAggregator.html");
          }, 2200);
        } else if (role == "foreman") {
          console.log("foreman ROLE");
          setTimeout(function () {
            window.location.assign("/admindashboard/dashboardForeman.html");
          }, 2200);
        } else {
          alert("An error occurred, Contact administrator!");
        }

        // setTimeout(function () {
        //   window.location.assign("/admindashboard/dashboardadmin.html");
        // }, 2200);

        localStorage.setItem("AdminLogin", true);
        console.log("Admin logged in");
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
