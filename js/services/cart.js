//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");
//const cartTotalPaystackDOM = document.getElementById("cartTotalPaystack");

const cartItemTemplate = (productDetails) => {
  return `
        <tr id="${productDetails.id}">
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

  if (cartStore === null || cartStore.length === 0)
    //// Create User Cart here from back end http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    let htmlString = cartItemTemplate(product);
    //checkout

    let htmlFragment = document.createElement("tr");

    htmlFragment.setAttribute("id", product.id);
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

let userId = localStorage.getItem("id");
console.log({ userId });

const url = `http://intriobasket.pexceptos.com/api/user/create-cart${userId}`;

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
