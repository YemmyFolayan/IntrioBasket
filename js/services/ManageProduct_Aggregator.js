/**
 * @param { String } id
 * @param {String} name
 * @param {String} type
 * @param {String} imageUrl
 * @param {String} price
 */

//Checkout[SuperAdmin, Admin]

const manageProductDOM = document.getElementById("ManageProducts");

const manageProductItemTemplate = (foodListings) => {
  return `
        <div class="product" id="foodListings.id">
            <a class="product-img" href="javascript:void()">
                <img alt="product" src="${foodListings.imageUrl}" height="200" width="250">
            </a>
            <h3 class="product-name">In Stock: ${foodListings.inStock}</h3>
            <h5 class="product-type">${foodListings.type}</h5>
            <h3 class="product-name">${foodListings.foodName}</h3>
            <h3 class="product-price">NGN ${foodListings.price}</h3>
            <div class="product-select">
                
                
                <button class="add-to-cart round-icon-btn" onclick="DeleteFoodListing()">
                <i class="fas fa-trash"></i>
              </button>
             
            </div>
        </div>  
    `;
};

////////onclick="addToCart('${foodListings.id}','${foodListings.name}','${foodListings.type}','${foodListings.imageUrl}','${foodListings.price}')
let foodListings;
let productId;
const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TO DO: handle errors..

  res.payload.forEach((product) => {
    foodListings = {
      id: product._id,
      foodName: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
      productType: product.product_type,
      categoryType: product.category_type,
      shortDescription: product.short_description,
      inStock: product.in_stock_status,
    };

    let htmlString = manageProductItemTemplate(foodListings);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    manageProductDOM.appendChild(htmlFragment);
    productId = foodListings.id;
    //DeleteFoodListing();
  });
};

fetchFoodList();

let AdminId = localStorage.getItem("AdminId");
console.log({ AdminId });

let adminToken = localStorage.getItem("adminToken");
console.log({ adminToken });

//image File to upload to firebase
let files;
let imageName;
let imageUrl;
let thisRef;

//Uploading product image
window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("img"); // $('img')[0]
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        img.onload = uploadFile;

        //image File to upload to firebase
        files = this.files[0];

        imageName = files.name;

        console.log(files.name);
        console.log("image file");
        console.log("how far" + this.files[0]);
      }
    });
});

//function to save file
function uploadFile() {
  // Create the file metadata
  var metadata = {
    contentType: "image/jpeg",
  };

  //image File to upload to firebase
  file = files;

  // Created a Storage Reference with root dir
  var storageRef = firebase.storage().ref();
  // Get the file from DOM

  console.log(file);

  //dynamically set reference to the file name
  thisRef = storageRef.child("food_images/").child(imageName);

  console.log(file);

  //put request upload file to firebase storage
  thisRef.put(file, metadata).then(function (snapshot) {
    alert(imageName + "   Uplaoded =>100%");
    console.log("Uploaded a blob or file!");

    //console.log(file);
    //alert(file);

    thisRef.getDownloadURL().then(function (url) {
      // `url` is the download URL for 'images/stars.jpg'
      imageUrl = url;
      console.log("image link");
      console.log(imageUrl);
    });
  });
}

///TO DO GET IMAGE LINK FROM FIREBASE , USE IT TO CREATE FOODLISTINGS WITH CREATE FOODLISTINGS API
//CREATE FOODLISTING
var FoodForm = document.getElementById("foodForm");
setTimeout(function () {
  FoodForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var productName = document.getElementById("productName").value;

    var selectorProd = document.getElementById("productType");

    var productType = selectorProd[selectorProd.selectedIndex].value;

    var selectorCat = document.getElementById("categoryType");

    var categoryType = selectorCat[selectorCat.selectedIndex].value;

    var shortDescription = document.getElementById("shortDescription").value;
    var LongDescription = document.getElementById("LongDescription").value;
    var price = document.getElementById("price").value;

    var selector = document.getElementById("id_of_select");
    var inStock = selector[selector.selectedIndex].value;

    console.log(productName);
    console.log(productType);
    console.log(categoryType);
    console.log(shortDescription);
    console.log(LongDescription);
    console.log(price);
    console.log(inStock);
    console.log(imageUrl);

    //Set time out for this

    const createFoodListing = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        food_product_name: productName,
        product_type: productType,
        category_type: categoryType,
        short_description: shortDescription,
        long_description: LongDescription,
        cost: price,
        image_link: imageUrl,
        in_stock_status: inStock,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "http://intriobasket.pexceptos.com/api/food/create",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      console.log("Create Food Listing ");
    };

    createFoodListing();
    //console.log(create food);
    alert("Uploaded Successfully....100%");
  });
}, 6000);

