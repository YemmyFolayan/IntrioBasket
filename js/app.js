//TO DO : collect link from fire Store hold it in a map and write to eric API

//
//
// Set the configuration for your app
//TO DO: Replace with your app's config object

// Functions to run once DOM is loaded
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    updateCartButtonBadge();
  },
  false
);

const updateCartButtonBadge = () => {
  //to do get this by querySelector
  var cartBadges = document.querySelectorAll(".cartButtonBadge");

  const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
  cartBadges.forEach(function (cartBadge) {
    if (cartList === null) {
      cartBadge.innerText = 0;
    } else {
      cartBadge.innerText = cartList.length;
    }
  });
};

// Mini Router (refreshes the page)
//ROUTER for page redirect
const router = (url) => {
  // Check for url
  if (typeof url === "undefined") throw new Error("Invalid URL!");

  let pageUrl = "";
  if (url.includes(".html")) {
    pageUrl = url;
  } else {
    pageUrl = url.concat(".html");
  }

  window.location.assign(pageUrl);
  updateCartButtonBadge();
};

/**
 * addToCart: This function adds products to user cart.
 * - Cart is persistent
 *
 * Hook this  endpoint up with addtocart function to allow processing at the backend
 * http://intriobasket.pexceptos.com/api/user/create-cart
 *
 * Param purchase id = 5f4d0fd68cc9aa11e6151b88
 * @param {String} id
 * @param {String} name
 * @param {String} type
 * @param {String} imageUrl
 * @param {String} price
 * @param {String} qty
 *
 */

//userId is GLOBAL across the site
let userId = localStorage.getItem("id");
console.log({ userId });

let userToken = localStorage.getItem("token");
console.log({ userToken });

const url = `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`;

console.log(url);

const addToCart = (id, name, type, imageUrl, price, qty) => {
  const productDetails = { id, name, type, imageUrl, price, qty: 1 };

  if (localStorage.getItem(CONFIG.CART_STORE) === null) {
    const cartList = [];
    cartList.push(productDetails);
    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
    //call create user cart api here
    //create user cart

    const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
    let raw = [];

    cartStore.forEach((cart) => {
      let cartDetails = {
        item_name: cart.name,
        number: cart.qty,
        item_image: cart.imageUrl,
        initial_cost: cart.price,
      };
      raw.push(cartDetails);
    });

    ////////////////////////////////////
    console.log("updatecart function");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-access-token", `${userToken}`);

    raw = { cart_details: raw };
    raw = JSON.stringify(raw);
    console.log("RAW");
    console.log(raw);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    //
    fetch(
      `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log("After create user cart");
  } else {
    const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
    let index = cartList.findIndex(
      (cartItem) => cartItem.id === productDetails.id
    );
    if (index === -1) {
      cartList.push(productDetails);
    } else {
      cartList[index].qty =
        Number(cartList[index].qty) + Number(productDetails.qty);
    }

    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
  }

  // updateCartButtonBadge
  updateCartButtonBadge();

  //LATER YOU CAN INCLUDE GOTO CART HERE OR CONTINUE SHOPPING
  //window.location.assign("/shop_cart.html");
};

//Empty cart
const emptyCart = () => {
  // const cartBadge = document.getElementById("emptyCartButton");
  //window.localStorage.clear();
  localStorage.removeItem(CONFIG.CART_STORE);

  const row = document.getElementById("shopCartTBody");
  row.parentNode.removeChild(row);

  updateCartButtonBadge();
};

document.getElementById("mobileSearch").style.visibility = "hidden";
//update cart button function
//update from localstorage

/*

{
  "status": "OK",
  "message": "Checkout history fetched successfully",
  "payload": [
    {
        "checkout_address": {
            "address_name": "Eric house",
            "phonenumber": "903456434345",
            "zip_code": "55643434"
        },
        "delivery_status": "Pending",
        "_id": "5f7f8053adc48200244cb0db",
        "items": [
            {
                "item_name": "fish",
                "number": 4,
                "initial_cost": 600,
                "item_image": "teaaqweddd"
            }
        ],
        "order_delivery_type": "pick it up",
        "number_of_items": 1,
        "total_cost": 2425,
        "purchaser_id": {
            "_id": "5f6b26f9d41c5b00246e3f26",
            "fullname": "Folayan Iluyemi Michael"
        },
        "purchaser_name": "Folayan Iluyemi Michael",
        "Date": "2020-10-08T21:10:43.909Z",
        "__v": 0
    },
  ]
} */
