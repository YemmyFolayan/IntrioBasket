/////////////////////////

//Get Pending Orders[SuperAdmin, Aggregator]
//http://intriobasket.pexceptos.com/api/admin/orders?status=Pending

//Check the return values

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
//         },
//         {
//             "checkout_address": {
//                 "address_name": "Eric house",
//                 "phonenumber": "903456434345",
//                 "zip_code": "55643434"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f79e62bccdff8002481a92f",
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
//             "Date": "2020-10-04T15:11:39.935Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "Eric house",
//                 "phonenumber": "903456434345",
//                 "zip_code": "55643434"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f7f8053adc48200244cb0db",
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
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-08T21:10:43.909Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81b53f12fcc20024a97b01",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:21:03.710Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81b54c12fcc20024a97b02",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:21:16.873Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81b57f12fcc20024a97b03",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:22:07.683Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bb4712fcc20024a97b05",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:46:47.471Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bbd612fcc20024a97b06",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:49:10.857Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bbd712fcc20024a97b07",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:49:11.162Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bbdd12fcc20024a97b08",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:49:17.586Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bc9012fcc20024a97b09",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:52:16.624Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bc9112fcc20024a97b0a",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:52:17.156Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bd5a12fcc20024a97b0b",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:55:38.727Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bdb712fcc20024a97b0c",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T13:57:11.877Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bf2f12fcc20024a97b0e",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T14:03:27.760Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bf3d12fcc20024a97b0f",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T14:03:41.381Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f81bf5212fcc20024a97b10",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-10T14:04:02.081Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f82d8a226944b0024b885ea",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-11T10:04:18.847Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f8319043005630024556273",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-11T14:39:00.123Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "yemi house",
//                 "phonenumber": "08103817187",
//                 "zip_code": "54321"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f837ced18882900241e32c2",
//             "items": [
//                 {
//                     "number": 1
//                 }
//             ],
//             "order_delivery_type": "pick it up",
//             "number_of_items": 1,
//             "total_cost": 2500,
//             "purchaser_id": "5f6b26f9d41c5b00246e3f26",
//             "purchaser_name": "Folayan Iluyemi Michael",
//             "Date": "2020-10-11T21:45:17.272Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "my place",
//                 "phonenumber": "903456434345",
//                 "zip_code": "55643434"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f849baf9a62de00247a93a3",
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
//             "Date": "2020-10-12T18:08:47.812Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "my place",
//                 "phonenumber": "080888808",
//                 "zip_code": "555555"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f849d569a62de00247a93a4",
//             "items": [
//                 {
//                     "item_name": "Chicken3",
//                     "number": 1,
//                     "initial_cost": 1500,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken3.jpg?alt=media&token=aba72a85-a01f-4541-abab-84b52e78b000"
//                 },
//                 {
//                     "item_name": "Baking powder",
//                     "number": 3,
//                     "initial_cost": 500,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c"
//                 }
//             ],
//             "order_delivery_type": "delivery",
//             "number_of_items": 2,
//             "total_cost": 3000,
//             "purchaser_id": "5f68560661c7d8002478bfed",
//             "purchaser_name": "Emmanuel Tobi",
//             "Date": "2020-10-12T18:15:50.943Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "my place",
//                 "phonenumber": "080888808",
//                 "zip_code": "555555"
//             },
//             "delivery_status": "Pending",
//             "_id": "5f849d759a62de00247a93a5",
//             "items": [
//                 {
//                     "item_name": "Baking powder",
//                     "number": 3,
//                     "initial_cost": 500,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c"
//                 },
//                 {
//                     "item_name": "Bitter leaf",
//                     "number": 4,
//                     "initial_cost": 420,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBitter%20leaf.jpg?alt=media&token=e2a0f4d9-f66a-416e-bb51-8487de6d57cc"
//                 }
//             ],
//             "order_delivery_type": "delivery",
//             "number_of_items": 2,
//             "total_cost": 3180,
//             "purchaser_id": "5f68560661c7d8002478bfed",
//             "purchaser_name": "Emmanuel Tobi",
//             "Date": "2020-10-12T18:16:21.491Z",
//             "__v": 0
//         },
//         {
//             "checkout_address": {
//                 "address_name": "Moon",
//                 "phonenumber": "080808080",
//                 "zip_code": "325985"
//             },
//             "delivery_status": "Pending",
//             "_id": "5fdc3023e7cfac00243c5865",
//             "items": [
//                 {
//                     "_id": "5fdc3023e7cfac00243c5866",
//                     "item_name": "Ginger tea",
//                     "number": 1,
//                     "initial_cost": 250,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGinger%20tea.jpg?alt=media&token=b6e218be-4fcb-4a16-924d-bf09ced6375d"
//                 },
//                 {
//                     "_id": "5fdc3023e7cfac00243c5867",
//                     "item_name": "Chicken3",
//                     "number": 2,
//                     "initial_cost": 1500,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken3.jpg?alt=media&token=aba72a85-a01f-4541-abab-84b52e78b000"
//                 },
//                 {
//                     "_id": "5fdc3023e7cfac00243c5868",
//                     "item_name": "Baking powder",
//                     "number": 2,
//                     "initial_cost": 500,
//                     "item_image": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c"
//                 }
//             ],
//             "order_delivery_type": "delivery",
//             "number_of_items": 3,
//             "total_cost": 4585.75,
//             "purchaser_id": "5fd2fe34d48cc10024bf47eb",
//             "purchaser_name": "Cosmic",
//             "Date": "2020-12-18T04:29:23.352Z",
//             "__v": 0
//         }
//     ]
// }

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
