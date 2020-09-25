//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");

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

  cartTotalTBodyDOM.innerHTML = htmlString;
};

const lookUpCartStore = () => {
  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  if (cartStore === null || cartStore.length === 0)
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    let htmlString = cartItemTemplate(product);
    let htmlFragment = document.createElement("tr");
    htmlFragment.setAttribute("id", product.id);
    htmlFragment.innerHTML = htmlString;
    shopCartTBodyDOM.appendChild(htmlFragment);
  });

  // call renderCartTotalTable
  renderCartTotalTable();
};

lookUpCartStore();

//productdetails template for shop_detail_fullwidth page
const shopDetailTemplate = (productDetails) => {
  return `
            <div class="description-item_block">
                <div class="row align-items-center justify-content-around">
                    <div class="col-12 col-md-4">
                        <div class="description-item_img"><img class="img-fluid" src="${productDetails.imageUrl}" alt="description image"></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="description-item_text">
                            <h2>${productDetails.name}</h2>
                            <p>${productDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
};

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

//TODO

// POST

// Create User Cart
// http://intriobasket.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88

// PUT

// Update User Checkout History
// http://intriobasket.pexceptos.com/api/checkout/user/5f4d0fd68cc9aa11e6151b88

// PUT

// Update User Cart
// http://intriobasket.pexceptos.com/api/user/update-cart/5f4d0fd68cc9aa11e6151b88
