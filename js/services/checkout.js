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
            <td class="productCheckout-quantity"> ${productCheckoutDetails.qty}
            
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

purchaserName = localStorage.getItem("purchaserName");
console.log({ purchaserName });

numbers = localStorage.getItem("numbers");
console.log({ numbers });

phoneNumber = localStorage.getItem("phoneNumber");
console.log({ phoneNumber });

address = localStorage.getItem("address");
console.log({ address });

zipCode = localStorage.getItem("zipCode");
//console.log({ zipCode });

///////RENDER purchaser's Details on checkout History Page

const purchaserDOM = document.getElementById("purchaserDOM");

const purchaserDOMTemplate = () => {
  return `
<div class="col-12">
<h2 class="mx-auto">Purchaser's name: ${purchaserName} </h2>
<h2 class="mx-auto">Numbers of Items: ${numbers} </h2>
<h2 class="mx-auto">Delivery Address: ${address} </h2>
<h2 class="mx-auto">ZipCode: ${zipCode} </h2>
<h2 class="mx-auto">Phone Number: ${phoneNumber} </h2>
</div>`;
};

const DisplaypurchaserDOM = () => {
  let htmlString = purchaserDOMTemplate(
    purchaserName,
    numbers,
    address,
    zipCode
  );
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  purchaserDOM.appendChild(htmlFragment);

  console.log(purchaserName);
};

DisplaypurchaserDOM();
