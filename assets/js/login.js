//session management implemented and check out
//import { GetUserCart } from "./cart.js"

var Form = document.getElementById("form");
const userNameDOM = document.getElementById("user");

///////////////////
const GetUserCart = () => {
  console.log("updateCheckout function");

  //userId is GLOBAL across the site
  let userId = localStorage.getItem("id");
  console.log({ userId });

  let userToken = localStorage.getItem("token");
  console.log({ userToken });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${userToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  //https://cors-anywhere.herokuapp.com/
  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/${userId}`,
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const res = data;
      console.log("CART FETCH");
      console.log(res.payload.cart);
      let temp = JSON.parse(localStorage.getItem(CONFIG.CART_STORE) || "[]");

      res.payload.cart.forEach((cart) => {
        let cartDetails = {
          id: Number((Math.random() * 23544444444444).toFixed(0)),
          name: cart.item_name,
          imageUrl: cart.item_image,
          qty: cart.number,
          price: cart.initial_cost,
        };
        temp.push(cartDetails);

        //PUSH THESE OBJECTS TO cartStore
      });
      console.log("the temp array", temp);
      localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(temp));
    })

    .catch((error) => {
      console.log("error", error);
      alert("please re login");
    });

  console.log("GetUserCart");
};
///////////////////
Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  //
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

      //AT this block, i want to compare the id with the one in user also use the id for cart logic

      if (msg == "Log in Successful") {
        const id = data.payload.id;

        const token = data.payload.token;

        //SAVE this ID to session storage to re-use it in cart
        localStorage.setItem("id", id);

        localStorage.setItem("token", token);

        const name = data.payload.fullname;
        console.log("this is : ", name, id);

        localStorage.setItem("name", name);
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
              `Log in Successfully !, welcome to IntrioBasket ${name}`
            )
          );
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
        }, 1000);

        GetUserCart();
        setTimeout(function () {
          window.location.assign("/Homepage.html");
        }, 2200);

        //For authentication
        localStorage.setItem("UserLogin", true);
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
