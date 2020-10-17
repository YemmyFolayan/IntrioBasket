const GetAllCheckoutDOM = document.getElementById("GetAllCheckout");

console.log("history ");
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
