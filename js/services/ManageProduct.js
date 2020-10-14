const manageProductDOM = document.getElementById("ManageProducts");

const manageProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html?product=${productDetails.id}">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
            <div class="product-select">
                
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}')class="add-to-cart round-icon-btn">
                    <i class="fa fa-plus"></i>
                </button>
                <button class="quickview round-icon-btn">
                    <i class="fa fa-minus"></i>
                </button>
                <button class="add-to-cart round-icon-btn">
                <i class="fas fa-edit"></i>
            </button>
            </div>
        </div>
    `;
};

const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  res.payload.forEach((product) => {
    let productDetails = {
      id: product._id,
      name: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
    };

    let htmlString = manageProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    manageProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();

/**
 * POST Create Food Listing http://intriobasket.pexceptos.com/api/food/create
const updateCart = (name, imageUrl, price) => {
  console.log("updatecart function");
  var numbers = 1;
  var name = name;
  var price = price;
  var imageUrl = imageUrl;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    food_product_name: "hh",
    product_type: "jj",
    category_type: "ll",
    short_description: "ll",
    long_description: "ll",
    cost: "87777",
    image_link: "image",
    in_stock_status: "Yes",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food/create`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Update Food Listing[Admin] ");
};

//GET Query foodlisting by category http://intriobasket.pexceptos.com/api/food/get?food_product_name=Cocoa powder

//GET Get All Food Listing http://intriobasket.pexceptos.com/api/food

//PUT Update Food Listing[Admin] http://intriobasket.pexceptos.com/api/food/update/5f838f85fef8090024a53638
const updateCart = (name, imageUrl, price) => {
  console.log("updatecart function");
  var numbers = 1;
  var name = name;
  var price = price;
  var imageUrl = imageUrl;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${userToken}`);

  var raw = JSON.stringify({
    food_product_name: "hh",
    product_type: "jj",
    category_type: "ll",
    short_description: "ll",
    long_description: "ll",
    cost: "87777",
    image_link: "image",
    in_stock_status: "Yes",
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food/update/${userId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Update Food Listing[Admin] ");
};

//DEL Delete Food Listing[Admin] http://intriobasket.pexceptos.com/api/food/5f838f85fef8090024a53638

const updateCart = (name, imageUrl, price) => {
  console.log("updatecart function");
  var numbers = 1;
  var name = name;
  var price = price;
  var imageUrl = imageUrl;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${userToken}`);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food/${userId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Delete Food Listing[Admin]");
};

**/
