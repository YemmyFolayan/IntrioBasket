///////////////////////////////////////
//updateUserId is GLOBAL across the site
let updateUserId = localStorage.getItem("id");
console.log({ updateUserId });

let updateUserToken = localStorage.getItem("token");
console.log({ updateUserToken });
// Mini Router (refreshes the page)
//ROUTER for page redirect
const router = (url) => {
  // Check for url
  if (typeof url === "undefined") throw new Error("Invalid URL!");

  let pageUrl = "";
  if (url.includes(".html")) {
    pageUrl = url;
  } else {
    pageUrl = url.concat(".html");
  }

  window.location.assign(pageUrl);
};

const updateCart = () => {
  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
  let raw = [];

  cartStore.forEach((cart) => {
    let cartDetails = {
      item_name: cart.name,
      number: cart.qty,
      item_image: cart.imageUrl,
      initial_cost: cart.price,
    };
    raw.push(cartDetails);
  });

  ////////////////////////////////////
  console.log("updatecart function");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${updateUserToken}`);

  raw = { cart_details: raw };
  raw = JSON.stringify(raw);
  console.log("RAW");
  console.log(raw);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/update-cart/${updateUserId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  //window.location.assign("/shop_cart.html");
  console.log("UPDATE");
};
