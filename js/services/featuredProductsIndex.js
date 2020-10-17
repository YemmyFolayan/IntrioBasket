document.addEventListener(
  "DOMContentLoaded",
  () => {
    // updateCartButtonBadge
    fetchFoodListIndex();
  },
  false
);

const featuredProductIndexDOM = document.getElementById(
  "featuredProductsIndex"
);

const featuredProductItemTemplateIndex = (productDetails) => {
  return `
        <div class="product">
        
            <a class="product-img" onclick="alert('Kindly Login or Sign Up')">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
            <div class="product-select">
                
            </div>
        </div>
    `;
};

// Returned first 9 products so as to make the design balance on the homepage
const getFirst9 = (foodList) => {
  return foodList.slice(0, 20);
};

const fetchFoodListIndex = async () => {
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

    let htmlString = featuredProductItemTemplateIndex(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductIndexDOM.appendChild(htmlFragment);
  });
};

fetchFoodListIndex();
