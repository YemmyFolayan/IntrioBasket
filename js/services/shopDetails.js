const featuredProductDOM = document.getElementById("shopDetails");

console.log("shop-detail");

const featuredProductItemTemplate = (productDetails) => {
  localStorage.setItem("id", productDetails.id);
  localStorage.setItem("image", productDetails.imageUrl);
  localStorage.setItem("type", productDetails.type);
  localStorage.setItem("name", productDetails.name);
  localStorage.setItem("price", productDetails.price);
  localStorage.setItem("description", productDetails.description);

  return `
        <div class="description-item_block" id="${id}">
            <div class="row align-items-center justify-content-around">
                <div class="col-12 col-md-4">
                    <div class="description-item_img"><img class="img-fluid" src="${imageUrl}" alt="description image"></div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="description-item_text">
                        <h2>${type}</h2>
                        <h2>${name}</h2>
                        <h2>NGN ${price}</h2>
                        <p>${description}</p>
                    </div>
                </div>
            </div>
        </div>`;
};

//write function to get element by ID or pass parameter via onclick to achieve displaying each product details

// const getFirst9 = (foodList) => {
//   return foodList.slice(0, 9);
// };

const display = () => {
  //PLAY AROUND LOCAL STORAGE HERE.... SET , GET ITEMS
  //localStorage.getItem
  //localStorage.getItem
  localStorage.getItem("id", productDetails.id);
  localStorage.getItem("image", productDetails.imageUrl);
  localStorage.getItem("type", productDetails.type);
  localStorage.getItem("name", productDetails.name);
  localStorage.getItem("price", productDetails.price);
  localStorage.getItem("description", productDetails.description);

  let htmlString = featuredProductItemTemplate(productDetails);
  let htmlFragment = document.createElement("div");
  htmlFragment.setAttribute("id", product.id);
  htmlFragment.innerHTML = htmlString;
  featuredProductDOM.appendChild(htmlFragment);
  console.log("shop-detail");
};

display();
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
