//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");
//const cartTotalPaystackDOM = document.getElementById("cartTotalPaystack");

const cartItemTemplate = (productDetails) => {
  return `
        <tr id="${productDetails.name}">
            <td class="product-name">${productDetails.name}</td>
            <td class="product-price">NGN ${productDetails.price}</td>
            <td class="product-quantity">
            <input class="quantity no-round-input" type="number" min="1" value="${
              productDetails.qty
            }">
            </td>
            <td class="product-total">NGN ${
              productDetails.price * productDetails.qty
            }</td>
            <td class="product-clear">
            <button class="no-round-btn" onclick="deleteItem('${
              productDetails.id
            }')"><i class="icon_close"></i></button>
            </td>
        </tr>
    `;
};

const cartTotalTemplate = (totalPriceToPay, totalPriceToTax) => {
  return `
        <tr>
            <th>TOTAL:</th>
            <td>NGN ${totalPriceToPay}</td>
            <th>TOTAL with 7.5% Tax Rate:</th>
            <td>NGN ${totalPriceToTax}</td>
        </tr>
    `;
};

const handleNoItemsInCart = () => {
  updateCartButton.style.display = "none";
  emptyCartButton.style.display = "none";
  cartTotalTable.style.display = "none";
};

const renderCartTotalTable = () => {
  let totalPriceToPay = 0;
  let totalPriceToTax = 0;

  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  // Handle empty cart again!
  if (cartStore === null || cartStore.length === 0)
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    totalPriceToPay += product.price * product.qty;
    totalPriceToTax = totalPriceToPay + totalPriceToPay * 0.075;
  });

  let htmlString = cartTotalTemplate(totalPriceToPay, totalPriceToTax);
  // //cart
  // let htmlStrings = cartTotalTemplateCheckout(totalPriceToPay, totalPriceToTax);
  // let htmlPay = cartTotalPaystack(totalPriceToTax);

  cartTotalTBodyDOM.innerHTML = htmlString;
  // cartTotalPaystackDOM.innerHTML = htmlPay;
};

const lookUpCartStore = () => {
  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
  console.log(cartStore);

  console.log("CART DATA");
  const GetUserCart = () => {
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
        const cartArray = res.payload.cart;

        cartArray.forEach((cart) => {
          let cartDetails = {
            name: cart.item_name,
            imageUrl: cart.item_image,
            qty: cart.number,
            price: cart.initial_cost,
          };

          console.log(cartDetails);

          cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE) || "[]");
          cartList.push(productDetails);
          localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));


          console.log("carttyy cartlist");



          

          //PUSH THESE OBJECTS TO cartStore

          /*



          cart_store: "[{"id":"5f4385e106c5350024edc172","name":"Ayoola Poundo yam","type":"FLOURS","imageUrl":"https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FAyoola%20Poundo%20yam%20.jpg?alt=media&token=0ed5878b-a26c-4166-a0ab-fd4dfd7f54f5","price":"900","qty":2},
          {"id":"5f4385e106c5350024edc171","name":"Baking powder","type":"BAKING INGREDIENTS","imageUrl":"https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c","price":"500","qty":1}]"

          //I'll use cartDetails here
          console.log("cartpush");
          var cartList = [];
          cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE)) || [];
          cartList.push(productDetails);
          localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));

          console.log(cartList);
          console.log("cartStorage test run");*/
        });
      })

      .catch((error) => console.log("error", error));

    console.log("GetUserCart");
    updateCartButtonBadge();
  };

  GetUserCart();



  if (cartStore === null || cartStore.length === 0)
    //// Create User Cart here from back end http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    let htmlString = cartItemTemplate(product);
    //checkout

    let htmlFragment = document.createElement("tr");

    htmlFragment.setAttribute("id", product.name);
    htmlFragment.innerHTML = htmlString;

    shopCartTBodyDOM.appendChild(htmlFragment);

    // let htmlStrings = cartItemTemplateCheckout(product);
    // //checkout

    // let htmlFragments = document.createElement("div");

    // htmlFragments.setAttribute("id", product.id);
    // htmlFragments.innerHTML = htmlStrings;

    // shopCartTBodyDOMCheckout.appendChild(htmlFragments);
  });

  // call renderCartTotalTable
  renderCartTotalTable();
};

lookUpCartStore();

//delete each Item

const deleteItem = (id) => {
  if (localStorage.getItem(CONFIG.CART_STORE) === null) {
    //something is wrong
    return false;
  } else {
    const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

    let newCartList = cartList.filter((item, index) => item.id !== id);

    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(newCartList));
  }

  // update Cart
  shopCartTBodyDOM.innerHTML = "";

  lookUpCartStore();
};

/*
console.log("CART DATA");
const GetUserCart = () => {
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
      const cartDetails = res.payload.cart;

      res.payload.cart.forEach((cart) => {
        let cartDetails = {
          name: cart.item_name,
          qty: cart.number,
          price: cart.initial_cost,
          imageUrl: cart.item_image,
        };
        console.log(cartDetails);
        console.log("carttyyyyyyy");

        //I'll use cartDetails here
        localStorage.setItem("cartDetails", cartDetails);
      });
    })

    .catch((error) => console.log("error", error));

  console.log("GetUserCart");
};

GetUserCart();
*/
//SYNCHRONIZE CART WITH THIS http://intriobasket.pexceptos.com/api/user/5f68560661c7d8002478bfed
//ACCESS
/**
 *  "cart": [
    {
        "item_name": "Bitter leaf",
        "number": 3,
        "initial_cost": 420,
        "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBitter%20leaf.jpg?alt=media&token=e2a0f4d9-f66a-416e-bb51-8487de6d57cc"
    },
    {
        "item_name": "Chicken3",
        "number": 1,
        "initial_cost": 1500,
        "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken3.jpg?alt=media&token=aba72a85-a01f-4541-abab-84b52e78b000"
    },
    {
        "item_name": "Baking powder",
        "number": 3,
        "initial_cost": 500,
        "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c"
    },
    {
        "item_name": "Bitter leaf",
        "number": 4,
        "initial_cost": 420,
        "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBitter%20leaf.jpg?alt=media&token=e2a0f4d9-f66a-416e-bb51-8487de6d57cc"
    }
],
 */
//userId is GLOBAL across the site
//let userId = localStorage.getItem("id");
console.log({ userId });

//const url = `http://intriobasket.pexceptos.com/api/user/create-cart/${userId}`;

console.log(url);

/**
TODO

POST

 Create User Cart
 http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88

 PUT

 Update User Checkout History
 http://intriobasket.pexceptos.com/api/checkout/user/5f4d0fd68cc9aa11e6151b88

 PUT

 Update User Cart
 http://intriobasket.pexceptos.com/api/user/update-cart/5f4d0fd68cc9aa11e6151b88

 **/

/**
 *after login grab user id: 
 append the user id to the API
 *
 *
 */
