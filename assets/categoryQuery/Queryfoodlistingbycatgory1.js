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
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}')" class="add-to-cart round-icon-btn">
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
// const getFirst9 = (foodList) => {
//   return foodList.slice(0, 9);
// };

const fetchFoodList = async () => {
  const endpoint = "/food/get?category_type=FLOURS"; // THOUGHTS: There should be an endpoint for featured products...

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
    };

    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();











/*


const app = document.getElementById("root3");

// const subcontainer = document.createElement("div");
// subcontainer.setAttribute("class", "displayflex");

// container.appendChild(subcontainer);

const url =
  "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food/get?category_type=FLOURS";
console.log("foodlists");

fetch(url)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    reject(response);
  }
})
.then((data) => {
  // First, parse the JSON into an array of Objects:

  // var data = JSON.parse(json);

  // Then combine sort and slice to achieve your goal:

  // if (request.status >= 200 && request.status < 400) {
  data.payload.forEach(({ food_product_name, image_link, cost }) => {
    const container = document.createElement("div");
    container.setAttribute("class", "product");

    const productdetails = document.createElement("a");
    productdetails.setAttribute("class", "product-img");
    productdetails.setAttribute("href", "shop_detail_fullwidth.html");

    const img = document.createElement("img");
    img.setAttribute("alt", "product");
    img.src = `${image_link}...`;

    //product details
    // const imagyy = document.getElementById("imagy");

    const h5 = document.createElement("h5");
    h5.textContent = food_product_name;

    h5.setAttribute("class", "product-type");

    const h3cost = document.createElement("h3");
    h3cost.textContent = food_product_name;

    h3cost.setAttribute("class", "product-name");

    const h3 = document.createElement("h3");
    h3.textContent = `NGN ${cost}`;

    h3.setAttribute("class", "product-price");

    const productselect = document.createElement("div");
    productselect.setAttribute("class", "product-select");

    const addlist = document.createElement("button");
    addlist.setAttribute("class", "add-to-wishlist round-icon-btn");

    const iconlist = document.createElement("i");
    iconlist.setAttribute("class", "icon_heart_alt");

    const addcart = document.createElement("button");
    addcart.setAttribute("class", "add-to-cart round-icon-btn");

    const iconcart = document.createElement("i");
    iconcart.setAttribute("class", "fa fa-shopping-cart");

    const addcomp = document.createElement("button");
    addcomp.setAttribute("class", "add-to-compare round-icon-btn");

    const iconcomp = document.createElement("i");
    iconcomp.setAttribute("class", "fas fa-random");

    const addview = document.createElement("button");
    addview.setAttribute("class", "quickview round-icon-btn");

    const iconview = document.createElement("i");
    iconview.setAttribute("class", "far fa-eye");

    app.appendChild(container);

    container.appendChild(productdetails);

    productdetails.appendChild(img);
    container.appendChild(h5);

    container.appendChild(h3cost);

    container.appendChild(h3);

    container.appendChild(productselect);

    productselect.appendChild(addlist);

    addlist.appendChild(iconlist);

    productselect.appendChild(addcart);

    addcart.appendChild(iconcart);

    productselect.appendChild(addcomp);

    addcomp.appendChild(iconcomp);

    productselect.appendChild(addview);

    addview.appendChild(iconview);

    // imagyy.appendChild(img);
  });
});

*/
