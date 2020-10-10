//TODO : IMPLEMENT 7.5%tax on any purchase

// Functions to run once DOM is loaded
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    updateCartButtonBadge();
  },
  false
);

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

const url = `http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`;

console.log(url);

const addToCart = (id, name, type, imageUrl, price) => {
  const productDetails = { id, name, type, imageUrl, price, qty: 1 };

  if (localStorage.getItem(CONFIG.CART_STORE) === null) {
    const cartList = [];
    cartList.push(productDetails);
    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
    //call create user cart api here
    //create user cart
    console.log("before create user cart");

    console.log("got here");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "x-access-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZveWVtY0BnbWFpbC5jb20iLCJpYXQiOjE2MDIxOTc5ODYsImV4cCI6MTYwMzQ5Mzk4Nn0.RyMl3rl03LuBjya1_7mS4ejy4u9QpRMPJHw2PN8fEOM; admin_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pY2hhZWxmb2xheWFuQG91dGxvb2suY29tIiwiaWF0IjoxNjAyMjAwODU0LCJleHAiOjE2MDQ3OTI4NTR9.22XPv2EaSYeWqdjStgwyig08xCqg_aOAnvLWfCEj0IE"
    );

    var raw = JSON.stringify({
      cart_details: [
        {
          item_name: "Cocoa powder",
          number: 3,
          initial_cost: 230,
          item_image:
            "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCocoa%20powder.jpg?alt=media&token=d2ab9232-5451-449f-b3e8-2b60be576f34",
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create-cart/5f6b26f9d41c5b00246e3f26",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    /**fetch(
      `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`,
      {
        method: "POST",
        body: JSON.stringify({
          cart_details: [
            {
              item_name: name,
              number: 20,
              initial_cost: price,
              item_image: imageUrl,
            },
          ],
        }),

        headers: {
          "Content-Type": "application/json; charset= UTF-8",
          "Cookie": `access_token=${userToken}`,
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var msg = data.message;
        console.log(msg);
        console.log("create user cart");
      });
      **/

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
  // window.location.assign("/shop_cart.html");
};

// const raw = JSON.stringify({ "cart_details": [{ "item_name": "hello", "number": 50, "initial_cost": 60, "item_image": "teaaqweddd" }, { "item_name": "hello", "number": 50, "initial_cost": 60, "item_image": "teaaqweddd" }] })

//deleteCartItem (slice)

//Empty cart
const emptyCart = () => {
  // const cartBadge = document.getElementById("emptyCartButton");
  //window.localStorage.clear();
  localStorage.removeItem(CONFIG.CART_STORE);

  const row = document.getElementById("shopCartTBody");
  row.parentNode.removeChild(row);

  updateCartButtonBadge();
};

/**
 * Update Cart Badge Function - Updates the Cart Button on the header section
 */
/**
 * 
PUT
Hook this  endpoint up with update cart function to allow processing at the backend 

Update User Checkout History
http://intriobasket.pexceptos.com/api/checkout/user/id



PUT

Update User Cart
http://intriobasket.pexceptos.com/api/user/update-cart/id

 */
const updateCartButtonBadge = () => {
  const cartBadge = document.getElementById("cartButtonBadge");
  console.log(cartBadge);

  //todo get this by querySelector
  const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  if (cartList === null) {
    cartBadge.innerText = 0;
  } else {
    cartBadge.innerText = cartList.length;
  }
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
//Update User Checkout History
const updateCheckoutHistory = () => {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/checkout/user/5f6b26f9d41c5b00246e3f26",
    {
      method: "PUT",
      body: JSON.stringify({
        order_delivery_type: "pick it up",
        items: [
          {
            item_name: name,
            number: qty,
            initial_cost: price,
            item_image: imageUrl,
          },
        ],
        number_of_items: qty,
        total_cost: 2425,
        address_name: "Eric house",
        phonenumber: "903456434345",
        zip_code: "55643434",
        purchaser_name: name,
      }),

      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  ).then(async (response) => {
    try {
      const json = await response.clone().json();
      return json;
    } catch (e) {
      console.log(e);
      return await response.text();
    }
  });
};

updateCheckoutHistory();

//updateCart

const updateCart = () => {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/update-cart/5f6b26f9d41c5b00246e3f26",
    {
      method: "POST",
      body: JSON.stringify({
        cart_details: [
          {
            item_name: name,
            number: qty,
            initial_cost: price,
            item_image: imageUrl,
          },
        ],
      }),

      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  ).then(async (response) => {
    try {
      const json = await response.clone().json();
      return json;
    } catch (e) {
      console.log(e);
      return await response.text();
    }
  });
};

updateCart();

*/
