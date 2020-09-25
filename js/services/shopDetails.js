const shopDetailsDOM = document.getElementById("shopDetails");
const shopDOM = document.getElementById("shopDOM");

const productDetailsTemplate = (productDetails) => {
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

const getProduct = (foodList, productId) => {

  return foodList.filter(food => food._id === productId)[0];
};

const handleProductIdError = () => {
  shopDOM.style.display = "none";
};

const initProductDetails = async () => {
  let productId;

  try {
    productId = decodeURI(document.location.href).split('?')[1].split('=')[1]
  } catch (err) {
    handleProductIdError();
    throw new Error(err);
  }

  const endpoint = "/food";
  const res = await api.request(endpoint);
  const product = getProduct(res.payload, productId);

  const productDetails = {
    id: product._id,
    name: product.food_product_name,
    type: product.product_type,
    imageUrl: product.image_link,
    price: product.cost,
    description: product.long_description
  };

  let htmlString = productDetailsTemplate(productDetails);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  shopDetailsDOM.appendChild(htmlFragment);
}

initProductDetails();