//UPDATE FOODLISTING

var UpdatefoodForm = document.getElementById("UpdatefoodForm");
setTimeout(function () {
  UpdatefoodForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var NewproductName = document.getElementById("UpdateproductName").value;

    var selectorProd = document.getElementById("UpdateproductType");

    var NewproductType = selectorProd[selectorProd.selectedIndex].value;

    var selectorCat = document.getElementById("UpdatecategoryType");

    var NewcategoryType = selectorCat[selectorCat.selectedIndex].value;

    var NewshortDescription = document.getElementById("UpdateshortDescription")
      .value;
    var NewLongDescription = document.getElementById("UpdateLongDescription")
      .value;
    var Newprice = document.getElementById("Updateprice").value;

    console.log(NewproductName);
    console.log(NewproductType);
    console.log(NewcategoryType);
    console.log(NewshortDescription);
    console.log(NewLongDescription);
    console.log(Newprice);
    console.log(inStock);
    console.log(NewimageUrl);

    //Set time out for this

    const updateFetchFoodList = async () => {
      const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

      const res = await api.request(endpoint); // TODO: handle errors..

      ///NOT so SURE FOREACH

      res.payload.forEach((product) => {
        let foodId = product._id;
        let foodName = product.food_product_name;

        if (foodName == NewproductName) {
          const foodIdd = foodId;
          localStorage.setItem("foodIdd", foodIdd);

          console.log(foodIdd);
        }
      });
    };
    updateFetchFoodList();

    //userId is GLOBAL across the site
    let foodIdd = localStorage.getItem("foodIdd");
    console.log({ foodIdd });

    const UpdateFoodListing = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        food_product_name: productName,
        product_type: productType,
        category_type: categoryType,
        short_description: shortDescription,
        long_description: LongDescription,
        cost: price,
        image_link: imageUrl,
        in_stock_status: inStock,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `http://intriobasket.pexceptos.com/api/food/update/${foodIdd}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      console.log("Update Food Listing ");
    };

    UpdateFoodListing();
    //console.log(create food);
    alert("Updated Successfully....100%");
  });
}, 6000);

//DELETE FOODLISTING
const DeleteFoodListing = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${adminToken}`);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,

    redirect: "follow",
  };

  fetch(
    `http://intriobasket.pexceptos.com/api/food/${productId}`,
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;

      alert(msg);
    });
  //.catch((error) => console.log("error", error));

  console.log("Delete Food Listing ");
  fetchFoodList();
};

console.log("Delete Food Listing 2");

///UPDATE USER PROFILE
var UpdateUserProfile = document.getElementById("UpdateUserProfile");

UpdateUserProfile.addEventListener("submit", function (e) {
  e.preventDefault();

  var UpdateFullName = document.getElementById("UpdateFullName").value;

  var UpdatePhoneNo = document.getElementById("UpdatePhoneNo").value;

  console.log(UpdateFullName);
  console.log(UpdatePhoneNo);

  //Set time out for this

  const updateFetchFoodList = async () => {
    const endpoint = "/user"; // THOUGHTS: There should be an endpoint for featured products...

    const res = await api.request(endpoint); // TO DO: handle errors..

    ///NOT so SURE FOREACH

    res.payload.forEach((user) => {
      let userId = user._id;
      let userName = user.fullname;

      if (userName == UpdateFullName) {
        const userIdd = userId;
        localStorage.setItem("userIdd", userIdd);

        console.log(userIdd);
      }
    });
  };
  updateFetchFoodList();
