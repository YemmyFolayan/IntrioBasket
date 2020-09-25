const featuredProductDOM = document.getElementById("featuredProducts");

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250" onclick="featuredProductItemTemplate('${productDetails.id}','${productDetails.name}','${productDetails.description}','${productDetails.description}','${productDetails.imageUrl}','${productDetails.price}')">
            </a>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
            <div class="product-select">
                <button class="add-to-wishlist round-icon-btn">
                    <i class="icon_heart_alt"></i>
                </button>
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}')" class="add-to-cart round-icon-btn">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button class="add-to-compare round-icon-btn">
                    <i class="fas fa-random"></i>
                </button>
                <button onclick="display('${productDetails.id}','${productDetails.name}','${productDetails.description}','${productDetails.description}','${productDetails.imageUrl}','${productDetails.price}')" class="quickview round-icon-btn">
                    <i class="far fa-eye"></i>
                </button>
            </div>
        </div>
    `;
};

// Returned first 9 products so as to make the design balance on the homepage
const getFirst9 = (foodList) => {
  return foodList.slice(0, 9);
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
      // TODO: there should also be a product url...
    };

    // $("body").prepend(
    //   `'<div id="quickview"> <div class="quickview-box"> <button class="round-icon-btn" id="quickview-close-btn"><i class="fas fa-times"></i></button> <div class="row"> <div class="col-12 col-md-6"> <div class="shop-detail_img"> <button class="round-icon-btn" id="zoom-btn"> <i class="icon_zoom-in_alt"></i></button> <div class="big-img big-img_qv"> <div class="big-img_block"><img src="+${productDetails.imageUrl}+" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div><div class="slide-img slide-img_qv"> <div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div></div></div><div class="col-12 col-md-6"> <div class="shop-detail_info"> <h5 class="product-type color-type">${productDetails.type} </h5><a class="product-name" href="shop_detail.html">${productDetails.name}</a> <div class="price-rate"> <h3 class="product-price">${productDetails.name}</h3> </div><p class="product-describe"> ${productDetails.description}</p><div class="quantity-select"> <label for="quantity">Quantity:</label> <input class="no-round-input" id="quantity" type="number" min="0" value="1"> </div><div class="product-select"> <button class="add-to-cart normal-btn outline">Add to Cart</button> <button class="add-to-compare normal-btn outline">+ Add to Compare</button> </div><div class="product-share"> <h5>Share link:</h5><a href=""><i class="fab fa-facebook-f"> </i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fab fa-invision"> </i></a><a href=""><i class="fab fa-pinterest-p"></i></a> </div></div></div></div></div></div>'`
    // );


    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();
