//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyCheckoutDOM = document.getElementById("shopCartTBody");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");

//cart
const cartItemTemplateCheckout = (productCheckoutDetails) => {
  return `
        <tr id="${productCheckoutDetails.id}">
            <td class="productCheckout-name">${productCheckoutDetails.name}</td>
            <td class="productCheckout-price">NGN ${
              productCheckoutDetails.price
            }</td>
            <td class="productCheckout-quantity">
            <input class="quantity no-round-input" type="number" min="1" value="${
              productCheckoutDetails.qty
            }">
            </td>
            <td class="productCheckout-total">NGN ${
              productCheckoutDetails.price * productCheckoutDetails.qty
            }</td>
            
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

const handleNoItemsInCartCheckout = () => {
  cartTotalTable.style.display = "none";
};

const renderCartTotalTableCheckout = () => {
  let totalPriceToPay = 0;
  let totalPriceToTax = 0;

  const cartStoreCheckout = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  // Handle empty cart again!
  if (cartStoreCheckout === null || cartStoreCheckout.length === 0)
    return handleNoItemsInCartCheckout();

  cartStoreCheckout.forEach((productCheckout) => {
    totalPriceToPay += productCheckout.price * productCheckout.qty;
    totalPriceToTax = totalPriceToPay + totalPriceToPay * 0.075;
  });

  let htmlString = cartTotalTemplate(totalPriceToPay, totalPriceToTax);

  cartTotalTBodyDOM.innerHTML = htmlString;
};

const lookUpCartCheckout = () => {
  const cartStoreCheckout = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  if (cartStoreCheckout === null || cartStoreCheckout.length === 0)
    //// Create User Cart here from back end http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88
    return handleNoItemsInCartCheckout();

  cartStoreCheckout.forEach((productCheckout) => {
    let htmlString = cartItemTemplateCheckout(productCheckout);
    //checkout

    let htmlFragment = document.createElement("tr");

    htmlFragment.setAttribute("id", productCheckout.id);
    htmlFragment.innerHTML = htmlString;

    shopCartTBodyCheckoutDOM.appendChild(htmlFragment);
  });

  // call renderCartTotalTableCheckout
  renderCartTotalTableCheckout();
};

lookUpCartCheckout();

//var password = document.getElementById("password").value;
//delete each Item

//TODO

//AFTER LOGIN get user id and append it to the endpoint
// GET user id dynamically here to append to creat user cart url

//    http://intriobasket.pexceptos.com/api/user/
// POST

// Create User Cart
// http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88

// PUT

// Update User Checkout History
// http://intriobasket.pexceptos.com/api/checkout/user/5f4d0fd68cc9aa11e6151b88

// PUT

// Update User Cart
// http://intriobasket.pexceptos.com/api/user/update-cart/5f4d0fd68cc9aa11e6151b88
