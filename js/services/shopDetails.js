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

let searchName;

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

  searchName = productDetails.name;
  console.log("productNameeeeeeee");
  console.log(searchName);

  let htmlString = productDetailsTemplate(productDetails);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  shopDetailsDOM.appendChild(htmlFragment);
};

initProductDetails();

let searchItem;

/*
const initProductNames = async () => {
  const endpointName = "/food";
  const resNames = await api.request(endpointName);

  //const foodNames = resNames.payload.food_product_name;

  resNames.payload.forEach((foodName) => {
    let foodNames = {
      foodNamess: foodName.food_product_name,
    };

    foodNamesy = foodNames.foodNamess;
    console.log(foodNames.foodNamess);

    //var searchN = "Carbage 2";

    if (searchItem === "Ayoola Poundo yam") {
      console.log("yes");

      //redirect page to shop details page

      window.location.assign(
        "shop_detail_fullwidth.html?product=5f4385e106c5350024edc172"
      );

      alert(searchItem);
    } else if (searchItem === "Lard") {
      alert("Lard");
      
    } else {
      console.log("No or product Not available");
    }

    //console.log(foodNames);
    console.log("food Namesssssss");
  });
};

*/

//TASK TARGET THE SEARCH WORD. MATCH IT WITH PRODUCT DETAILS NAME.
//THEN DISPLAY SHOP DETAILS PAGE

var searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  searchItem = document.getElementById("myInput").value;

  console.log("====================================");
  console.log(searchItem);

  if (searchItem === "Ayoola Poundo yam") {
    //console.log("yes");

    //redirect page to shop details page

    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e106c5350024edc172"
    );

    //alert(searchItem);
  } else if (searchItem === "Baking powder") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e106c5350024edc171"
    );
  } else if (searchItem === "Beans flour") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e206c5350024edc173"
    );
  } else if (searchItem === "Bitter leaf") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e206c5350024edc174"
    );
  } else if (searchItem === "Cabbage") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e406c5350024edc175"
    );
  } else if (searchItem === "Cassava 2") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e406c5350024edc176"
    );
  } else if (searchItem === "Cassava") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e606c5350024edc177"
    );
  } else if (searchItem === "Cat fish") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e606c5350024edc178"
    );
  } else if (searchItem === "Chicken") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e806c5350024edc179"
    );
  } else if (searchItem === "Chicken breast") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e806c5350024edc17a"
    );
  } else if (searchItem === "Chicken3") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e906c5350024edc17b"
    );
  } else if (searchItem === "Chilli pepper") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385e906c5350024edc17c"
    );
  } else if (searchItem === "Coco pops") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385eb06c5350024edc17d"
    );
  } else if (searchItem === "Cocoa powder 2") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385ed06c5350024edc17f"
    );
  } else if (searchItem === "Cocoa powder") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385ee06c5350024edc181"
    );
  } else if (searchItem === "Colouring") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f006c5350024edc183"
    );
  } else if (searchItem === "Cornflakes 350g") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f006c5350024edc184"
    );
  } else if (searchItem === "Cornflakes") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f006c5350024edc184"
    );
  } else if (searchItem === "Cow meat") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f106c5350024edc185"
    );
  } else if (searchItem === "Cray fish") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f206c5350024edc186"
    );
  } else if (searchItem === "Cucumber") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f306c5350024edc187"
    );
  } else if (searchItem === "Egg") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f306c5350024edc188"
    );
  } else if (searchItem === "Flavours") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f706c5350024edc18d"
    );
  } else if (searchItem === "Flavour") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f706c5350024edc18d"
    );
  } else if (searchItem === "Fried rice spice") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f906c5350024edc18f"
    );
  } else if (searchItem === "Garlic") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385f906c535005f4385e106c5350024edc17224edc190"
    );
  } else if (searchItem === "Ginger tea") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385fb06c5350024edc191"
    );
  } else if (searchItem === "Frosties home") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385fd06c5350024edc192"
    );
  } else if (searchItem === "Gizzard") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385fe06c5350024edc194"
    );
  } else if (searchItem === "Golden morn") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f4385ff06c5350024edc195"
    );
  } else if (searchItem === "Green beans") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860006c5350024edc196"
    );
  } else if (searchItem === "Green pepper") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860206c5350024edc199"
    );
  } else if (searchItem === "Honey beans") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860506c5350024edc19d"
    );
  } else if (searchItem === "Icing sugar") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860606c5350024edc19e"
    );
  } else if (searchItem === "Irish potato") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860606c5350024edc19f"
    );
  } else if (searchItem === "Jollof rice spice") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860806c5350024edc1a1"
    );
  } else if (searchItem === "Jelly") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860906c5350024edc1a2"
    );
  } else if (searchItem === "Lettuce") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860906c5350024edc1a3"
    );
  } else if (searchItem === "Kilishi") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860b06c5350024edc1a4"
    );
  } else if (searchItem === "Lard") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860b06c5350024edc1a5"
    );
  } else if (searchItem === "Lipton") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860c06c5350024edc1a6"
    );
  } else if (searchItem === "Liver") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860d06c5350024edc1a7"
    );
  } else if (searchItem === "Local rice") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860e06c5350024edc1a8"
    );
  } else if (searchItem === "rice") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860e06c5350024edc1a8"
    );
  } else if (searchItem === "Maggi") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43860f06c5350024edc1aa"
    );
  } else if (searchItem === "Milk") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861006c5350024edc1ab"
    );
  } else if (searchItem === "Milo crunches") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861106c5350024edc1ad"
    );
  } else if (searchItem === "Milo") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861306c5350024edc1af"
    );
  } else if (searchItem === "Mint leaf") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861406c5350024edc1b1"
    );
  } else if (searchItem === "Mutton") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861506c5350024edc1b2"
    );
  } else if (searchItem === "Nutmeg") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861606c5350024edc1b3"
    );
  } else if (searchItem === "Okra") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861806c5350024edc1b6"
    );
  } else if (searchItem === "Onions") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861906c5350024edc1b7"
    );
  } else if (searchItem === "Onion") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861906c5350024edc1b7"
    );
  } else if (searchItem === "Plantain-flour") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861a06c5350024edc1b9"
    );
  } else if (searchItem === "Ponmo") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861b06c5350024edc1ba"
    );
  } else if (searchItem === "Pork") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861c06c5350024edc1bb"
    );
  } else if (searchItem === "Plantain") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861c06c5350024edc1bc"
    );
  } else if (searchItem === "Poundo yam") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861e06c5350024edc1bd"
    );
  } else if (searchItem === "Prawn") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861f06c5350024edc1bf"
    );
  } else if (searchItem === "Rabbit") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43861f06c5350024edc1c0"
    );
  } else if (searchItem === "Red Yeast Coffee") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862006c5350024edc1c1"
    );
  } else if (searchItem === "Rice krispies") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862006c5350024edc1c2"
    );
  } else if (searchItem === "Salt") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862206c5350024edc1c4"
    );
  } else if (searchItem === "Semovita") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862306c5350024edc1c5"
    );
  } else if (searchItem === "Shrimp") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862406c5350024edc1c7"
    );
  } else if (searchItem === "Snail") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862606c5350024edc1c9"
    );
  } else if (searchItem === "Sweet potato") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862706c5350024edc1cb"
    );
  } else if (searchItem === "Spinach") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862706c5350024edc1cc"
    );
  } else if (searchItem === "Titus fish") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862b06c5350024edc1ce"
    );
  } else if (searchItem === "Tilapia fish") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862b06c5350024edc1cf"
    );
  } else if (searchItem === "Sugar") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862d06c5350024edc1d2"
    );
  } else if (searchItem === "Tomatoes") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862e06c5350024edc1d3"
    );
  } else if (searchItem === "Tumeric") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862f06c5350024edc1d4"
    );
  } else if (searchItem === "Tuna fish") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43862f06c5350024edc1d5"
    );
  } else if (searchItem === "Turkey") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863206c5350024edc1d8"
    );
  } else if (searchItem === "Veal") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863206c5350024edc1d9"
    );
  } else if (searchItem === "Water leaf") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863306c5350024edc1da"
    );
  } else if (searchItem === "Yale biscuit") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863506c5350024edc1dc"
    );
  } else if (searchItem === "White beans") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863506c5350024edc1dd"
    );
  } else if (searchItem === "Thyme") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863506c5350024edc1de"
    );
  } else if (searchItem === "Whole milk") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863606c5350024edc1df"
    );
  } else if (searchItem === "Yam flour") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863606c5350024edc1e0"
    );
  } else if (searchItem === "Yam") {
    window.location.assign(
      "shop_detail_fullwidth.html?product=5f43863906c5350024edc1e4"
    );
  } else {
    window.location.assign("productNotAvailable.html");

    console.log("No or product Not available");

    //create product not found page
  }

  //initProductNames();
  //console.log(searchName);
});
