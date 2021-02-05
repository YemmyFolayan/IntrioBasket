/////////////////////////

//TODO AUTHENTICATION
//NOTE ADMIN MUST LOGIN FIRST

// {
//     "status": "OK",
//     "message": "orders fetched successfully",
//     "payload": [
//         {
//             "checkout_address": {
//                 "address_name": "Eric house",
//                 "phonenumber": "903456434345",
//                 "zip_code": "55643434"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f79e5edccdff8002481a92e",
//             "items": [
//                 {
//                     "item_name": "fish",
//                     "number": 4,
//                     "initial_cost": 600,
//                     "item_image": "teaaqweddd"
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2425,
//             "purchaser_id": "5f68560661c7d8002478bfed",
//             "purchaser_name": "Emmanuel Tobi",
//             "Date": "2020-10-04T15:10:37.443Z",
//             "__v": 0

let adminToken = localStorage.getItem("adminToken");
console.log({ adminToken });
const featuredPendingDOM = document.getElementById("PendingOrders");

let pendingDetails;

const featuredPendingItemTemplate = (pendingDetails) => {
  return `
  <div class="product left-align"> 

  <h3 class="product-price left-align">NAME: ${pendingDetails.purchaser_name}</h3>
  <h3 class="product-price left-align">ORDER DELIVERY TYPE: ${pendingDetails.order_delivery_type}</h3>
   <h3 class="product-price left-align">ITEM NAME: ${pendingDetails.item_name}</h3>
  <h3 class="product-price left-align">NUMBER OF ITEMS: ${pendingDetails.number_of_items}</h3>
  <h3 class="product-price left-align">TOTAL COST: ${pendingDetails.total_cost}</h3>
  <h3 class="product-price left-align">DATE: ${pendingDetails.Date}</h3>
  
  <div class="product-select">
      <button class="quickview round-icon-btn">
          <i class="far fa-eye"></i>
      </button>
  </div>
</div>

    `;
};

const fetchPendingList = async () => {
  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/admin/orders?status=Pending",
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json; charset= UTF-8",
        "x-admin-token": `${adminToken}`,
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      var Pendings = res.payload;
      console.log(Pendings);
      console.log("Hi");
      Pendings.forEach((pending) => {
        console.log(pending);
        pendingDetails = {
          purchaser_name: pending.purchaser_name,
          order_delivery_type: pending.order_delivery_type,
          item_name: pending.items.item_name,
          number_of_items: pending.number_of_items,
          total_cost: pending.total_cost,
          Date: pending.Date,
        };

        let htmlString = featuredPendingItemTemplate(pendingDetails);
        let htmlFragment = document.createElement("div");
        htmlFragment.innerHTML = htmlString;
        featuredPendingDOM.appendChild(htmlFragment);
      });
    });
};

/*const endpoint = "/admin/orders?status=Pending"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TO DO: handle errors..

  const Pendings = res.payload;

  console.log(res.payload); */

fetchPendingList();

const featuredProductDOM = document.getElementById("CompletedOrders");

const featuredProductItemTemplate = (checkoutsDetails) => {
  return `
  <div class="product left-align">
  <h3 class="product-price left-align">NAME: ${checkoutsDetails.purchaser_name}</h3>
  <h3 class="product-price left-align">Phone No: ${checkoutsDetails.phonenumber}</h3>
  <h3 class="product-price left-align">Address: ${checkoutsDetails.address_name}</h3>
  <h3 class="product-price left-align">ZipCode: ${checkoutsDetails.zip_code}</h3>
  <h3 class="product-price left-align">Item Name: ${checkoutsDetails.item_name}</h3>
  <h3 class="product-price left-align">No of Items: ${checkoutsDetails.number_of_items}</h3>
  <h3 class="product-price left-align">Total Cost: ${checkoutsDetails.total_cost}</h3>
  <h3 class="product-price left-align">DATE: ${checkoutsDetails.Date}</h3>
  
  <div class="product-select">
      <button class="quickview round-icon-btn">
          <i class="far fa-eye"></i>
      </button>
  </div>
</div>

    `;
};

const fetchFoodList = async () => {
  const endpoint = "/checkout/get-all"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TO DO: handle errors..

  const checkouts = res.payload;

  console.log(res.payload);
  console.log("Hi");
  checkouts.forEach((checkout) => {
    let checkoutsDetails = {
      purchaser_name: checkout.purchaser_name,
      phonenumber: checkout.checkout_address.phonenumber,
      address_name: checkout.checkout_address.address_name,
      zip_code: checkout.checkout_address.zip_code,
      item_name: checkout.items[0].item_name,
      number_of_items: checkout.number_of_items,
      total_cost: checkout.total_cost,
      Date: checkout.Date,
    };

    let htmlString = featuredProductItemTemplate(checkoutsDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();

/**

{
  "status": "OK",
  "message": "All checkouts fetched successfully",
  "payload": [
      {
          "checkout_address": {
              "address_name": "Eric house",
              "phonenumber": "903456434345",
              "zip_code": "55643434"
          },
          "delivery_status": "Pending",
          "_id": "5f63e866f37c7d259c14f6ca",
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
              "_id": "5f4d0fd68cc9aa11e6151b88",
              "fullname": "Eric"
          },
          "purchaser_name": "Eric",
          "Date": "2020-09-17T22:51:18.022Z",
          "__v": 0
      },
      {
          "checkout_address": {
              "address_name": "Eric house",
              "phonenumber": "903456434345",
              "zip_code": "55643434"
          },
          "delivery_status": "Pending",
          "_id": "5f79e5edccdff8002481a92e",
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
              "_id": "5f68560661c7d8002478bfed",
              "fullname": "Emmanuel Tobi"
          },
          "purchaser_name": "Emmanuel Tobi",
          "Date": "2020-10-04T15:10:37.443Z",
          "__v": 0
      },
      {
          "checkout_address": {
              "address_name": "Eric house",
              "phonenumber": "903456434345",
              "zip_code": "55643434"
          },
          "delivery_status": "Pending",
          "_id": "5f79e62bccdff8002481a92f",
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
              "_id": "5f68560661c7d8002478bfed",
              "fullname": "Emmanuel Tobi"
          },
          "purchaser_name": "Emmanuel Tobi",
          "Date": "2020-10-04T15:11:39.935Z",
          "__v": 0
      },
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
      }
  ]
}**/
