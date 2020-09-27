//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");

// const shopCartTBodyDOMCheckout = document.getElementById(
//   "shopCartTBodyCheckout"
// );
// const cartTotalTBodyDOMCheckout = document.getElementById(
//   "cartTotalTBodyCheckout"
// );

//cart
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

  cartTotalTBodyDOM.innerHTML = htmlString;
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

  
  });

  // call renderCartTotalTable
  renderCartTotalTable();
};

lookUpCartStore();

//delete each Item



//TODO
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
