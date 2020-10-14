//TODO : IMPLEMENT 7.5%tax on any purchase

// Functions to run once DOM is loaded
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    updateCartButtonBadge();
    GetUserCart();
  },
  false
);

const updateCartButtonBadge = () => {
  //todo get this by querySelector
  var cartBadges = document.querySelectorAll(".cartButtonBadge");

  console.log(cartBadges);

  const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
  cartBadges.forEach(function (cartBadge) {
    if (cartList === null) {
      cartBadge.innerText = 0;
      console.log("cartBadge");
      console.log(cartBadge);
    } else {
      cartBadge.innerText = cartList.length;

      console.log(cartBadges);
      console.log(cartBadge);
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

const url = `http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`;

console.log(url);

const addToCart = (id, name, type, imageUrl, price, qty) => {
  const productDetails = { id, name, type, imageUrl, price, qty: 1 };

  if (localStorage.getItem(CONFIG.CART_STORE) === null) {
    const cartList = [];
    cartList.push(productDetails);
    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
    //call create user cart api here
    //create user cart
    console.log("before create user cart");

    console.log("got here");

    var numbers = 1;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-access-token", `${userToken}`);

    var raw = JSON.stringify({
      cart_details: [
        {
          item_name: name,
          number: numbers,
          initial_cost: price,
          item_image: imageUrl,
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
//update cart button function
//update from localstorage

/**
const cartStores = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
console.log(cartStores);
  

cartStores.forEach((cartItem) => {
  let cartDetail = {
    name = cartItem.name,
    price = cartItem.price,
    qty = cartItem.qty,
    imageUrl = cartItem.imageUrl

  };
  console.log(cartDetail);

});
**/

const updateCart = () => {
  console.log("updatecart function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${userToken}`);
  var qty = 1;

  var raw = JSON.stringify({
    cart_details: [
      {
        item_name: name,
        number: qty,
        initial_cost: price,
        item_image: imageUrl,
      },
    ],
  });
  console.log("RAW");
  console.log(raw);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/update-cart/${userId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  updateCartButtonBadge();
  //window.location.assign("/shop_cart.html");
  console.log("UPDATE");
};

const updateCheckout = (name, imageUrl, price, qty) => {
  console.log("updateCheckout function");

  //from delivery form details

  //this from form value and display it on the screen
  var purchaserName = document.getElementById("purchaserName").value;
  var numbers = document.getElementById("numbers").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var zipCode = document.getElementById("zipCode").value;
  var address = document.getElementById("address").value;
  var totalCost = 2500;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${userToken}`);

  var raw = JSON.stringify({
    order_delivery_type: "pick it up",
    items: [
      {
        item_name: name,
        number: numbers,
        initial_cost: price,
        item_image: imageUrl,
      },
    ],
    number_of_items: numbers,
    total_cost: totalCost,
    address_name: address,
    phonenumber: phoneNumber,
    zip_code: zipCode,
    purchaser_name: purchaserName,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/checkout/user/${userId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  updateCartButtonBadge();
  //window.location.assign("/shop_cart.html");
  console.log("UPDATECHECKOUT");
};

// checkout details page after checkout

const checkoutHistoryDOM = document.getElementById("checkoutHistory");

const checkOutHistoryItemTemplate = (historyDetails) => {
  return `
  <div class="col-12 text-center">
  <h2 class="title mx-auto">Date: ${historyDetails.Date} </h2>
</div>

        
  <div class="benefit-block">
    <div class="our-benefits shadowless benefit-border">
      <div class="row no-gutters">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
            <h5 class="benefit-title">Purchaser Name</h5>
            <p class="benefit-describle">${historyDetails.purchaserName}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
            <h5 class="benefit-title">Checkout Address</h5>
            <p class="benefit-describle">${historyDetails.checkoutAddress}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
            <h5 class="benefit-title">Phone Number</h5>
            <p class="benefit-describle">${historyDetails.phoneNumber}</p>
          </div>
        </div>
                     
                     


        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
            <h5 class="benefit-title">delivery Status</h5>
            <p class="benefit-describle">${historyDetails.deliveryStatus} </p>
          </div>
        </div>

                      
      </div>




      <div class="row no-gutters">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
          <h5 class="benefit-title">Items Name</h5>
          <p class="benefit-describle">${historyDetails.itemsName} </p>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
          <h5 class="benefit-title">Item Image</h5>
          <p class="benefit-describle">${historyDetails.itemImage}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon1.png" alt="">
          <h5 class="benefit-title">Order Delivery Type</h5>
          <p class="benefit-describle">${historyDetails.orderDeliveryType}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
          <h5 class="benefit-title">Total Cost</h5>
          <p class="benefit-describle">${historyDetails.totalCost}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
          <h5 class="benefit-title">Zip Code</h5>
          <p class="benefit-describle">${historyDetails.zipCode}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon2.png" alt="">
          <h5 class="benefit-title">Date</h5>
          <p class="benefit-describle">${historyDetails.Date} </p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon2.png" alt="">
          <h5 class="benefit-title">Item Number</h5>
          <p class="benefit-describle">${historyDetails.itemsNumber} </p>
        </div>
      </div>

       

    </div>
  </div>
</div>
    `;
};

const QueryCheckout = () => {
  console.log("updateCheckout function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${userToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/checkout?purchaser_id=${userId}`,
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const res = data;
      console.log("this DATA");
      console.log(res);

      res.payload.forEach((checkout) => {
        let historyDetails = {
          purchaserName: checkout.purchaser_name,
          checkoutAddress: checkout.checkout_address.address_name,
          phoneNumber: checkout.checkout_address.phonenumber,
          zipCode: checkout.checkout_address.zip_code,
          deliveryStatus: checkout.delivery_status,
          //how to access object inside array ?

          itemsName: checkout.items[0].item_name,
          itemsNumber: checkout.items[0].number,
          itemImage: checkout.items[0].item_image,
          orderDeliveryType: checkout.order_delivery_type,
          totalCost: checkout.total_cost,
          Date: checkout.Date,
        };

        let htmlString = checkOutHistoryItemTemplate(historyDetails);
        let htmlFragment = document.createElement("div");
        htmlFragment.innerHTML = htmlString;
        checkoutHistoryDOM.appendChild(htmlFragment);
      });
    })

    .catch((error) => console.log("error", error));

  console.log("UPDATECHECKOUT");
};

QueryCheckout();

//GET ALL checkout

const GetAllCheckoutDOM = document.getElementById("GetAllCheckout");

const GetAllCheckoutItemTemplate = (historyDetails) => {
  return `
  <div class="col-12 text-center">
  <h2 class="title mx-auto">Date: ${historyDetails.Date} </h2>
</div>

        
  <div class="benefit-block">
    <div class="our-benefits shadowless benefit-border">
      <div class="row no-gutters">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
            <h5 class="benefit-title">Purchaser Name</h5>
            <p class="benefit-describle">${historyDetails.purchaserName}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
            <h5 class="benefit-title">Checkout Address</h5>
            <p class="benefit-describle">${historyDetails.checkoutAddress}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
            <h5 class="benefit-title">Phone Number</h5>
            <p class="benefit-describle">${historyDetails.phoneNumber}</p>
          </div>
        </div>
                     
                     


        <div class="col-12 col-md-6 col-lg-3">
          <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
            <h5 class="benefit-title">delivery Status</h5>
            <p class="benefit-describle">${historyDetails.deliveryStatus} </p>
          </div>
        </div>

                      
      </div>




      <div class="row no-gutters">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
          <h5 class="benefit-title">Items Name</h5>
          <p class="benefit-describle">${historyDetails.itemsName} </p>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon4.png" alt="">
          <h5 class="benefit-title">Item Image</h5>
          <p class="benefit-describle">${historyDetails.itemImage}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon1.png" alt="">
          <h5 class="benefit-title">Order Delivery Type</h5>
          <p class="benefit-describle">${historyDetails.orderDeliveryType}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
          <h5 class="benefit-title">Total Cost</h5>
          <p class="benefit-describle">${historyDetails.totalCost}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon3.png" alt="">
          <h5 class="benefit-title">Zip Code</h5>
          <p class="benefit-describle">${historyDetails.zipCode}</p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon2.png" alt="">
          <h5 class="benefit-title">Date</h5>
          <p class="benefit-describle">${historyDetails.Date} </p>
        </div>
      </div>


      <div class="col-12 col-md-6 col-lg-3">
        <div class="benefit-detail boderless boderless d-flex flex-column align-items-center"><img class="benefit-img" src="assets/images/homepage01/benefit-icon2.png" alt="">
          <h5 class="benefit-title">Item Number</h5>
          <p class="benefit-describle">${historyDetails.itemsNumber} </p>
        </div>
      </div>

       

    </div>
  </div>
</div>
    `;
};

const GetAllCheckout = () => {
  console.log("GetAllCheckout function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/checkout/get-all",
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const res = data;
      console.log("this DATA");
      console.log(res);

      res.payload.forEach((checkout) => {
        let historyDetails = {
          purchaserName: checkout.purchaser_name,
          checkoutAddress: checkout.checkout_address.address_name,
          phoneNumber: checkout.checkout_address.phonenumber,
          zipCode: checkout.checkout_address.zip_code,
          deliveryStatus: checkout.delivery_status,
          //how to access object inside array ?

          itemsName: checkout.items[0].item_name,
          itemsNumber: checkout.items[0].number,
          itemImage: checkout.items[0].item_image,
          orderDeliveryType: checkout.order_delivery_type,
          totalCost: checkout.total_cost,
          Date: checkout.Date,
        };

        let htmlString = GetAllCheckoutItemTemplate(historyDetails);
        let htmlFragment = document.createElement("div");
        htmlFragment.innerHTML = htmlString;
        GetAllCheckoutDOM.appendChild(htmlFragment);
      });
    })

    .catch((error) => console.log("error", error));

  console.log("GET ALL CHECKOUT");
};

GetAllCheckout();

//USER NAME ON HOMEPAGE TEMPLATE
const CLIENTNameDOM = document.getElementById("userName");
console.log("USERNAMEEEEEEE");

let clientName = localStorage.getItem("name");
console.log({ clientName });

const userNameTemplate = (clientName) => {
  return `
  <a href="login.html">Welcome ! ${clientName}<i class="fas fa-user"></i>Logout</a>
    `;
};

const DisplayUserNameTemplate = () => {
  let htmlString = userNameTemplate(clientName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  CLIENTNameDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE");
};

DisplayUserNameTemplate();

//form
/**username Mobile
const CLIENTNameMobileDOM = document.getElementById("userNameMobile");

const userNameMobileTemplate = (clientName) => {
  return `
  <a href="login.html">Welcome ! ${clientName}<i class="fas fa-user"></i>Logout</a>
    `;
};

const DisplayUserNameMobileTemplate = () => {
  let htmlString = userNameMobileTemplate(clientName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  CLIENTNameMobileDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE mobile");
  console.log(name);
};

DisplayUserNameMobileTemplate();



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
