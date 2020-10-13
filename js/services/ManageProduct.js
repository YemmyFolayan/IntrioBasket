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
                
                <button class="add-to-cart round-icon-btn">
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
