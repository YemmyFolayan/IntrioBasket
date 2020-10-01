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
   */ 
  
  
  
  
  const addToCart = (id, name, type, imageUrl, price) => {
    const productDetails = { id, name, type, imageUrl, price, qty: 1 };
    
    if (localStorage.getItem(CONFIG.CART_STORE) === null) {
      const cartList = [];
      cartList.push(productDetails);
      localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
      
      //call create user cart api here
      //create user cart 
      
      const createUserCart = {
        fetch(
          "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/create-cart/5f6b26f9d41c5b00246e3f26",
          {
            method: "POST",
            body: JSON.stringify({
              "cart_details": [{
                "item_name": name,
                "number": qty,
                "initial_cost": price,
                "item_image": imageUrl,
                
              }]
            }),
      
               
            
            headers: {
              "Content-Type": "application/json; charset= UTF-8",
              "Cookie": "access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyaWN2b25kZWU1QGdtYWlsLmNvbSIsImlhdCI6MTYwMTU0NTU5OCwiZXhwIjoxNjAyODQxNTk4fQ.-ciTacOQl3d2Zgxmvqd_l59-wXV6GBXuCCTdAsmIs2M",
            },
          }
        )
          .then(function (response) {
            return response.json();
          })
            .then(function (data) {
              var msg = data.message;
            });
      };
      
    createUserCart();
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
  window.location.assign("/shop_cart.html");
};  









// const raw = JSON.stringify({ "cart_details": [{ "item_name": "hello", "number": 50, "initial_cost": 60, "item_image": "teaaqweddd" }, { "item_name": "hello", "number": 50, "initial_cost": 60, "item_image": "teaaqweddd" }] })



  
    


  


  


//deleteCartItem (slice)

//Empty cart
const emptyCart = () => {
  // const cartBadge = document.getElementById("emptyCartButton");
  window.localStorage.clear();

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
};
