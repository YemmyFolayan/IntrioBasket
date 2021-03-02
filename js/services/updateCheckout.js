let purchaserName = localStorage.getItem("purchaserName");
console.log({ purchaserName });

let numbers = localStorage.getItem("numbers");
console.log({ numbers });

let phoneNumber = localStorage.getItem("phoneNumber");
console.log({ phoneNumber });

let address = localStorage.getItem("address");
console.log({ address });

let zipCode = localStorage.getItem("zipCode");
//console.log({ zipCode });

let checkoutUserId = localStorage.getItem("id");
console.log({ checkoutUserId });

let checkoutUserToken = localStorage.getItem("token");
console.log({ checkoutUserToken });

const updateCheckout = () => {
  console.log("updateCheckout function");

  const cartStoreHistory = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  totalCost = localStorage.getItem("totalPrice");
  let rawItems = [];

  cartStoreHistory.forEach((cart) => {
    let cartDetails = {
      item_name: cart.name,
      number: cart.qty,
      item_image: cart.imageUrl,
      initial_cost: cart.price,
    };
    rawItems.push(cartDetails);
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("x-access-token", `${checkoutUserToken}`);

  var raw = JSON.stringify({
    order_delivery_type: "pick it up",
    items: rawItems,
    number_of_items: numbers,
    total_cost: totalCost,
    address_name: address,
    phonenumber: phoneNumber,
    zip_code: zipCode,
    purchaser_name: purchaserName,
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  //https://cors-anywhere.herokuapp.com
  fetch(
    `http://intriobasket.pexceptos.com/api/checkout/user/${checkoutUserId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  window.location.assign("/shop_checkoutHistory.html");
  localStorage.removeItem(CONFIG.CART_STORE);
  console.log("UPDATECHECKOUT");
};
