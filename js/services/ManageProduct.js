/**
 * @param { String } id
 * @param {String} name
 * @param {String} type
 * @param {String} imageUrl
 * @param {String} price
 */

const manageProductDOM = document.getElementById("ManageProducts");

const manageProductItemTemplate = (foodListings) => {
  return `
        <div class="product">
            <a class="product-img" href="javascript:void()">
                <img alt="product" src="${foodListings.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${foodListings.type}</h5>
            <h3 class="product-name">${foodListings.foodName}</h3>
            <h3 class="product-price">NGN ${foodListings.price}</h3>
            <div class="product-select">
                
                <button onclick="createFoodListing()" class="add-to-cart round-icon-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="quickview round-icon-btn" onclick="updateFoodListing()">
                <i class="fas fa-sync"></i>
                </button>
               
                <button class="add-to-cart round-icon-btn" onclick="deleteFoodListing()">
                <i class="fas fa-trash"></i>
              </button>
              <select class="no-round-input" id="inStock" type="text" name="inStock"> 
                <option value="Yes" id="Yes" name="Yes"> Yes </option>
                <option value="No" id="No" name="No"> No </option>
              </select>
            </div>
        </div>  
    `;
};

////////onclick="addToCart('${foodListings.id}','${foodListings.name}','${foodListings.type}','${foodListings.imageUrl}','${foodListings.price}')
let foodListings;
const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

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
    };

    let htmlString = manageProductItemTemplate(foodListings);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    manageProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();

let AdminId = localStorage.getItem("AdminId");
console.log({ AdminId });

let adminToken = localStorage.getItem("adminToken");
console.log({ adminToken });

/**

var Form = document.getElementById("creatFoodForm");
Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var productName = document.getElementById("food_product_name").value;
  var productType = document.getElementById("product_type").value;
  var categoryType = document.getElementById("category_type").value;
  var shortDescription = document.getElementById("short_description").value;
  var LongDescription = document.getElementById("long_description").value;
  var price = document.getElementById("cost").value;
  var ImageLink = document.getElementById("image_link").value;
  var InStock = document.getElementById("in_stock_status").value;


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
      image_link: ImageLink,
      in_stock_status: InStock,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("http://intriobasket.pexceptos.com/api/food/create", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  

    console.log("Create Food Listing[Admin] ");
  };
};
  
  
**/

/**
   //FROM FETCH FOOD ENDPOINT
   //POST Create Food Listing http://intriobasket.pexceptos.com/api/food/create
        
   const updateFoodListing = (foodListings) => {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("x-admin-token", `${adminToken}`);
        
          var raw = JSON.stringify({
            food_product_name: foodListings.foodName,
            product_type: foodListings.productType,
            category_type: foodListings.categoryType,
            short_description: foodListings.shortDescription,
            long_description: foodListings.description,
            cost: foodListings.price,
            image_link: foodListings.imageUrl,
            in_stock_status: "Yes",
          });
        
          var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
        
          fetch(
            `http://intriobasket.pexceptos.com/api/food/update/${AdminId}`,
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        
          //window.location.assign("/shop_cart.html");
          console.log("Update Food Listing[Admin] ");
        };
        

//DEL Delete Food Listing[Admin] http://intriobasket.pexceptos.com/api/food/5f838f85fef8090024a53638

const deleteFoodListing = () => {
  console.log("updatecart function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${adminToken}`);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://intriobasket.pexceptos.com/api/food/${AdminId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Delete Food Listing[Admin]");
};


**/
