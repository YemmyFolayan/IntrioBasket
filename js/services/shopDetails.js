const shopDetailsDOM = document.getElementById("shopDetails");
const shopDOM = document.getElementById("shopDOM");

//POP UP

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

const productDetailsTemplate = (productDetails) => {
  return `
  <div class="col-8 col-sm-10" >
    <div class="shop-detail_more-info">
      <div id="tab-so3">
        <ul class="mb-0">
          <li class="active"><a href="#tab-1">DESCRIPTION</a></li>
         
        </ul>
        <div id="tab-1">
          <div class="description-block">
            <div class="description-item_block" id="${productDetails.id}">
                  <div class="row align-items-center justify-content-around">
                    <div class="col-12 col-md-4">
                      <div class="description-item_img"><img class="img-fluid" src="${productDetails.imageUrl}" alt="description image"></div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="description-item_text">
                      <h2>${productDetails.type}</h2>
                      <h2>${productDetails.name}</h2>
                     
                      <p>${productDetails.description}</p>
                    
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-8 col-md-4">
    <div class="shop-detail_info shop-detail_info-full">
      <p class="delivery-status">Free delivery</p>
      <div style="padding: 10px 30px 10px 30px;">
        <div class="price-rate">
          <h3 class="product-price">
          NGN ${productDetails.price}
          </h3>
        </div>
        <div class="quantity-select">
          <label for="quantity">Quantity:</label>
          <input class="no-round-input" id="quantity" type="number" min="0" value="1">
        </div>


        <div class="product-select">
          <button class="add-to-cart normal-btn outline" onclick="PopUP(); addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}')">Add to Cart</button>
          
        </div>
        <div class="product-guarante">
          <p class="guarante">Satisfaction 100% Guaranteed</p>
          <p class="guarante">Free shipping on orders over NGR 100,000</p>
        
        </div>
      </div>
    </div>
  </div>
  </div>`;
};

const getProduct = (foodList, productId) => {
  return foodList.filter((food) => food._id === productId)[0];
};

const handleProductIdError = () => {
  shopDOM.style.display = "none";
};

const initProductDetails = async () => {
  let productId;

  try {
    productId = decodeURI(document.location.href).split("?")[1].split("=")[1];
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
    description: product.long_description,
  };

  let htmlString = productDetailsTemplate(productDetails);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  shopDetailsDOM.appendChild(htmlFragment);
};

initProductDetails();
