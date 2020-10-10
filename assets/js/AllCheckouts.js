const featuredProductDOM = document.getElementById("checkoutList");

const featuredProductItemTemplate = (checkoutsDetails) => {
  return `
  <div class="product left-align">
  <h3 class="product-price left-align">NAME: ${checkoutsDetails.purchaser_name}</h3>
  <h3 class="product-price left-align">E-MAIL: ${checkoutsDetails.phonenumber}</h3>
  <h3 class="product-price left-align">PHONE NO: ${checkoutsDetails.address_name}</h3>
  <h3 class="product-price left-align">GENDER: ${checkoutsDetails.zip_code}</h3>
  <h3 class="product-price left-align">NAME: ${checkoutsDetails.item_name}</h3>
  <h3 class="product-price left-align">E-MAIL: ${checkoutsDetails.number_of_items}</h3>
  <h3 class="product-price left-align">PHONE NO: ${checkoutsDetails.total_cost}</h3>
  <h3 class="product-price left-align">GENDER: ${checkoutsDetails.Date}</h3>
  
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

  const res = await api.request(endpoint); // TODO: handle errors..

  const checkouts = res.payload;

  console.log(res.payload);
  console.log("Hi");
  checkouts.forEach((checkout) => {
    let checkoutsDetails = {
      purchaser_name: checkout.fullname,
      phonenumber: checkout.email,
      address_name: checkout.phonenumber,
      zip_code: checkout.gender,
      item_name: checkout.gender,
      number_of_items: checkout.gender,
      total_cost: checkout.gender,
      Date: checkout.gender,
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
}



*/