const manageProductDOM = document.getElementById("ManageProducts");


const manageProductItemTemplate = (foodListings) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html?product=${foodListings.id}">
                <img alt="product" src="${foodListings.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${foodListings.type}</h5>
            <h3 class="product-name">${foodListings.name}</h3>
            <h3 class="product-price">NGN ${foodListings.price}</h3>
            <div class="product-select">
                
                <button onclick="addToCart('${foodListings.id}','${foodListings.name}','${foodListings.type}','${foodListings.imageUrl}','${foodListings.price}')" class="add-to-cart round-icon-btn">
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

////////onclick="addToCart('${foodListings.id}','${foodListings.name}','${foodListings.type}','${foodListings.imageUrl}','${foodListings.price}')
let foodListings;
const fetchFoodList = async () => {
  const endpoint = "/food"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  res.payload.forEach((product) => {
      foodListings = {
      id: product._id,
      name: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
      productType: product.product_type,
      categoryType: product.category_type,
      shortDescription: product.short_description,

    };

    let htmlString = manageProductItemTemplate(foodListings);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    manageProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();



let AdminId = localStorage.getItem("AdminId");
console.log({ AdminId });

let adminToken = localStorage.getItem("adminToken");
console.log({ adminToken });

/*
//FROM FETCH FOOD ENDPOINT
//POST Create Food Listing http://intriobasket.pexceptos.com/api/food/create
const createFoodListing = (foodListings) => {
  console.log("updatecart function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  var raw = JSON.stringify({
    food_product_name: "hh",
    product_type: "jj",
    category_type: "ll",
    short_description: "ll",
    long_description: "ll",
    cost: "87777",
    image_link: "image",
    in_stock_status: "Yes",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `http://intriobasket.pexceptos.com/api/food/create`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Update Food Listing[Admin] ");
};

//GET Query foodlisting by category http://intriobasket.pexceptos.com/api/food/get?food_product_name=Cocoa powder

//GET Get All Food Listing http://intriobasket.pexceptos.com/api/food

//PUT Update Food Listing[Admin] http://intriobasket.pexceptos.com/api/food/update/5f838f85fef8090024a53638
const updateFoodListing = (name, imageUrl, price) => {
  console.log("updatecart function");
  var numbers = 1;
  var name = name;
  var price = price;
  var imageUrl = imageUrl;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${adminToken}`);

  var raw = JSON.stringify({
    food_product_name: "hh",
    product_type: "jj",
    category_type: "ll",
    short_description: "ll",
    long_description: "ll",
    cost: "87777",
    image_link: "image",
    in_stock_status: "Yes",
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `http://intriobasket.pexceptos.com/api/food/update/${AdminId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Update Food Listing[Admin] ");
};

//DEL Delete Food Listing[Admin] http://intriobasket.pexceptos.com/api/food/5f838f85fef8090024a53638

const updateCart = (name, imageUrl, price) => {
  console.log("updatecart function");
  var numbers = 1;
  var name = name;
  var price = price;
  var imageUrl = imageUrl;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-admin-token", `${adminToken}`);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://intriobasket.pexceptos.com/api/food/${AdminId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("Delete Food Listing[Admin]");
};












//ALL FOODLISTING 




{
    "status": "OK",
    "message": "All food listings fetched successfully",
    "payload": [
        {
            "_id": "5f4385e106c5350024edc171",
            "food_product_name": "Baking powder",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid",
            "long_description": "Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:25.784Z",
            "updatedAt": "2020-08-24T09:18:25.784Z",
            "__v": 0
        },
        {
            "_id": "5f4385e106c5350024edc172",
            "food_product_name": "Ayoola Poundo yam",
            "product_type": "FLOURS",
            "category_type": "FLOURS",
            "short_description": "",
            "long_description": "",
            "cost": 900,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FAyoola%20Poundo%20yam%20.jpg?alt=media&token=0ed5878b-a26c-4166-a0ab-fd4dfd7f54f5",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:25.811Z",
            "updatedAt": "2020-08-24T09:18:25.811Z",
            "__v": 0
        },
        {
            "_id": "5f4385e206c5350024edc173",
            "food_product_name": "Beans flour",
            "product_type": "FLOURS",
            "category_type": "FLOURS",
            "short_description": "Beans flour is made from sweet Oloyin beans produced in the plain of Maiduguri in Sahel region of Nigeria",
            "long_description": "Beans flour is made from sweet Oloyin beans produced in the plain of Maiduguri in Sahel region of Nigeria. Beans is a high protein diet and rich in fibre. Bean flour can be blended with wheat flour for baking application.� It also serves as a thickener for soups, sauces and gravies.",
            "cost": 2200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBeans%20flour.jpeg?alt=media&token=08bb7678-30b2-4eac-855e-04d9f535b612",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:26.614Z",
            "updatedAt": "2020-08-24T09:18:26.614Z",
            "__v": 0
        },
        {
            "_id": "5f4385e206c5350024edc174",
            "food_product_name": "Bitter leaf",
            "product_type": "VEGETABLES/LEAFY",
            "category_type": "VEGETABLES/LEAFY",
            "short_description": "Bitter leaf also helps to cleanse such vital organs of the body like the liver and the kidney",
            "long_description": "Bitter leaf also helps to cleanse such vital organs of the body like the liver and the kidney. Bitter leaf is also used in the treatment of skin infections such as ringworm, rashes and eczema.",
            "cost": 420,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBitter%20leaf.jpg?alt=media&token=e2a0f4d9-f66a-416e-bb51-8487de6d57cc",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:26.624Z",
            "updatedAt": "2020-08-24T09:18:26.624Z",
            "__v": 0
        },
        {
            "_id": "5f4385e406c5350024edc175",
            "food_product_name": "Cabbage",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "It May Help Keep Inflammation in Check. Cabbage Is Packed With Vitamin C",
            "long_description": "It May Help Keep Inflammation in Check. Cabbage Is Packed With Vitamin C. It Helps Improve Digestion. May Help Keep Your Heart Healthy. May Lower Blood Pressure. Could Help Lower Cholesterol Levels. Cabbage Is an Excellent Source of Vitamin K.",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCabbage.jpg?alt=media&token=6e282a59-3ff3-4c81-9ecf-1f81544c8354",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:28.339Z",
            "updatedAt": "2020-08-24T09:18:28.339Z",
            "__v": 0
        },
        {
            "_id": "5f4385e406c5350024edc176",
            "food_product_name": "Cassava 2",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Cassava�is a root vegetable. It is the underground part of the�cassava�shrub, which has the Latin name Manihot esculenta. Like potatoes and yams, it is a tuber crop",
            "long_description": "Cassava�is a root vegetable. It is the underground part of the�cassava�shrub, which has the Latin name Manihot esculenta. Like potatoes and yams, it is a tuber crop.�Cassava�roots have a similar shape to sweet potatoes. People can also eat the leaves of the�cassava�plant. Cassava be prepared in different nice ways.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCassava%202.jpg?alt=media&token=f87c5f65-09fb-4d8e-93b8-c6da10d8dd95",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:28.514Z",
            "updatedAt": "2020-08-24T09:18:28.514Z",
            "__v": 0
        },
        {
            "_id": "5f4385e606c5350024edc177",
            "food_product_name": "Cassava",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Cassava�is a root vegetable. It is the underground part of the�cassava�shrub, which has the Latin name Manihot esculenta. Like potatoes and yams, it is a tuber crop",
            "long_description": "Cassava�is a root vegetable. It is the underground part of the�cassava�shrub, which has the Latin name Manihot esculenta. Like potatoes and yams, it is a tuber crop.�Cassava�roots have a similar shape to sweet potatoes. People can also eat the leaves of the�cassava�plant. Cassava be prepared in different nice ways.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCassava.jpg?alt=media&token=ddb5be5f-d7a0-4a07-97a0-450d55ddca12",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:30.052Z",
            "updatedAt": "2020-08-24T09:18:30.052Z",
            "__v": 0
        },
        {
            "_id": "5f4385e606c5350024edc178",
            "food_product_name": "Cat fish 2",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Catfish is a type of fish that belongs to the group of ray-finned fish",
            "long_description": "Catfish is a type of fish that belongs to the group of ray-finned fish. Catfish inhabits freshwater ecosystems such as rivers and streams. Catfish are one of the most farmed types of fish (their meat is consumed as delicacy around the world). Catfish are low in calories and nutrient dense. What�s more, they pack plenty of protein, omega-3 fatty acids, and vitamin B12.",
            "cost": 2500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCat%20fish%202.jpg?alt=media&token=45ab4c02-4c40-4e87-b35e-aa42b9047de4",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:30.339Z",
            "updatedAt": "2020-08-24T09:18:30.339Z",
            "__v": 0
        },
        {
            "_id": "5f4385e806c5350024edc179",
            "food_product_name": "Chicken",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average",
            "long_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average. Chicken was one of the most common meats available in the Middle Ages. It's a great source of lean, low fat protein which contribute to muscle growth and development. Chicken Provides Vitamins and Minerals Involved in Brain Function. Chicken Promotes Heart Health, Chicken Strengthens Bones.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken.jpg?alt=media&token=5854d4ee-8fa0-4a1f-aee2-268794fb9383",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:32.006Z",
            "updatedAt": "2020-08-24T09:18:32.006Z",
            "__v": 0
        },
        {
            "_id": "5f4385e806c5350024edc17a",
            "food_product_name": "Chicken breast",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average",
            "long_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average. Chicken was one of the most common meats available in the Middle Ages. It's a great source of lean, low fat protein which contribute to muscle growth and development. Chicken Provides Vitamins and Minerals Involved in Brain Function. Chicken Promotes Heart Health, Chicken Strengthens Bones.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken%20breast.jpg?alt=media&token=2419b104-b7a0-4c83-b2b1-7a51176c8177",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:32.281Z",
            "updatedAt": "2020-08-24T09:18:32.281Z",
            "__v": 0
        },
        {
            "_id": "5f4385e906c5350024edc17b",
            "food_product_name": "Chicken3",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average",
            "long_description": "Chicken meat is composed of 70% water, 20% proteins, and 5% lipids, on average. Chicken was one of the most common meats available in the Middle Ages. It's a great source of lean, low fat protein which contribute to muscle growth and development. Chicken Provides Vitamins and Minerals Involved in Brain Function. Chicken Promotes Heart Health, Chicken Strengthens Bones.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChicken3.jpg?alt=media&token=aba72a85-a01f-4541-abab-84b52e78b000",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:33.737Z",
            "updatedAt": "2020-08-24T09:18:33.737Z",
            "__v": 0
        },
        {
            "_id": "5f4385e906c5350024edc17c",
            "food_product_name": "Chilli pepper",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Chili pepper boost your metabolism. The capsaicin in cayenne peppers has metabolism-boosting properties",
            "long_description": "Chili pepper boost your metabolism. The capsaicin in cayenne peppers has metabolism-boosting properties. Can Help Reduce Hunger. Also lowers Blood Pressure. May aid digestive health . It helps relieve pain. Improves Psoriasis. It reduces cancer risk. Easy to Add to Your Diet.",
            "cost": 1400,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FChilli%20pepper.jpg?alt=media&token=a9cb54f4-979d-4d10-ae68-79aa194d3158",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:33.942Z",
            "updatedAt": "2020-08-24T09:18:33.942Z",
            "__v": 0
        },
        {
            "_id": "5f4385eb06c5350024edc17d",
            "food_product_name": "Coco pops",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Coco pops is a cereal food made from rice and are coated with cocoa and sugar",
            "long_description": "Coco pops is a cereal food made from rice and are coated with cocoa and sugar. They are very nutitious and delicious. High in energy and protein and serves as a good choice for breakfast.",
            "cost": 1250,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCoco%20pops.jpg?alt=media&token=ab74e90c-4cf8-4c1d-869b-47d88e3920df",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:35.084Z",
            "updatedAt": "2020-08-24T09:18:35.084Z",
            "__v": 0
        },
        {
            "_id": "5f4385eb06c5350024edc17e",
            "food_product_name": "Coco pops",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Coco pops is a cereal food made from rice and are coated with cocoa and sugar",
            "long_description": "Coco pops is a cereal food made from rice and are coated with cocoa and sugar. They are very nutitious and delicious. High in energy and protein and serves as a good choice for breakfast.",
            "cost": 1250,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCoco%20pops.jpeg?alt=media&token=9f3a1439-e641-4329-8260-d58088e0049b",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:35.422Z",
            "updatedAt": "2020-08-24T09:18:35.422Z",
            "__v": 0
        },
        {
            "_id": "5f4385ed06c5350024edc17f",
            "food_product_name": "Cocoa powder 2",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Cocoa powder is made by crushing cocoa beans and removing the fat or cocoa butter.",
            "long_description": "Cocoa powder is made by crushing cocoa beans and removing the fat or cocoa butter. Cocoa is rich in polyphenols which have antioxidant effects and also help reduce inflammation. Cocoa powder is also rich in flavanols, which lower blood pressure. Cocoa also has cancer-protective properties.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCocoa%20powder%202.jpg?alt=media&token=2c7df920-971d-4259-9258-197d62653291",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:37.074Z",
            "updatedAt": "2020-08-24T09:18:37.074Z",
            "__v": 0
        },
        {
            "_id": "5f4385ed06c5350024edc180",
            "food_product_name": "Cocoa powder 2",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "The powdery remains of chocolate liquor after cocoa butter is removed",
            "long_description": "The powdery remains of chocolate liquor after cocoa butter is removed; used in baking and in low fat and low calorie recipes and as a flavoring for ice cream.",
            "cost": 850,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCocoa%20powder%202.jpg?alt=media&token=1031ea27-4e25-4739-b5db-01c42b9e68a6",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:37.681Z",
            "updatedAt": "2020-08-24T09:18:37.681Z",
            "__v": 0
        },
        {
            "_id": "5f4385ee06c5350024edc181",
            "food_product_name": "Cocoa powder",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Cocoa powder is made by crushing cocoa beans and removing the fat or cocoa butter.",
            "long_description": "Cocoa powder is made by crushing cocoa beans and removing the fat or cocoa butter. Cocoa is rich in polyphenols which have antioxidant effects and also help reduce inflammation. Cocoa powder is also rich in flavanols, which lower blood pressure. Cocoa also has cancer-protective properties.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCocoa%20powder.jpg?alt=media&token=559bf635-aeed-4dff-be67-b67071c4b4c3",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:38.868Z",
            "updatedAt": "2020-08-24T09:18:38.868Z",
            "__v": 0
        },
        {
            "_id": "5f4385ef06c5350024edc182",
            "food_product_name": "Cocoa powder",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "The powdery remains of chocolate liquor after cocoa butter is removed",
            "long_description": "The powdery remains of chocolate liquor after cocoa butter is removed; used in baking and in low fat and low calorie recipes and as a flavoring for ice cream.",
            "cost": 850,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCocoa%20powder.jpg?alt=media&token=d2ab9232-5451-449f-b3e8-2b60be576f34",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:39.448Z",
            "updatedAt": "2020-08-24T09:18:39.448Z",
            "__v": 0
        },
        {
            "_id": "5f4385f006c5350024edc183",
            "food_product_name": "Colouring",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Most of the colours contain natural colouring derived from natural sources",
            "long_description": "Most of the colours contain natural colouring derived from natural sources. The dye is neutral in taste and scent. Holds a bright colour over time, as well as during heating and freezing.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FColouring.jpg?alt=media&token=00efab12-8112-4d2e-ae99-29796bbc8831",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:40.131Z",
            "updatedAt": "2020-08-24T09:18:40.131Z",
            "__v": 0
        },
        {
            "_id": "5f4385f006c5350024edc184",
            "food_product_name": "Cornflakes 350g",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Cornflakes is a kind of breakfast cereal made from corn. Cornflakes is  mostly consumed by mixing it in a bowl with milk and sugar. It is low in fat and gives good satiety",
            "long_description": "Cornflakes is a kind of breakfast cereal made from corn. Cornflakes is  mostly consumed by mixing it in a bowl with milk and sugar. It is low in fat and gives good satiety. Cornflakes increases mental alertness in children and also gives them strength.",
            "cost": 800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCornflakes%20350g.jpg?alt=media&token=00b21d79-c001-4559-bbde-790d6ee823d3",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:40.902Z",
            "updatedAt": "2020-08-24T09:18:40.902Z",
            "__v": 0
        },
        {
            "_id": "5f4385f106c5350024edc185",
            "food_product_name": "Cow meat",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": "Red meat has high amounts of protein, which helps promote muscle growth, and vitamin B12 to make red blood cells",
            "long_description": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Red meat has high amounts of protein, which helps promote muscle growth, and vitamin B12 to make red blood cells. A serving of red meat is also a good source of zinc, which can help the body produce testosterone, and selenium, a powerful antioxidant. Plus, red meat is rich in iron.",
            "cost": 1800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCow%20meat.jpg?alt=media&token=02a3de16-4453-4c99-a977-9bef001a8618",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:41.695Z",
            "updatedAt": "2020-08-24T09:18:41.695Z",
            "__v": 0
        },
        {
            "_id": "5f4385f206c5350024edc186",
            "food_product_name": "Cray fish-2675238__340",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Crayfish is packed with high-quality protein. A 5-ounce serving of crawfish contains close to 25 grams of protein",
            "long_description": "Crayfish is packed with high-quality protein. A 5-ounce serving of crawfish contains close to 25 grams of protein. Crawfish are low in fat and contain only trace amounts of carbohydrates. Crawfish are high in B Vitamins and minerals such as Calcium, Magnesium, Iron, Zinc and Phosphorous. A 3-ounce serving of cooked crawfish contains 70 calories and 14 grams of protein.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCray%20fish-2675238__340.jpg?alt=media&token=92371f7b-cde5-440b-bdda-4fd0067f5417",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:42.341Z",
            "updatedAt": "2020-08-24T09:18:42.341Z",
            "__v": 0
        },
        {
            "_id": "5f4385f306c5350024edc187",
            "food_product_name": "Cucumber",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "It's High in Nutrients. Cucumbers are low in calories but high in many important vitamins and minerals",
            "long_description": "It's High in Nutrients. Cucumbers are low in calories but high in many important vitamins and minerals. It Contains Antioxidants. It Promotes Hydration. It May Aid in Weight Loss. It May Lower Blood Sugar. It Could Promote Regularity. Easy to Add to Your Diet.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FCucumber.jpg?alt=media&token=049a6ae1-0590-4598-a269-ce760ae6bce8",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:43.420Z",
            "updatedAt": "2020-08-24T09:18:43.420Z",
            "__v": 0
        },
        {
            "_id": "5f4385f306c5350024edc188",
            "food_product_name": "Egg 2",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 1100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FEgg%202.jpg?alt=media&token=16d5f2c8-8373-4956-9294-69eba86fc9fb",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:43.739Z",
            "updatedAt": "2020-08-24T09:18:43.739Z",
            "__v": 0
        },
        {
            "_id": "5f4385f406c5350024edc189",
            "food_product_name": "Egg 3",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 1100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FEgg%203.jpg?alt=media&token=69d8e4d1-044d-402d-bc58-bfc4e1024891",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:44.735Z",
            "updatedAt": "2020-08-24T09:18:44.735Z",
            "__v": 0
        },
        {
            "_id": "5f4385f506c5350024edc18a",
            "food_product_name": "Egg",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 1100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FEgg.jpg?alt=media&token=8b15d0d7-20f3-4a33-a1e4-78eb8b1f8a88",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:45.638Z",
            "updatedAt": "2020-08-24T09:18:45.638Z",
            "__v": 0
        },
        {
            "_id": "5f4385f606c5350024edc18b",
            "food_product_name": "Eggs ",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 1100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FEggs%20.jpg?alt=media&token=8d223f59-7759-4e27-9ece-f88ca3131c15",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:46.284Z",
            "updatedAt": "2020-08-24T09:18:46.284Z",
            "__v": 0
        },
        {
            "_id": "5f4385f706c5350024edc18c",
            "food_product_name": "Eggs",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 1100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FEggs.jpg?alt=media&token=42d206bc-9ab3-4163-9fa2-1ccde360a33d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:47.087Z",
            "updatedAt": "2020-08-24T09:18:47.087Z",
            "__v": 0
        },
        {
            "_id": "5f4385f706c5350024edc18d",
            "food_product_name": "Flavours 2",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Manufactured flavors typically contain the aroma, taste and sensate components that make a food more desirable",
            "long_description": "Manufactured flavors typically contain the aroma, taste and sensate components that make a food more desirable. For example: A cookie or cake mix manufacturer may want to add a butter, almond or vanilla flavor to add character.",
            "cost": 800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FFlavours%202.jpg?alt=media&token=943cfcb3-2d97-4b27-a5fb-ad7a4c37d4b9",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:47.798Z",
            "updatedAt": "2020-08-24T09:18:47.798Z",
            "__v": 0
        },
        {
            "_id": "5f4385f806c5350024edc18e",
            "food_product_name": "Flavours",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Manufactured flavors typically contain the aroma, taste and sensate components that make a food more desirable",
            "long_description": "Manufactured flavors typically contain the aroma, taste and sensate components that make a food more desirable. For example: A cookie or cake mix manufacturer may want to add a butter, almond or vanilla flavor to add character.",
            "cost": 800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FFlavours.jpg?alt=media&token=5e5ff6d6-d707-41c3-a0bf-79ecae806a8d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:48.370Z",
            "updatedAt": "2020-08-24T09:18:48.370Z",
            "__v": 0
        },
        {
            "_id": "5f4385f906c5350024edc18f",
            "food_product_name": "Fried rice spice",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "This is the seasoning ingredient used in cooking fried rice.",
            "long_description": "This is the seasoning ingredient used in cooking fried rice.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FFried%20rice%20spice.jpg?alt=media&token=6a41064c-17f9-435c-9a39-cf1d65907925",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:49.371Z",
            "updatedAt": "2020-08-24T09:18:49.371Z",
            "__v": 0
        },
        {
            "_id": "5f4385f906c5350024edc190",
            "food_product_name": "Garlic",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Garlic (Allium sativa ), is a plant with long, flat grasslike leaves and a papery hood around the flowers",
            "long_description": "Garlic (Allium sativa ), is a plant with long, flat grasslike leaves and a papery hood around the flowers. ... The stalk rises directly from the flower bulb, which is the part of the plant used as food and medicine. The bulb is made up of many smaller bulbs covered with a papery skin known as cloves. Currently, garlic is widely used for several conditions linked to the blood system and heart, including atherosclerosis (hardening of the arteries).",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGarlic.jpg?alt=media&token=71019b80-0605-4db6-bbe4-342a03cdcc39",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:49.872Z",
            "updatedAt": "2020-08-24T09:18:49.872Z",
            "__v": 0
        },
        {
            "_id": "5f4385fb06c5350024edc191",
            "food_product_name": "Ginger tea",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Ginger tea gotten from ginger root is very beneficial to the health.",
            "long_description": "Ginger tea gotten from ginger root is very beneficial to the health. Ginger has high levels of antioxidants, helps to relieve nausea, protects against heart disease, acts as a pain relief and supports the immune system.",
            "cost": 250,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGinger%20tea.jpg?alt=media&token=b6e218be-4fcb-4a16-924d-bf09ced6375d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:51.762Z",
            "updatedAt": "2020-08-24T09:18:51.762Z",
            "__v": 0
        },
        {
            "_id": "5f4385fd06c5350024edc192",
            "food_product_name": "Frosties home",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Made from our classic Kellogg�s Corn Flakes but with a delicious frosted coating, Frosties is truly a tasty start to the day",
            "long_description": "Made from our classic Kellogg�s Corn Flakes but with a delicious frosted coating, Frosties is truly a tasty start to the day. As a source of vitamin D, B vitamins and Iron, Frosties really are �Grrrreaat� in more ways than one.",
            "cost": 1600,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FFrosties%20home.png?alt=media&token=c9c10391-6fac-49f8-9ed7-b01d2c138c46",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:53.014Z",
            "updatedAt": "2020-08-24T09:18:53.014Z",
            "__v": 0
        },
        {
            "_id": "5f4385fd06c5350024edc193",
            "food_product_name": "Ginger tea",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Ginger, Zingiber officinale, is an erect, herbaceous perennial plant in the family Zingiberaceae grown for its edible rhizome (underground stem) which is widely used as a spice",
            "long_description": "Ginger, Zingiber officinale, is an erect, herbaceous perennial plant in the family Zingiberaceae grown for its edible rhizome (underground stem) which is widely used as a spice. The rhizome is brown, with a corky outer layer and pale-yellow scented center.Ginger can soothe an upset stomach, help with menstrual cramps, and contribute toward weight loss.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGinger%20tea.jpg?alt=media&token=3c8f18cc-65cb-4fe8-9f15-42edc5376e83",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:53.605Z",
            "updatedAt": "2020-08-24T09:18:53.605Z",
            "__v": 0
        },
        {
            "_id": "5f4385fe06c5350024edc194",
            "food_product_name": "Gizzard",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "The gizzard is a muscle in the stomach of birds, and it is used in the process of breaking down food particles for digestion, and it is definitely edible and delicious",
            "long_description": "The gizzard is a muscle in the stomach of birds, and it is used in the process of breaking down food particles for digestion, and it is definitely edible and delicious! The gizzard is actually one of the most nutritious parts of chicken, despite the prominence of other poultry meat selections. It is high in protein. Gizzards are also a good source of vitamins. One serving fulfills 25 percent of your RDI of B12, which helps prevent anemia and is important for brain function. Despite their high protein and vitamin content, gizzards are low in fat.",
            "cost": 1600,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGizzard.jpg?alt=media&token=32d25cb7-a5b9-4c27-8f41-5c3a714bb3c4",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:54.549Z",
            "updatedAt": "2020-08-24T09:18:54.549Z",
            "__v": 0
        },
        {
            "_id": "5f4385ff06c5350024edc195",
            "food_product_name": "Golden morn ",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Golden morn cereal brand is a nutritious, delicious and filling cereal made from locally sourced whole grains. Golden morn contains over 50% of whole grains in each packand is fortified with essential nutrients such as vitamin A and iron",
            "long_description": "Golden morn cereal brand is a nutritious, delicious and filling cereal made from locally sourced whole grains. Golden morn contains over 50% of whole grains in each packand is fortified with essential nutrients such as vitamin A and iron. Golden morn can be taking with milk or milo mixed with water, with or without sugar it tastes good.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGolden%20morn%20.jpg?alt=media&token=89bab744-e4ee-400d-a76a-0d156e9419d2",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:55.231Z",
            "updatedAt": "2020-08-24T09:18:55.231Z",
            "__v": 0
        },
        {
            "_id": "5f43860006c5350024edc196",
            "food_product_name": "Green beans 3",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Not only are green beans a nice, crunchy, low-calorie food but also they provide many key nutrients",
            "long_description": "Not only are green beans a nice, crunchy, low-calorie food but also they provide many key nutrients. Young, tender green beans are a good source of vitamin C, dietary fiber, folate, vitamin K and silicon (needed for healthy bones, skin, and hair).",
            "cost": 250,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20beans%203.jpg?alt=media&token=dbf46c29-aa93-4632-bc30-01da80cc5b97",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:56.384Z",
            "updatedAt": "2020-08-24T09:18:56.384Z",
            "__v": 0
        },
        {
            "_id": "5f43860106c5350024edc197",
            "food_product_name": "Golden morn",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "Golden morn cereal brand is a nutritious, delicious and filling cereal made from locally sourced whole grains. Golden morn contains over 50% of whole grains in each packand is fortified with essential nutrients such as vitamin A and iron",
            "long_description": "Golden morn cereal brand is a nutritious, delicious and filling cereal made from locally sourced whole grains. Golden morn contains over 50% of whole grains in each packand is fortified with essential nutrients such as vitamin A and iron. Golden morn can be taking with milk or milo mixed with water, with or without sugar it tastes good.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGolden%20morn.jpg?alt=media&token=816e991e-8cdf-46be-b238-f5de76eaadb6",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:57.075Z",
            "updatedAt": "2020-08-24T09:18:57.075Z",
            "__v": 0
        },
        {
            "_id": "5f43860206c5350024edc198",
            "food_product_name": "Green beans",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Not only are green beans a nice, crunchy, low-calorie food but also they provide many key nutrients",
            "long_description": "Not only are green beans a nice, crunchy, low-calorie food but also they provide many key nutrients. Young, tender green beans are a good source of vitamin C, dietary fiber, folate, vitamin K and silicon (needed for healthy bones, skin, and hair).",
            "cost": 250,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20beans.jpg?alt=media&token=2a3e04d2-7d6b-48de-a134-0237c45fc726",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:58.047Z",
            "updatedAt": "2020-08-24T09:18:58.047Z",
            "__v": 0
        },
        {
            "_id": "5f43860206c5350024edc199",
            "food_product_name": "Green pepper 2",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids",
            "long_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids. For this reason, they may have several health benefits, such as improved eye health and reduced risk of several chronic diseases. All in all, bell peppers are an excellent addition to a healthy diet.",
            "cost": 240,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20pepper%202.jpg?alt=media&token=1eae3d08-6927-4001-8aca-28a2abd46c37",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:58.699Z",
            "updatedAt": "2020-08-24T09:18:58.699Z",
            "__v": 0
        },
        {
            "_id": "5f43860306c5350024edc19a",
            "food_product_name": "Green pepper",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids",
            "long_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids. For this reason, they may have several health benefits, such as improved eye health and reduced risk of several chronic diseases. All in all, bell peppers are an excellent addition to a healthy diet.",
            "cost": 240,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20pepper.jpeg?alt=media&token=ac88dd28-57c2-4357-ba6b-755b6a7d9a8d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:18:59.506Z",
            "updatedAt": "2020-08-24T09:18:59.506Z",
            "__v": 0
        },
        {
            "_id": "5f43860406c5350024edc19b",
            "food_product_name": "Green pepper",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids",
            "long_description": "Green peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids. For this reason, they may have several health benefits, such as improved eye health and reduced risk of several chronic diseases. All in all, bell peppers are an excellent addition to a healthy diet.",
            "cost": 240,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20pepper.jpg?alt=media&token=4751b8aa-3fa3-4f36-ba7c-3bd0a2f295b0",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:00.089Z",
            "updatedAt": "2020-08-24T09:19:00.089Z",
            "__v": 0
        },
        {
            "_id": "5f43860406c5350024edc19c",
            "food_product_name": "Green tea",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Green tea is rich in nutrients that help improve the health",
            "long_description": "Green tea is rich in nutrients that help improve the health. A few benefits of green tea invlude fat burning, Improvement of brain function, possesses antioxidants that hels reduce risk for some cancers, also reduces bad breath.",
            "cost": 450,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FGreen%20tea.jpg?alt=media&token=24ad6db0-1af2-4163-a9d7-0723d78b8233",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:00.850Z",
            "updatedAt": "2020-08-24T09:19:00.850Z",
            "__v": 0
        },
        {
            "_id": "5f43860506c5350024edc19d",
            "food_product_name": "Honey beans",
            "product_type": "GRAINS",
            "category_type": "GRAINS",
            "short_description": "These beans of Nigerian origin is a naturally sweeter version of black eyed peas",
            "long_description": "These beans of Nigerian origin is a naturally sweeter version of black eyed peas. It has a unique lightly sweet taste that works when cooked by itself or in complicated West African recipes like Moin-Moin (Bean cakes) or Akara (Bean Fritters). It helps lower cholesterol thereby lowering risk of heart disease. Honey Beans also contains potassium (for the proper function of all cells, tissues and organs in the body).",
            "cost": null,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FHoney%20beans.jpg?alt=media&token=74f95c78-9aff-44c5-a7e3-54624cf5b320",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:01.577Z",
            "updatedAt": "2020-08-24T09:19:01.577Z",
            "__v": 0
        },
        {
            "_id": "5f43860606c5350024edc19e",
            "food_product_name": "Icing sugar",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Powdered sugar, also called confectioners' sugar, 10X sugar or icing sugar, is a finely ground sugar produced by milling granulated sugar into a powdered state",
            "long_description": "Powdered sugar, also called confectioners' sugar, 10X sugar or icing sugar, is a finely ground sugar produced by milling granulated sugar into a powdered state.",
            "cost": 900,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FIcing%20sugar.jpg?alt=media&token=90753f5d-d090-44f6-a88e-4e414f64e021",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:02.294Z",
            "updatedAt": "2020-08-24T09:19:02.294Z",
            "__v": 0
        },
        {
            "_id": "5f43860606c5350024edc19f",
            "food_product_name": "Irish potato 4",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Irish potatoes are small sized tubers in the potato family, they can be prepared in many different ways a popular preparation is the chips in chicken and chips, very tasty and highly nutritious",
            "long_description": "Irish potatoes are small sized tubers in the potato family, they can be prepared in many different ways a popular preparation is the chips in chicken and chips, very tasty and highly nutritious. Irish potatoes are packed with nutrients, they posses flavonoids, carotenids and phenolic acids, these acts as antioxidants and are very advantageous to the healt. irish potatoes improve blood sugar control and also improve digestive health amongst many other benefits.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FIrish%20potato%204.jpg?alt=media&token=ebc01e35-d433-49bb-a2ce-b971e68368b5",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:02.784Z",
            "updatedAt": "2020-08-24T09:19:02.784Z",
            "__v": 0
        },
        {
            "_id": "5f43860706c5350024edc1a0",
            "food_product_name": "Irish potato",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Irish potatoes are small sized tubers in the potato family, they can be prepared in many different ways a popular preparation is the chips in chicken and chips, very tasty and highly nutritious",
            "long_description": "Irish potatoes are small sized tubers in the potato family, they can be prepared in many different ways a popular preparation is the chips in chicken and chips, very tasty and highly nutritious. Irish potatoes are packed with nutrients, they posses flavonoids, carotenids and phenolic acids, these acts as antioxidants and are very advantageous to the healt. irish potatoes improve blood sugar control and also improve digestive health amongst many other benefits.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FIrish%20potato.jpg?alt=media&token=dd08fbff-67da-4f74-9c13-7669f7526899",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:03.873Z",
            "updatedAt": "2020-08-24T09:19:03.873Z",
            "__v": 0
        },
        {
            "_id": "5f43860806c5350024edc1a1",
            "food_product_name": "Jollof rice spice",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "This is the seasoning ingredient used in cooking jolof rice.",
            "long_description": "This is the seasoning ingredient used in cooking jolof rice.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FJollof%20rice%20spice.jpg?alt=media&token=2f9bce54-05c0-4ed1-bf15-b11c891c50ad",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:04.130Z",
            "updatedAt": "2020-08-24T09:19:04.130Z",
            "__v": 0
        },
        {
            "_id": "5f43860906c5350024edc1a2",
            "food_product_name": "Jelly",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Jelly is a sweet preserved form of fruit that's usually made with sugar",
            "long_description": "Jelly is a sweet preserved form of fruit that's usually made with sugar. Jelly is the close relative to jam and preserves � jelly is typically more translucent than its fruitier cousins, and is sometimes made with juice rather than whole pieces of fruit.",
            "cost": 750,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FJelly.jpg?alt=media&token=1374e155-005d-4850-b93f-cb312e82175e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:05.897Z",
            "updatedAt": "2020-08-24T09:19:05.897Z",
            "__v": 0
        },
        {
            "_id": "5f43860906c5350024edc1a3",
            "food_product_name": "Lettuce",
            "product_type": "VEGETABLES/LEAFY",
            "category_type": "VEGETABLES/LEAFY",
            "short_description": "Although it's low in fiber, it has a high water content, making it a refreshing choice during hot weather",
            "long_description": "Although it's low in fiber, it has a high water content, making it a refreshing choice during hot weather. It also provides calcium, potassium, vitamin C, and folate. The nutrients in iceberg lettuce can help you to meet the standard daily requirements for several vitamins and minerals.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLettuce.jpg?alt=media&token=0517b813-391f-470e-aaec-1f300fbe7d22",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:05.899Z",
            "updatedAt": "2020-08-24T09:19:05.899Z",
            "__v": 0
        },
        {
            "_id": "5f43860b06c5350024edc1a4",
            "food_product_name": "Kilishi",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": "Kilishi (also Kilichi) is the spicy Nigerian Beef Jerky, another gift from Northern Nigeria.",
            "long_description": "Kilishi (also Kilichi) is the spicy Nigerian Beef Jerky, another gift from Northern Nigeria. Cut the beef as thin as possible. It is usually as thin as 3mm. Kilishi is a rich source of protein,� contain no fats and therefore suitable for diabetics. It is good for snacking.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FKilishi.jpg?alt=media&token=8bfcaef9-efdd-4093-84b3-b89b4149b43b",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:07.468Z",
            "updatedAt": "2020-08-24T09:19:07.468Z",
            "__v": 0
        },
        {
            "_id": "5f43860b06c5350024edc1a5",
            "food_product_name": "Lard",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Lard is fat from a pig, in both its rendered and unrendered forms. It is a semi-soft white fat derived from fatty parts of the pig, with a high saturated fatty acid content and no trans fat",
            "long_description": "Lard is fat from a pig, in both its rendered and unrendered forms. It is a semi-soft white fat derived from fatty parts of the pig, with a high saturated fatty acid content and no trans fat. Many cuisines use lard as a cooking fat or shortening, or as a spread similar to butter. It has less saturated fat than butter. Yes, that's right lard has 20 percent less saturated fat than butter; it's also higher in monounsaturated fats, which are good for cardiovascular health.",
            "cost": 2200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLard.jpg?alt=media&token=43e296d6-674e-4516-bf8b-bc4b8f479737",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:07.489Z",
            "updatedAt": "2020-08-24T09:19:07.489Z",
            "__v": 0
        },
        {
            "_id": "5f43860c06c5350024edc1a6",
            "food_product_name": "Lipton",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Lipton is a brand of blacktea that comes in teabags, you prepare by dunking the tea bag in a hot cup of water and add sugar or milk to taste",
            "long_description": "Lipton is a brand of blacktea that comes in teabags, you prepare by dunking the tea bag in a hot cup of water and add sugar or milk to taste. Lipton has antioxidant properties, boosts heart health lower blood pressure ans reduce blood sugar.",
            "cost": 300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLipton.jpg?alt=media&token=1bb64dd6-8b11-40aa-9fde-2a8164bdce5f",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:08.862Z",
            "updatedAt": "2020-08-24T09:19:08.862Z",
            "__v": 0
        },
        {
            "_id": "5f43860d06c5350024edc1a7",
            "food_product_name": "Liver",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": "Liver is high in vitamin A, folic acid, iron, and zinc",
            "long_description": "Liver is high in vitamin A, folic acid, iron, and zinc. Liver is the most nutrient dense organ meat, and it is a powerful source of vitamin A. Vitamin A is beneficial for eye health and for reducing diseases that cause inflammation, including everything from Alzheimer's disease to arthritis.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLiver.jpg?alt=media&token=f48d7dd5-dea4-466e-a7b6-666c85ccca9c",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:09.200Z",
            "updatedAt": "2020-08-24T09:19:09.200Z",
            "__v": 0
        },
        {
            "_id": "5f43860e06c5350024edc1a8",
            "food_product_name": "Local rice",
            "product_type": "GRAINS",
            "category_type": "GRAINS",
            "short_description": "",
            "long_description": "",
            "cost": null,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLocal%20rice.jpeg?alt=media&token=3f319545-071f-4e3b-a03a-de5fbe02240b",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:10.158Z",
            "updatedAt": "2020-08-24T09:19:10.158Z",
            "__v": 0
        },
        {
            "_id": "5f43860e06c5350024edc1a9",
            "food_product_name": "Local rice",
            "product_type": "GRAINS",
            "category_type": "GRAINS",
            "short_description": "",
            "long_description": "",
            "cost": null,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FLocal%20rice.jpg?alt=media&token=d865caf8-09a2-42c4-b7cb-e40c9a6e751f",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:10.825Z",
            "updatedAt": "2020-08-24T09:19:10.825Z",
            "__v": 0
        },
        {
            "_id": "5f43860f06c5350024edc1aa",
            "food_product_name": "Maggi",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "",
            "long_description": "",
            "cost": 700,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMaggi.jpg?alt=media&token=a4d825db-e853-4df9-b977-31e67fa9e8c5",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:11.504Z",
            "updatedAt": "2020-08-24T09:19:11.504Z",
            "__v": 0
        },
        {
            "_id": "5f43861006c5350024edc1ab",
            "food_product_name": "Milk 1 2 3",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Milk is a white, nutrient-rich liquid food produced by the mammary glands of mammals.",
            "long_description": "Milk is a white, nutrient-rich liquid food produced by the mammary glands of mammals. In every 100g of milk you have 3.2g of protein, 3.9g of Fat, 4.8g of carbohydrate, 14 mg of cholesterol, 120 mg of calcium and 66 calories of energy. Milk also has minerals like potassium, sodium and vitamins lik Vitamin A, B 12 and D",
            "cost": 1350,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilk%201%202%203.jpg?alt=media&token=e4c6a794-5e29-4a52-a55e-581f9f183d56",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:12.366Z",
            "updatedAt": "2020-08-24T09:19:12.366Z",
            "__v": 0
        },
        {
            "_id": "5f43861006c5350024edc1ac",
            "food_product_name": "Milk 1 2 3",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Peak 123 is a balanced nutrition scientifically formulated milk. It contains necessary vitamin, minerals, proteins and carbohydrate",
            "long_description": "Peak 123 is a balanced nutrition scientifically formulated milk. It contains necessary vitamin, minerals, proteins and carbohydrate. Per 100g of the milk you have 450 kcal, 16.5g of protein, 15g of fat, 62.2g of carbohydrate. Minerals like calcium, phosphorus, iron, copper, zinc and so on. Vitamins like vitamin A, vitamin D3, vitamin B1, vitamin E nd so on.",
            "cost": 1240,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilk%201%202%203.jpg?alt=media&token=d1006476-07c2-46a9-a136-336227a44e43",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:12.920Z",
            "updatedAt": "2020-08-24T09:19:12.920Z",
            "__v": 0
        },
        {
            "_id": "5f43861106c5350024edc1ad",
            "food_product_name": "Milo crunches ",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "To give your children the energy to jump start into sport, we've made MILO cereal with whole grain, vitamin, minerals and our signature Milo Choco Malt! Made with WHOLE GRAIN, you get more goodness-like GroupB Vitamins (for alertness in school), Dietary Fibre (to keep you fuller for longer)and important minerals such as Iron and Calcium",
            "long_description": "To give your children the energy to jump start into sport, we've made MILO cereal with whole grain, vitamin, minerals and our signature Milo Choco Malt! Made with WHOLE GRAIN, you get more goodness-like GroupB Vitamins (for alertness in school), Dietary Fibre (to keep you fuller for longer)and important minerals such as Iron and Calcium. Made up of ;Cereal Grains {[ Whole Grain Wheat Flour (28.2%), Wheat Flour (gluten)], Corn Semlina}, Sugar Barley Malt Extract [Malted Barley (gluten), Tapioca Starch], Fat-reduced Cocoa Powder, Palm Oil, Minerals (Calcium Carbonate, Reduced Iron) Skimmed Milk Powder (cow's Milk) Iodized Salt (Sodium Chloride, Potassium Iodate), Emulsifier (Soya Lecithin E322), Natural Flavouring Substance (Vanillin), Tcopherols and Vitamins (B3, B5, B6, B2 and B9). All additives are of plant or synthetic origin. May contain traces of tree nuts (almonds and hazelnuts).",
            "cost": 1290,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilo%20crunches%20.jpg?alt=media&token=d58d5258-0cd1-4fc9-82d1-891ec45ca341",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:13.638Z",
            "updatedAt": "2020-08-24T09:19:13.638Z",
            "__v": 0
        },
        {
            "_id": "5f43861206c5350024edc1ae",
            "food_product_name": "Milo crunches ",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage",
            "long_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage. Milo contains 402 calories in every 100g mostly from carbohydrates. Milo is also high in calcium, iron and vitamins B1, B2, B6. B12",
            "cost": 1400,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilo%20crunches%20.jpg?alt=media&token=9b5d1334-0292-4d36-8bca-0432040154e2",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:14.268Z",
            "updatedAt": "2020-08-24T09:19:14.268Z",
            "__v": 0
        },
        {
            "_id": "5f43861306c5350024edc1af",
            "food_product_name": "Milo",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage",
            "long_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage. Milo contains 402 calories in every 100g mostly from carbohydrates. Milo is also high in calcium, iron and vitamins B1, B2, B6. B12",
            "cost": 1400,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilo.jpg?alt=media&token=00ee0643-79c6-44f6-80c4-e712a098c0ee",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:15.402Z",
            "updatedAt": "2020-08-24T09:19:15.402Z",
            "__v": 0
        },
        {
            "_id": "5f43861306c5350024edc1b0",
            "food_product_name": "Milo450g",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage",
            "long_description": "Milo is a chocolate and malt powder typically mixed with hot water and or milk to produce a very nice beverage. Milo contains 402 calories in every 100g mostly from carbohydrates. Milo is also high in calcium, iron and vitamins B1, B2, B6. B12",
            "cost": 1400,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMilo450g.jpg?alt=media&token=5fa9a68c-8437-46fc-a06e-5209b7a5983d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:15.675Z",
            "updatedAt": "2020-08-24T09:19:15.675Z",
            "__v": 0
        },
        {
            "_id": "5f43861406c5350024edc1b1",
            "food_product_name": "Mint leaf",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Mint plants are mainly aromatic perennials and they possess erect, branching stems and oblong to ovate or lanceolate leaves arranged in opposing pairs on the stems",
            "long_description": "Mint plants are mainly aromatic perennials and they possess erect, branching stems and oblong to ovate or lanceolate leaves arranged in opposing pairs on the stems. The leaves are often covered in tiny hairs and have a serrated margin. Mint is known to clear congestion of the nose, throat, bronchi, and lungs. In addition to the respiratory channels, mint's anti-inflammatory properties also relieve the irritation caused by chronic coughing. Mint is a decently strong adaptogenic herb.",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMint%20leaf.jpg?alt=media&token=4f20eac6-345c-410c-af9d-c8eaf1ebb03e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:16.973Z",
            "updatedAt": "2020-08-24T09:19:16.973Z",
            "__v": 0
        },
        {
            "_id": "5f43861506c5350024edc1b2",
            "food_product_name": "Mutton",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": "Mutton is meat from a sheep over two years old, and has less tender flesh. In general, the darker the colour of the meat, the older the animal.",
            "long_description": "Mutton is meat from a sheep over two years old, and has less tender flesh. In general, the darker the colour of the meat, the older the animal. Not only is it a rich source of high-quality protein, but it is also an outstanding source of many vitamins and minerals, including iron, zinc, and vitamin B12. Because of this, regular consumption of lamb may promote muscle growth, maintenance, and performance. In addition, it helps prevent anemia.",
            "cost": 1800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FMutton.jpg?alt=media&token=9760e51b-f99f-42a6-8923-99ce53192b7a",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:17.165Z",
            "updatedAt": "2020-08-24T09:19:17.165Z",
            "__v": 0
        },
        {
            "_id": "5f43861606c5350024edc1b3",
            "food_product_name": "Nutmeg 1",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste",
            "long_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste; it is used to flavour many kinds of baked goods, confections, puddings, potatoes, meats, sausages, sauces, vegetables, and such beverages as eggnog. Nutmeg is found to have health benefits, including its ability to relieve pain, soothe indigestion, strengthen cognitive function, detoxify the body, boost skin health, alleviate oral conditions, reduce insomnia, increase immune system function, and prevent leukemia, and improve blood circulation.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FNutmeg%201.jpg?alt=media&token=6f087f45-dc2d-4ed6-8b23-6a27cbf2df9a",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:18.462Z",
            "updatedAt": "2020-08-24T09:19:18.462Z",
            "__v": 0
        },
        {
            "_id": "5f43861606c5350024edc1b4",
            "food_product_name": "Nutmeg 2",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste",
            "long_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste; it is used to flavour many kinds of baked goods, confections, puddings, potatoes, meats, sausages, sauces, vegetables, and such beverages as eggnog. Nutmeg is found to have health benefits, including its ability to relieve pain, soothe indigestion, strengthen cognitive function, detoxify the body, boost skin health, alleviate oral conditions, reduce insomnia, increase immune system function, and prevent leukemia, and improve blood circulation.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FNutmeg%202.jpg?alt=media&token=2cbb2e97-d5f6-4e0f-90db-9929499bb939",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:18.660Z",
            "updatedAt": "2020-08-24T09:19:18.660Z",
            "__v": 0
        },
        {
            "_id": "5f43861706c5350024edc1b5",
            "food_product_name": "Nutmeg",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste",
            "long_description": "The spice nutmeg has a distinctive pungent fragrance and a warm slightly sweet taste; it is used to flavour many kinds of baked goods, confections, puddings, potatoes, meats, sausages, sauces, vegetables, and such beverages as eggnog. Nutmeg is found to have health benefits, including its ability to relieve pain, soothe indigestion, strengthen cognitive function, detoxify the body, boost skin health, alleviate oral conditions, reduce insomnia, increase immune system function, and prevent leukemia, and improve blood circulation.",
            "cost": 100,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FNutmeg.jpg?alt=media&token=8d91e8e0-a78e-4adc-afc5-a0537e3dad70",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:19.985Z",
            "updatedAt": "2020-08-24T09:19:19.985Z",
            "__v": 0
        },
        {
            "_id": "5f43861806c5350024edc1b6",
            "food_product_name": "Okra 2",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Okra is rich in nutrients. Okra boasts an impressive nutrient profile. Contains beneficial antioxidants. May lower heart disease risk. Okra has anticancer properties",
            "long_description": "Okra is rich in nutrients. Okra boasts an impressive nutrient profile. Contains beneficial antioxidants. May lower heart disease risk. Okra has anticancer properties. Also lower blood sugar. Beneficial for pregnant women. Easy to add to your diet.",
            "cost": 300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FOkra%202.jpg?alt=media&token=ae660423-eca8-4846-92d2-4baf693dc14a",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:20.046Z",
            "updatedAt": "2020-08-24T09:19:20.046Z",
            "__v": 0
        },
        {
            "_id": "5f43861906c5350024edc1b7",
            "food_product_name": "Onions",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Onion, Allium cepa, is an herbaceous biennial in the family Liliaceae grown for its edible bulb",
            "long_description": "Onion, Allium cepa, is an herbaceous biennial in the family Liliaceae grown for its edible bulb. The stem of the plant is a flattened disc at the base and the tubular leaves form a pseudostem where their sheaths overlap. The leaves are either erect or oblique and there are 3�8 per plant. Onions have layers of health benefits and are packed with nutrients. Some of the nutrients in onions may help promote heart health.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FOnions.jpeg?alt=media&token=c8abfdba-b572-4a91-8d5c-0cf133e18b28",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:21.552Z",
            "updatedAt": "2020-08-24T09:19:21.552Z",
            "__v": 0
        },
        {
            "_id": "5f43861906c5350024edc1b8",
            "food_product_name": "Okra",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Okra is rich in nutrients. Okra boasts an impressive nutrient profile. Contains beneficial antioxidants. May lower heart disease risk. Okra has anticancer properties",
            "long_description": "Okra is rich in nutrients. Okra boasts an impressive nutrient profile. Contains beneficial antioxidants. May lower heart disease risk. Okra has anticancer properties. Also lower blood sugar. Beneficial for pregnant women. Easy to add to your diet.",
            "cost": 300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FOkra.jpg?alt=media&token=01739994-9c43-4737-a7b5-b2b32a62a775",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:21.624Z",
            "updatedAt": "2020-08-24T09:19:21.624Z",
            "__v": 0
        },
        {
            "_id": "5f43861a06c5350024edc1b9",
            "food_product_name": "Plantain-flour",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Plantains are the less sweet, starchier equivalent to the�banana. Sweet bananas, sometimes called �dessert bananas� are much more popular in the United States and Europe, but plantains are an extremely important staple for people in tropical countries",
            "long_description": "Plantains are the less sweet, starchier equivalent to the�banana. Sweet bananas, sometimes called �dessert bananas� are much more popular in the United States and Europe, but plantains are an extremely important staple for people in tropical countries. Plantains can be fried or boiled or roasted. Plantains are rich sources of complex carbohydrates, vitamins, and minerals, and are easily digestible. They are very rich in fiber and  help digestive health and is also very rich in antioxidants.",
            "cost": 2500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPlantain-flour.jpg?alt=media&token=a4b4eee7-289f-4143-b900-106e6b0c66d8",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:22.897Z",
            "updatedAt": "2020-08-24T09:19:22.897Z",
            "__v": 0
        },
        {
            "_id": "5f43861b06c5350024edc1ba",
            "food_product_name": "Ponmo",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Ponmo is cow skin which has been processed for consumers to cook and eat like beef",
            "long_description": "Ponmo is cow skin which has been processed for consumers to cook and eat like beef. Pomo has become a popular local delicacy loved by all regardless of societal class level. Its unique taste and texture are what make it so popular.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPonmo.jpg?alt=media&token=6d132d55-0537-4fc7-9896-74dc1b1424b7",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:23.220Z",
            "updatedAt": "2020-08-24T09:19:23.220Z",
            "__v": 0
        },
        {
            "_id": "5f43861c06c5350024edc1bb",
            "food_product_name": "Pork",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": " Pork is an excellent source of protein and provides several important vitamins and minerals. ",
            "long_description": "Pork is the culinary name for the meat of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Pork is an excellent source of protein and provides several important vitamins and minerals. ",
            "cost": 2300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPork.jpg?alt=media&token=b710f1c1-e878-48ad-81ac-7bca33dae3d7",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:24.778Z",
            "updatedAt": "2020-08-24T09:19:24.778Z",
            "__v": 0
        },
        {
            "_id": "5f43861c06c5350024edc1bc",
            "food_product_name": "Plantain",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Plantains are the less sweet, starchier equivalent to the�banana. Sweet bananas, sometimes called �dessert bananas� are much more popular in the United States and Europe, but plantains are an extremely important staple for people in tropical countries",
            "long_description": "Plantains are the less sweet, starchier equivalent to the�banana. Sweet bananas, sometimes called �dessert bananas� are much more popular in the United States and Europe, but plantains are an extremely important staple for people in tropical countries. Plantains can be fried or boiled or roasted. Plantains are rich sources of complex carbohydrates, vitamins, and minerals, and are easily digestible. They are very rich in fiber and  help digestive health and is also very rich in antioxidants.",
            "cost": 2500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPlantain.jpg?alt=media&token=d2cbc774-1704-439b-b5d8-6e34ff9a6cfd",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:24.780Z",
            "updatedAt": "2020-08-24T09:19:24.780Z",
            "__v": 0
        },
        {
            "_id": "5f43861e06c5350024edc1bd",
            "food_product_name": "Poundo yam",
            "product_type": "FLOURS",
            "category_type": "FLOURS",
            "short_description": "",
            "long_description": "",
            "cost": 900,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPoundo%20yam.jpg?alt=media&token=95ff52f0-2ffb-465f-a8e1-3972563ec12e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:26.078Z",
            "updatedAt": "2020-08-24T09:19:26.078Z",
            "__v": 0
        },
        {
            "_id": "5f43861e06c5350024edc1be",
            "food_product_name": "Pork 2",
            "product_type": "MEAT AND FISH/RED MEAT",
            "category_type": "MEAT AND FISH/RED MEAT",
            "short_description": " Pork is an excellent source of protein and provides several important vitamins and minerals. ",
            "long_description": "Pork is the culinary name for the meat of a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Pork is an excellent source of protein and provides several important vitamins and minerals. ",
            "cost": 2300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPork%202.jpg?alt=media&token=1f39dd51-88cd-4605-98b2-2e1364921b0f",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:26.686Z",
            "updatedAt": "2020-08-24T09:19:26.686Z",
            "__v": 0
        },
        {
            "_id": "5f43861f06c5350024edc1bf",
            "food_product_name": "Prawn",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Prawns are a rich source of selenium, one of the most effective antioxidants at maintaining healthy cells.",
            "long_description": "Prawns are a rich source of selenium, one of the most effective antioxidants at maintaining healthy cells. They also contain high levels of Zinc, which is important to develop a healthy immune system. Eating prawns helps build strong bones because they contain phosphorous, copper and magnesium.",
            "cost": 1400,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FPrawn.jpg?alt=media&token=d1490e8f-ace4-4eab-bb54-77a45d2f0de1",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:27.376Z",
            "updatedAt": "2020-08-24T09:19:27.376Z",
            "__v": 0
        },
        {
            "_id": "5f43861f06c5350024edc1c0",
            "food_product_name": "Rabbit",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Rabbit is white meat, which means it is healthier. It nourishes the body with nutritional values like proteins, iron and phosphorus.",
            "long_description": "Rabbit is white meat, which means it is healthier. It nourishes the body with nutritional values like proteins, iron and phosphorus. its low-calorie content almost equates it to a balanced meal that meets the optimal health goals. Compared to beef and pork, rabbit meat is relatively low on saturated fat.",
            "cost": 2500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FRabbit.jpg?alt=media&token=cf7bb17d-b083-493c-8771-37885f14e756",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:27.598Z",
            "updatedAt": "2020-08-24T09:19:27.598Z",
            "__v": 0
        },
        {
            "_id": "5f43862006c5350024edc1c1",
            "food_product_name": "Red Yeast Coffee",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "",
            "long_description": "",
            "cost": 900,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FRed%20Yeast%20Coffee.jpg?alt=media&token=7a19e50e-a7df-400b-a4c0-1fbb9f4f0d31",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:28.865Z",
            "updatedAt": "2020-08-24T09:19:28.865Z",
            "__v": 0
        },
        {
            "_id": "5f43862006c5350024edc1c2",
            "food_product_name": "Rice krispies",
            "product_type": "CEREAL",
            "category_type": "CEREAL",
            "short_description": "The original crisped rice cereal has become one of life's simple pleasures. Enjoy some with your little ones",
            "long_description": "The original crisped rice cereal has become one of life's simple pleasures. Enjoy some with your little ones. Or whip up a tasty batch of memories by making The Original Treats� recipe together!",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FRice%20krispies.jpg?alt=media&token=4c54f29d-cbf0-44a1-82c2-f51a450abfae",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:28.933Z",
            "updatedAt": "2020-08-24T09:19:28.933Z",
            "__v": 0
        },
        {
            "_id": "5f43862206c5350024edc1c3",
            "food_product_name": "Rice krispies",
            "product_type": "GRAINS",
            "category_type": "GRAINS",
            "short_description": "",
            "long_description": "",
            "cost": null,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FRice%20krispies.jpg?alt=media&token=10939f14-c187-4978-82af-ac8244ee8da1",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:30.242Z",
            "updatedAt": "2020-08-24T09:19:30.242Z",
            "__v": 0
        },
        {
            "_id": "5f43862206c5350024edc1c4",
            "food_product_name": "Salt",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts",
            "long_description": "Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts; salt in its natural form as a crystalline mineral is known as rock salt or halite. Salt is used in religious ceremonies and has other cultural and traditional significance",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSalt.jpeg?alt=media&token=21c449c2-d653-4ae2-9c32-90c394621eee",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:30.360Z",
            "updatedAt": "2020-08-24T09:19:30.360Z",
            "__v": 0
        },
        {
            "_id": "5f43862306c5350024edc1c5",
            "food_product_name": "Semovita",
            "product_type": "FLOURS",
            "category_type": "FLOURS",
            "short_description": "",
            "long_description": "",
            "cost": 450,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSemovita.jpg?alt=media&token=0e1226d6-dc17-4efe-a47a-d4caee7ce38b",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:31.520Z",
            "updatedAt": "2020-08-24T09:19:31.520Z",
            "__v": 0
        },
        {
            "_id": "5f43862306c5350024edc1c6",
            "food_product_name": "Salt",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts",
            "long_description": "Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts; salt in its natural form as a crystalline mineral is known as rock salt or halite. Salt is used in religious ceremonies and has other cultural and traditional significance",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSalt.jpg?alt=media&token=d36066a6-e491-4a92-b0de-a366cddad8c8",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:31.579Z",
            "updatedAt": "2020-08-24T09:19:31.579Z",
            "__v": 0
        },
        {
            "_id": "5f43862406c5350024edc1c7",
            "food_product_name": "Shrimp",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Shrimp may have a variety of health benefits. It is high in several vitamins and minerals, and is a rich source of protein",
            "long_description": "Shrimp may have a variety of health benefits. It is high in several vitamins and minerals, and is a rich source of protein. Eating shrimp may also promote heart and brain health due to its content of omega-3 fatty acids and the antioxidant astaxanthin ( 6 , 11 , 12 , 13 ).",
            "cost": 1190,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FShrimp.jpg?alt=media&token=c5e3cff1-35c1-41f6-bd5a-549ee6601c8e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:32.842Z",
            "updatedAt": "2020-08-24T09:19:32.842Z",
            "__v": 0
        },
        {
            "_id": "5f43862406c5350024edc1c8",
            "food_product_name": "Shrimp-1239307__340",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Shrimp may have a variety of health benefits. It is high in several vitamins and minerals, and is a rich source of protein",
            "long_description": "Shrimp may have a variety of health benefits. It is high in several vitamins and minerals, and is a rich source of protein. Eating shrimp may also promote heart and brain health due to its content of omega-3 fatty acids and the antioxidant astaxanthin ( 6 , 11 , 12 , 13 ).",
            "cost": 1190,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FShrimp-1239307__340.jpg?alt=media&token=e53d84ca-96a0-495d-be98-6b4adb418373",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:32.854Z",
            "updatedAt": "2020-08-24T09:19:32.854Z",
            "__v": 0
        },
        {
            "_id": "5f43862606c5350024edc1c9",
            "food_product_name": "Snail 2",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Snails offer low calorie source of protein which is required for repairing and building muscles",
            "long_description": "Snails offer low calorie source of protein which is required for repairing and building muscles. It helps to fill better than fat and carbs. Snails are a great source of iron which is essential to build red blood cells and for transporting energy throughout the body. Selenium found in bodies helps to keep immune system healthy and protects cells from damage. Snails contain selenium in it.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSnail%202.jpg?alt=media&token=398e9117-1d20-49c5-9993-757ffba10279",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:34.083Z",
            "updatedAt": "2020-08-24T09:19:34.083Z",
            "__v": 0
        },
        {
            "_id": "5f43862606c5350024edc1ca",
            "food_product_name": "Snail",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Snails offer low calorie source of protein which is required for repairing and building muscles",
            "long_description": "Snails offer low calorie source of protein which is required for repairing and building muscles. It helps to fill better than fat and carbs. Snails are a great source of iron which is essential to build red blood cells and for transporting energy throughout the body. Selenium found in bodies helps to keep immune system healthy and protects cells from damage. Snails contain selenium in it.",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSnail.jpg?alt=media&token=9ea78195-ebb9-4170-b7fd-c9c84d502024",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:34.296Z",
            "updatedAt": "2020-08-24T09:19:34.296Z",
            "__v": 0
        },
        {
            "_id": "5f43862706c5350024edc1cb",
            "food_product_name": "Sweet potato 1",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Sweet potatoes as the name implies are very sweet tubers in the potato family",
            "long_description": "Sweet potatoes as the name implies are very sweet tubers in the potato family. They are a great source of fiber, vitamins and minerals. The fiber and antioxidants in sweet potatoes are advantageous to gut health, they also have cancer-fighting properties, they support healthy vision and may enhance brain function.",
            "cost": 600,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSweet%20potato%201.jpg?alt=media&token=0dc71290-aeea-4473-867e-0bb40afe7687",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:35.718Z",
            "updatedAt": "2020-08-24T09:19:35.718Z",
            "__v": 0
        },
        {
            "_id": "5f43862706c5350024edc1cc",
            "food_product_name": "Spinach",
            "product_type": "VEGETABLES/LEAFY",
            "category_type": "VEGETABLES/LEAFY",
            "short_description": "Spinach is rich in vitamins A, C and K, magnesium, iron and manganese.",
            "long_description": "Spinach is rich in vitamins A, C and K, magnesium, iron and manganese. Eating this leafy green veggie may benefit eye health, reduce oxidative stress and reduce blood pressure levels among other health functions. Whether you like it or not, spinach is surely one veggie that you must include in your daily diet. ",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSpinach.jpg?alt=media&token=0e78fce9-e554-40cd-8793-a20d65bfc23c",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:35.959Z",
            "updatedAt": "2020-08-24T09:19:35.959Z",
            "__v": 0
        },
        {
            "_id": "5f43862906c5350024edc1cd",
            "food_product_name": "Sweet potato",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Sweet potatoes as the name implies are very sweet tubers in the potato family",
            "long_description": "Sweet potatoes as the name implies are very sweet tubers in the potato family. They are a great source of fiber, vitamins and minerals. The fiber and antioxidants in sweet potatoes are advantageous to gut health, they also have cancer-fighting properties, they support healthy vision and may enhance brain function.",
            "cost": 600,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSweet%20potato.jpg?alt=media&token=819e9208-651a-40fa-96ca-27d5ba6d1f38",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:37.124Z",
            "updatedAt": "2020-08-24T09:19:37.124Z",
            "__v": 0
        },
        {
            "_id": "5f43862b06c5350024edc1ce",
            "food_product_name": "Titus fish 2",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Titus fish�are an excellent source of vitamin B-12",
            "long_description": "Titus fish�are an excellent source of vitamin B-12. This vitamin helps your cardiovascular system and gives you energy. In addition, these fish contain a�healthy�amount of vitamin D. Along with B-12, D is necessary for good bone�health�throughout your life.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTitus%20fish%202.jpg?alt=media&token=fef4d49a-89d3-472d-b16b-7651697c4b78",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:39.092Z",
            "updatedAt": "2020-08-24T09:19:39.092Z",
            "__v": 0
        },
        {
            "_id": "5f43862b06c5350024edc1cf",
            "food_product_name": "Tilapia fish",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Tilapia are shaped much like sunfish or crappie but can be easily identified by an interrupted lateral line characteristic of the Cichlid family of fishes",
            "long_description": "Tilapia are shaped much like sunfish or crappie but can be easily identified by an interrupted lateral line characteristic of the Cichlid family of fishes. Tilapia is also lower in sodium, calories, and total fat than bacon and other processed meats, and, unlike them, it does not contain nitrates that can potentially cause cancer. Tilapia contains the essential fatty acids omega-3 and omega-6. Omega-3 fatty acids contribute to heart health, vision, and joint strength.",
            "cost": 1000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTilapia%20fish.jpg?alt=media&token=2a5a52f3-0ab1-46df-b4a2-6138967cd55f",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:39.096Z",
            "updatedAt": "2020-08-24T09:19:39.096Z",
            "__v": 0
        },
        {
            "_id": "5f43862c06c5350024edc1d0",
            "food_product_name": "Titus fish",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Titus fish�are an excellent source of vitamin B-12",
            "long_description": "Titus fish�are an excellent source of vitamin B-12. This vitamin helps your cardiovascular system and gives you energy. In addition, these fish contain a�healthy�amount of vitamin D. Along with B-12, D is necessary for good bone�health�throughout your life.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTitus%20fish.jpg?alt=media&token=92293f39-ae43-4487-9c83-55c629d4af42",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:40.400Z",
            "updatedAt": "2020-08-24T09:19:40.400Z",
            "__v": 0
        },
        {
            "_id": "5f43862d06c5350024edc1d1",
            "food_product_name": "Titus fish 3",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": "Titus fish�are an excellent source of vitamin B-12",
            "long_description": "Titus fish�are an excellent source of vitamin B-12. This vitamin helps your cardiovascular system and gives you energy. In addition, these fish contain a�healthy�amount of vitamin D. Along with B-12, D is necessary for good bone�health�throughout your life.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTitus%20fish%203.jpg?alt=media&token=89684490-5093-446f-9d0a-a097296ad6a9",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:41.113Z",
            "updatedAt": "2020-08-24T09:19:41.113Z",
            "__v": 0
        },
        {
            "_id": "5f43862d06c5350024edc1d2",
            "food_product_name": "Sugar",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food",
            "long_description": "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food. Table sugar, granulated sugar, or regular sugar, refers to sucrose, a disaccharide composed of glucose and fructose. Simple sugars, also called monosaccharides, include glucose, fructose, and galactose. Sugar has a high calorie content that will give your body energy that you lack.",
            "cost": 800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FSugar.jpg?alt=media&token=1d5fb196-d6d5-49c8-b98b-2489a3d7bcc5",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:41.901Z",
            "updatedAt": "2020-08-24T09:19:41.901Z",
            "__v": 0
        },
        {
            "_id": "5f43862e06c5350024edc1d3",
            "food_product_name": "Tomatoes",
            "product_type": "VEGETABLES/NON-LEAFY",
            "category_type": "VEGETABLES/NON-LEAFY",
            "short_description": "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer",
            "long_description": "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits, including reduced risk of heart disease and cancer. They are also a great source of vitamin C, Tomatoes potassium, folate, and vitamin K.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTomatoes.jpeg?alt=media&token=394c4b94-9463-4308-9746-f21df18ce816",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:42.443Z",
            "updatedAt": "2020-08-24T09:19:42.443Z",
            "__v": 0
        },
        {
            "_id": "5f43862f06c5350024edc1d4",
            "food_product_name": "Tumeric",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Turmeric is a bright yellow spice powder that is made from the root of a plant in the ginger family (Zingiberaceae), Curcuma longa. ... Like galangal and ginger, turmeric is a kind of root (rhizome) and has a similar appearance, except that it has an orange hue",
            "long_description": "Turmeric is a bright yellow spice powder that is made from the root of a plant in the ginger family (Zingiberaceae), Curcuma longa. ... Like galangal and ginger, turmeric is a kind of root (rhizome) and has a similar appearance, except that it has an orange hue. Fresh turmeric is also used in some dishes. Turmeric and especially its most active compound curcumin have many scientifically-proven health benefits, such as the potential to prevent heart disease, Alzheimer's and cancer. It's a potent anti-inflammatory and antioxidant and may also help improve symptoms of depression and arthritis.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTumeric.jpg?alt=media&token=b8182d02-f2ff-4ef4-aedd-2deaf3a96625",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:43.534Z",
            "updatedAt": "2020-08-24T09:19:43.534Z",
            "__v": 0
        },
        {
            "_id": "5f43862f06c5350024edc1d5",
            "food_product_name": "Tuna fish 2",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": " The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health",
            "long_description": "Tuna are a streamlined silver fish with large eyes, dark blue backs and spiky fins. The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health. Tuna comprises omega-3 fatty acids, which help in bringing balance in the blood vessels thereby reducing cholesterol in the arteries.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTuna%20fish%202.jpg?alt=media&token=5eab5fc1-9f58-4b58-82aa-93870ad32c1e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:43.781Z",
            "updatedAt": "2020-08-24T09:19:43.781Z",
            "__v": 0
        },
        {
            "_id": "5f43863006c5350024edc1d6",
            "food_product_name": "Tuna fish 3",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": " The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health",
            "long_description": "Tuna are a streamlined silver fish with large eyes, dark blue backs and spiky fins. The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health. Tuna comprises omega-3 fatty acids, which help in bringing balance in the blood vessels thereby reducing cholesterol in the arteries.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTuna%20fish%203.jpg?alt=media&token=c4082c98-1350-46a9-8c97-08ab6b5ebce0",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:44.984Z",
            "updatedAt": "2020-08-24T09:19:44.984Z",
            "__v": 0
        },
        {
            "_id": "5f43863106c5350024edc1d7",
            "food_product_name": "Tuna fish",
            "product_type": "MEAT AND FISH/FISH",
            "category_type": "MEAT AND FISH/FISH",
            "short_description": " The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health",
            "long_description": "Tuna are a streamlined silver fish with large eyes, dark blue backs and spiky fins. The fish is a powerhouse of essential nutrients such as omega-3 fatty acids, potassium, magnesium, iron, vitamin A, B6 and B12, and as such is beneficial for health. Tuna comprises omega-3 fatty acids, which help in bringing balance in the blood vessels thereby reducing cholesterol in the arteries.",
            "cost": 1500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTuna%20fish.jpg?alt=media&token=b10e8515-5d72-45c9-92cd-fbbe2168115d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:45.059Z",
            "updatedAt": "2020-08-24T09:19:45.059Z",
            "__v": 0
        },
        {
            "_id": "5f43863206c5350024edc1d8",
            "food_product_name": "Turkey",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Turkey contains anti-cancer properties.",
            "long_description": "Turkey contains anti-cancer properties. It is a very good source of the trace mineral selenium, which is an essential component required for thyroid hormone metabolism, antioxidant defence systems, and immune function. Light, skinless roasted turkey is low on saturated fat and total fat. It also contains less cholesterol than chicken, pork or beef. Turkey is believed to have mood-enhancing properties.",
            "cost": 1800,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FTurkey.jpg?alt=media&token=0eaf6a7d-81f7-41c5-a6e7-31deeb5e2b7d",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:46.253Z",
            "updatedAt": "2020-08-24T09:19:46.253Z",
            "__v": 0
        },
        {
            "_id": "5f43863206c5350024edc1d9",
            "food_product_name": "Veal",
            "product_type": "MEAT AND FISH/WHITE MEAT",
            "category_type": "MEAT AND FISH/WHITE MEAT",
            "short_description": "Veal is the meat of calves, in contrast to the beef from older cattle. Veal can be produced from a calf of either sex and any breed; however, most veal comes from young males of dairy breeds which are not used for breeding.",
            "long_description": "Veal is the meat of calves, in contrast to the beef from older cattle. Veal can be produced from a calf of either sex and any breed; however, most veal comes from young males of dairy breeds which are not used for breeding. Cooked, trimmed veal provides less than 10% of the calories recommended for a 2,000 calorie diet. At the same time, veal delivers more than 10% of the daily values for protein, zinc, niacin, as well as vitamin B12 and B6. Protein and B-vitamins help us increase our energy levels.",
            "cost": 2300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FVeal.jpg?alt=media&token=6d09f391-5e22-4917-82fb-19fb67012c4a",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:46.437Z",
            "updatedAt": "2020-08-24T09:19:46.437Z",
            "__v": 0
        },
        {
            "_id": "5f43863306c5350024edc1da",
            "food_product_name": "Water leaf",
            "product_type": "VEGETABLES/LEAFY",
            "category_type": "VEGETABLES/LEAFY",
            "short_description": "Water leaf is rich in fibre, protein and has various vitamins necessary for human healthy diet",
            "long_description": "Water leaf is rich in fibre, protein and has various vitamins necessary for human healthy diet; and it is a good source of some important minerals such as magnesium and potassium; as well as antioxidant vitamins. ",
            "cost": 300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FWater%20leaf.jpg?alt=media&token=946e51d3-26b4-45d3-afa0-e482e424ba4e",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:47.532Z",
            "updatedAt": "2020-08-24T09:19:47.532Z",
            "__v": 0
        },
        {
            "_id": "5f43863306c5350024edc1db",
            "food_product_name": "Water leaf",
            "product_type": "VEGETABLES/LEAFY",
            "category_type": "VEGETABLES/LEAFY",
            "short_description": "Water leaf is rich in fibre, protein and has various vitamins necessary for human healthy diet",
            "long_description": "Water leaf is rich in fibre, protein and has various vitamins necessary for human healthy diet; and it is a good source of some important minerals such as magnesium and potassium; as well as antioxidant vitamins. ",
            "cost": 300,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FWater%20leaf.jpeg?alt=media&token=ff1530eb-5dfc-4e96-8015-0b9910157237",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:47.604Z",
            "updatedAt": "2020-08-24T09:19:47.604Z",
            "__v": 0
        },
        {
            "_id": "5f43863506c5350024edc1dc",
            "food_product_name": "Yale biscuit",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Yale cabin biscuit is a biscuit snack that comes in packs",
            "long_description": "Yale cabin biscuit is a biscuit snack that comes in packs. Yale biscuit is very tasty and can be consumed alone with butter or with tea. ",
            "cost": 2000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYale%20biscuit.jpg?alt=media&token=2e732899-74ae-45be-b594-dfd86882d601",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:49.123Z",
            "updatedAt": "2020-08-24T09:19:49.123Z",
            "__v": 0
        },
        {
            "_id": "5f43863506c5350024edc1dd",
            "food_product_name": "White beans",
            "product_type": "GRAINS",
            "category_type": "GRAINS",
            "short_description": "",
            "long_description": "",
            "cost": null,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FWhite%20beans.jpg?alt=media&token=63fe29ac-7a75-440f-8be6-bc33b96e2a7b",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:49.125Z",
            "updatedAt": "2020-08-24T09:19:49.125Z",
            "__v": 0
        },
        {
            "_id": "5f43863506c5350024edc1de",
            "food_product_name": "Thyme",
            "product_type": "SPICES",
            "category_type": "SPICES",
            "short_description": "Thyme is a low growing (6-12 inches tall) to almost prostrate, wiry stemmed perennial",
            "long_description": "Thyme is a low growing (6-12 inches tall) to almost prostrate, wiry stemmed perennial. Stems are stiff and woody and leaves are small, oval and gray-green in color. Flowers can be white to lilac and are in small clusters. Thyme is highly aromatic with a hint of clove and mint fragrance.",
            "cost": 200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FThyme.jpg?alt=media&token=5185983c-f624-4a60-9693-71315436dcf0",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:49.295Z",
            "updatedAt": "2020-08-24T09:19:49.295Z",
            "__v": 0
        },
        {
            "_id": "5f43863606c5350024edc1df",
            "food_product_name": "Whole milk",
            "product_type": "BEVERAGES AND TEA",
            "category_type": "BEVERAGES AND TEA",
            "short_description": "Whole milk is unadulterated milk which possesses more fat and calories than the usual skimmed or low fat milk",
            "long_description": "Whole milk is unadulterated milk which possesses more fat and calories than the usual skimmed or low fat milk. In one cup (237ml) of whole milk, you have 146 calories, 12.8g of Carbohydrate, 7.9g of Protein  and 7.9g of fat. Whole milk also provides nutrients like Calcium and Vitamins like vitamin D and A.",
            "cost": 1200,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FWhole%20milk.jpg?alt=media&token=2156ca71-b5de-4f8a-ada1-8ea4cf012c55",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:50.485Z",
            "updatedAt": "2020-08-24T09:19:50.485Z",
            "__v": 0
        },
        {
            "_id": "5f43863606c5350024edc1e0",
            "food_product_name": "Yam flour",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber",
            "long_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber. They are also high in potassium and manganese, which are important for supporting bone health, growth, metabolism and heart function. Yam can be fried, boiled or roasted among many other ways of preparation.",
            "cost": 3000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYam%20flour.jpg?alt=media&token=cae5a527-f130-4726-b6c0-c537794878b4",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:50.575Z",
            "updatedAt": "2020-08-24T09:19:50.575Z",
            "__v": 0
        },
        {
            "_id": "5f43863706c5350024edc1e1",
            "food_product_name": "Yam flour",
            "product_type": "FLOURS",
            "category_type": "FLOURS",
            "short_description": "Yam flour is yam that has been peeled, sliced, cleaned, dried and then blended into a flour. It is also called elubo. Yam is white in colour. It turns into a brownish colour after it has been dried",
            "long_description": "Yam flour is yam that has been peeled, sliced, cleaned, dried and then blended into a flour. It is also called elubo. Yam is white in colour. It turns into a brownish colour after it has been dried; this gives �m�l� its thick brown colour. Its health benefits are numerous as it is�good for weight loss, improves cardiovascular diseases, helps to manage diabetes, reduces the risk of cancer, boosts immunity naturally, improves eye health, stimulates the digestive system.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYam%20flour.jpg?alt=media&token=3f6c7065-1672-4067-ba53-4321a58ed4d6",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:51.836Z",
            "updatedAt": "2020-08-24T09:19:51.836Z",
            "__v": 0
        },
        {
            "_id": "5f43863806c5350024edc1e2",
            "food_product_name": "Yam-Flour-2-1",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "All-purpose flour, also known as refined flour or simply flour, is made from wheat grains after removing the brown covering",
            "long_description": "All-purpose flour, also known as refined flour or simply flour, is made from wheat grains after removing the brown covering. It is then milled, refined and bleached. It is very common in Indian cuisine specially for various many Indian breads. It is commonly used in baking cakes, pies and other desserts. Flour is an excellent source of protein, vitamins, fibre and complex carbohydrates. It is also low in fat and cholesterol.",
            "cost": 350,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYam-Flour-2-1.jpeg?alt=media&token=bf080a5a-5224-4271-b2ab-69780f48ee82",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:52.047Z",
            "updatedAt": "2020-08-24T09:19:52.047Z",
            "__v": 0
        },
        {
            "_id": "5f43863906c5350024edc1e3",
            "food_product_name": "Yam-Flour-2-1",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber",
            "long_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber. They are also high in potassium and manganese, which are important for supporting bone health, growth, metabolism and heart function. Yam can be fried, boiled or roasted among many other ways of preparation.",
            "cost": 3000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYam-Flour-2-1.jpeg?alt=media&token=3630158d-b1be-42ee-9418-525137e6e434",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:53.305Z",
            "updatedAt": "2020-08-24T09:19:53.305Z",
            "__v": 0
        },
        {
            "_id": "5f43863906c5350024edc1e4",
            "food_product_name": "Yam",
            "product_type": "TUBERS",
            "category_type": "TUBERS",
            "short_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber",
            "long_description": "Yam is the common name for some plant species in the genus dioscorea that form edible tubers. Yams are rich in vitamins, minerals and fiber. They are also high in potassium and manganese, which are important for supporting bone health, growth, metabolism and heart function. Yam can be fried, boiled or roasted among many other ways of preparation.",
            "cost": 3000,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FYam.jpeg?alt=media&token=3b126a44-8752-4ff5-8778-962ec293042f",
            "in_stock_status": "Yes",
            "createdAt": "2020-08-24T09:19:53.552Z",
            "updatedAt": "2020-08-24T09:19:53.552Z",
            "__v": 0
        },
        {
            "_id": "5f85a9a0481bab0024ef163b",
            "food_product_name": "hh",
            "product_type": "jj",
            "category_type": "ll",
            "short_description": "ll",
            "long_description": "ll",
            "cost": 87777,
            "image_link": "image",
            "in_stock_status": "Yes",
            "createdAt": "2020-10-13T13:20:32.032Z",
            "updatedAt": "2020-10-13T13:20:32.032Z",
            "__v": 0
        },
        {
            "_id": "5f85aa0a481bab0024ef163c",
            "food_product_name": "hh",
            "product_type": "jj",
            "category_type": "ll",
            "short_description": "ll",
            "long_description": "ll",
            "cost": 87777,
            "image_link": "image",
            "in_stock_status": "Yes",
            "createdAt": "2020-10-13T13:22:18.472Z",
            "updatedAt": "2020-10-13T13:22:18.472Z",
            "__v": 0
        },
        {
            "_id": "5f85ad85481bab0024ef163d",
            "food_product_name": "hh",
            "product_type": "jj",
            "category_type": "ll",
            "short_description": "ll",
            "long_description": "ll",
            "cost": 87777,
            "image_link": "image",
            "in_stock_status": "Yes",
            "createdAt": "2020-10-13T13:37:09.006Z",
            "updatedAt": "2020-10-13T13:37:09.006Z",
            "__v": 0
        },
        {
            "_id": "5f85b032481bab0024ef163e",
            "food_product_name": "Baking powder",
            "product_type": "BAKING INGREDIENTS",
            "category_type": "BAKING INGREDIENTS",
            "short_description": "Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid",
            "long_description": "Baking powder is a dry chemical leavening agent, a mixture of a carbonate or bicarbonate and a weak acid. The base and acid are prevented from reacting prematurely by the inclusion of a buffer such as cornstarch. Baking powder is used to increase the volume and lighten the texture of baked goods.",
            "cost": 500,
            "image_link": "https://firebasestorage.googleapis.com/v0/b/intriobasket-a601d.appspot.com/o/food_images%2FBaking%20powder.jpg?alt=media&token=713ea73d-a563-45af-ba4f-a9bf6a60f08c",
            "in_stock_status": "Yes",
            "createdAt": "2020-10-13T13:48:34.292Z",
            "updatedAt": "2020-10-13T13:48:34.292Z",
            "__v": 0
        },
        {
            "_id": "5f85c383481bab0024ef163f",
            "food_product_name": "hh",
            "product_type": "jj",
            "category_type": "ll",
            "short_description": "ll",
            "long_description": "ll",
            "cost": 87777,
            "image_link": "image",
            "in_stock_status": "Yes",
            "createdAt": "2020-10-13T15:10:59.615Z",
            "updatedAt": "2020-10-13T15:11:55.080Z",
            "__v": 0
        }
    ]
}
**/

