//TODO : IMPLEMENT 7.5%tax on any purchase
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    updateCartButtonBadge();
  },
  false
);

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");

// let qtyVar = 1;

const getQuantity = (e, index) => {
  window["qtyVar" + index] = e.value;

  console.log(e.value, index, window["qtyVar" + index]);

  renderCartTotalTable();
};

//TO DO An update in one quantity affects all RESOLVE!!!!.

const cartItemTemplate = (productDetails, index) => {
  window["qtyVar" + index] = 1;
  return `
        <tr id="${productDetails.id}">
            <td class="product-name">${productDetails.name}</td>
            <td class="product-price">NGN ${productDetails.price}</td>
            <td class="product-quantity">
            <input class="quantity no-round-input" oninput="getQuantity(this,${index})" type="number"  min="1" value="${
    window["qtyVar" + index]
  }">
            </td>
          
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

  cartStore.forEach((product, index) => {
    console.log(index);
    totalPriceToPay += product.price * (window["qtyVar" + index] || 1);
    var totalPriceToTaxFloat = totalPriceToPay + totalPriceToPay * 0.075;
    totalPriceToTax = Math.trunc(totalPriceToTaxFloat);

    localStorage.setItem("totalPrice", totalPriceToTax);
  });

  let htmlString = cartTotalTemplate(totalPriceToPay, totalPriceToTax);

  cartTotalTBodyDOM.innerHTML = htmlString;
};

const deleteItem = (id) => {
  if (localStorage.getItem(CONFIG.CART_STORE) === null) {
    //something is wrong
    return false;
  } else {
    const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
    console.log(cartList, id);

    let newCartList = cartList.filter(
      (item, index) => String(item.id) !== String(id)
    );
    console.log(newCartList);
    localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(newCartList));
  }

  // update Cart
  shopCartTBodyDOM.innerHTML = "";

  lookUpCartStore();
};

console.log("CART DATA");

const lookUpCartStore = () => {
  let cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
  console.log(cartStore);

  if (cartStore === null || cartStore.length === 0)
    return handleNoItemsInCart();

  cartStore.forEach((product, index) => {
    let htmlString = cartItemTemplate(product, index);
    //checkout

    console.log("for each");

    let htmlFragment = document.createElement("tr");

    htmlFragment.setAttribute("id", product.id);
    htmlFragment.innerHTML = htmlString;

    shopCartTBodyDOM.appendChild(htmlFragment);
  });

  // call renderCartTotalTable
  renderCartTotalTable();
};
lookUpCartStore();

//userId is GLOBAL across the site
//let userId = localStorage.getItem("id");
