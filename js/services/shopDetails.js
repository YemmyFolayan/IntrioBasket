const featuredProductDOM = document.getElementById("shopDetails");

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="description-item_block" id="${productDetails.id}">
            <div class="row align-items-center justify-content-around">
                <div class="col-12 col-md-4">
                    <div class="description-item_img"><img class="img-fluid" src="${productDetails.imageUrl}" alt="description image"></div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="description-item_text">
                        <h2>${productDetails.type}</h2>
                        <h2>${productDetails.name}</h2>
                        <h2>NGN ${productDetails.price}</h2>
                        <p>${productDetails.description}</p>
                    </div>
                </div>
            </div>
        </div>`;
};

//write function to get element by ID or pass parameter via onclick to achieve displaying each product details

// const getFirst9 = (foodList) => {
//   return foodList.slice(0, 9);
// };

const lookUpCartStore = () => {
  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  cartStore.forEach((product) => {
  
    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.setAttribute("id", product.id);
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
    console.log("shop-detail");
  });
}

lookUpCartStore();
console.log("shop-detail");


// // Returned first 9 products so as to make the design balance on the homepage
// const getFirst9 = (foodList) => {
//     return foodList.slice(13, 23)
// };

// const fetchFoodList = async () => {
//     const endpoint = '/food'; // THOUGHTS: There should be an endpoint for featured products...

//     const res = await api.request(endpoint); // TODO: handle errors..

//     const featuredProducts = getFirst9(res.payload);
//     featuredProducts.forEach(product => {

//         let productDetails = {
//             id: product._id,
//             name: product.food_product_name,
//             type: product.product_type,
//             imageUrl: product.image_link,
//             price: product.cost,
//             description: product.long_description
//             // TODO: there should also be a product url...
//         };

//         let htmlString = featuredProductItemTemplate(productDetails);
//         let htmlFragment = document.createElement('div')
//         htmlFragment.innerHTML = htmlString
//         featuredProductDOM.appendChild(htmlFragment)
//     });
// };

// fetchFoodList();
