const featuredProductDOM = document.getElementById("featuredProducts");

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html?product=${productDetails.id}">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
            <div class="product-select">
                <button class="add-to-wishlist round-icon-btn">
                    <i class="icon_heart_alt"></i>
                </button>
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}'); PopUP()" class="add-to-cart round-icon-btn">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button class="quickview round-icon-btn">
                    <i class="far fa-eye"></i>
                </button>
            </div>
        </div>
    `;
};

// Returned first 9 products so as to make the design balance on the homepage
const getFirst9 = (foodList) => {
  return foodList.slice(0, 20);
};

const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  const featuredProducts = getFirst9(res.payload);
  featuredProducts.forEach((product) => {
    let productDetails = {
      id: product._id,
      name: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
    };

    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();


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
