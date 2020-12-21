document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    fetchFoodList();
  },
  false
);

const featuredProductDOM = document.getElementById("featuredProducts");

// Returned first 9 products so as to make the design balance on the homepage
/*const getFirst9 = (foodList) => {
  return foodList.slice(0, 20);
};*/

const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  //const featuredProducts = getFirst9(res.payload);
  res.payload.forEach((product) => {
    let productDetails = {
      id: product._id,
      name: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
      inStock: product.in_stock_status,
    };

    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html?product=${productDetails.id}">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250">
            </a>
           
            <h3 class="product-name">In Stock: ${productDetails.inStock}</h3>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
          
        
            <div class="product-select">
                
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}'); PopUP()" class="add-to-cart round-icon-btn">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <a href="shop_detail_fullwidth.html?product=${productDetails.id}">
                <button class="round-icon-btn">
                    <i class="far fa-eye"></i>
                </button>
                </a>
            </div>
        </div>
    `;
};

const popupTemplateDOM = document.getElementById("dialog-confirm");
const PopUP = () => {
  $(function () {
    $("#dialog-confirm").dialog({
      resizable: false,
      height: "auto",
      width: 360,
      modal: true,
      buttons: {
        "Continue Shopping": function () {
          window.location.assign("/Homepage.html");
        },
        "Goto Cart": function () {
          window.location.assign("/shop_cart.html");
        },
      },
    });
  });

  let htmlString = popupTemplate();
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  popupTemplateDOM.appendChild(htmlFragment);
};

const popupTemplate = () => {
  return `<p>
  `;
};

const CLIENTNameDOM = document.getElementById("userName");
console.log("USERNAMEEEEEEE");

let clientName = localStorage.getItem("name");
console.log({ clientName });

const userNameTemplate = (clientName) => {
  return `
  <a href="login.html">Welcome ! ${clientName}<i class="fas fa-user"></i>Logout</a>
    `;
};

const DisplayUserNameTemplate = () => {
  let htmlString = userNameTemplate(clientName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  CLIENTNameDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE");
};

DisplayUserNameTemplate();

//username Mobile
const CLIENTNameMobileDOM = document.getElementById("userNameMobile");

const userNameMobileTemplate = (clientName) => {
  return `
  <a href="login.html">Welcome ! ${clientName} <i class="fas fa-user"></i>Logout</a>
    `;
};

const DisplayUserNameMobileTemplate = () => {
  let htmlString = userNameMobileTemplate(clientName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  CLIENTNameMobileDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE mobile");
  console.log(name);
};

DisplayUserNameMobileTemplate();
