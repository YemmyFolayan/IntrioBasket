// change this to your public key so you
// will no more be prompted
var public_key = "pk_live_f555131c80caa76efdb893b523a82fe4fcebfbc9";

//pk_live_f555131c80caa76efdb893b523a82fe4fcebfbc9      Public key
//sk_live_432fff5a600bbff4d70c64002c3ee97a8315a305      Live secret key

//pk_test_88aa3e8f7eee3667872bc7c24d40f470ce40cf9e

/*
 * Start up
 */
function startUp() {
  checkAmountInKobo();
  promptForPublicKey();
}

/*
 * check if the public key set is valid
 *
 * @return bool
 */
function isValidPublicKey() {
  var publicKeyPattern = new RegExp("^pk_(?:test|live)_", "i");
  return publicKeyPattern.test(public_key);
}

/*
 * Prompt for and set public key to use
 * If public key set is not valid
 */
function promptForPublicKey() {
  if (!isValidPublicKey()) {
    // get a public key to use
    public_key = prompt(
      "To run this sample, you need to provide a public key.\n" +
        "Please visit https://dashboard.paystack.co/#/settings/developer to get your " +
        "public key and enter in the box below:",
      "pk_xxxx_"
    );
    // check that we got a valid public key
    // (starts with pk_live_ or pk_test_)
    if (!isValidPublicKey()) {
      var error_msg =
        "You didn't provide a public key. This page will not load.";
      alert(error_msg);
      document.getElementById("pay-form").innerHTML = error_msg;
    }
  }
}
/*
 * Validate before opening Paystack popup
 */
function validateAndPay() {
  var email = document.getElementById("email").value;
  if (!simpleValidEmail(email)) {
    alert("Please provide a valid email");
    return;
  }

  var amountinkobo = getAmountInKobo();
  if (!amountinkobo) {
    alert("Please provide a valid amount");
    document.getElementById("amountinnaira").style.display = "block";
    document.getElementById("static-amount").style.display = "none";
    return;
  }

  // We are not validating firstname and phoneNumber
  var firstname = document.getElementById("firstname").value;
  var phoneNumber = document.getElementById("phoneNumber").value;

  payWithPaystack(email, amountinkobo, firstname, phoneNumber);
}

/* Get the query parameters for this window
 *
 * source: http://stackoverflow.com/a/21210643/671568
 */
function getParams() {
  var queryDict = {};
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      queryDict[item.split("=")[0]] = item.split("=")[1];
    });
  return queryDict;
}

/* Check amount sent by get if it's a valid integer
 * show the amount input box if not
 */
function checkAmountInKobo() {
  amountinkobo = getParams().amountinkobo;

  if (!simpleValidInt(amountinkobo)) {
    // show the amount box since an amount was not specified by GET
    document.getElementById("amountinnaira").style.display = "block";
    document.getElementById("static-amount").style.display = "none";
  } else {
    document.getElementById("amountinngn").innerHTML = amountinkobo / 100;
  }
}

/* Get amount sent by get if it's a valid integer
 * Get the amount entered in input box  multiplied
 *  by 100. Show alert if no valid amountinkobo can be found
 */
function getAmountInKobo() {
  amountinkobo = getParams().amountinkobo;

  /* Target AMOUNT IN NAIRA TO KOBO HERE
   */

  if (!amountinkobo) {
    amountinkobo = 100 * totalPrice;
  }

  if (!simpleValidInt(amountinkobo)) {
    alert("Please provide an amount to pay");
  }

  return amountinkobo;
}

/* Get a random reference number based on the current time
 *
 * gotten from http://stackoverflow.com/a/2117523/671568
 * replaced UUID with REF
 */
function generateREF() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var ref = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return ref;
}

/* Validate integer
 *
 * gotten from http://stackoverflow.com/a/25016143/671568
 */
function simpleValidInt(data) {
  if (+data === parseInt(data)) {
    return true;
  } else {
    return false;
  }
}

/* Validate email address
 * not meant for really secure email validation
 *
 * gotten from http://stackoverflow.com/a/28633540/671568
 * Had to correct Regex, allowing A-Za-z0-9 to repeat
 */
function simpleValidEmail(email) {
  return (
    email.length < 256 &&
    /^[^@]+@[^@]+[A-Za-z0-9]{2,}\.[^@]+[A-Za-z0-9]{2,}$/.test(email)
  );
}

/* Show the paystack payment popup
 *
 * source: https://developers.paystack.co/docs/paystack-inline
 */

let msg;

function payWithPaystack(validatedemail, amountinkobo, firstname, phoneNumber) {
  var handler = PaystackPop.setup({
    key: public_key,
    email: validatedemail,
    firstname: firstname,
    phoneNumber: phoneNumber,
    amount: amountinkobo,
    ref: generateREF(), // This uses a random transaction reference based
    // on the time the "Pay" button was clicked.
    callback: function (response) {
      // payment was received
      // clear away the form, show success message
      msg =
        'Success. The transaction reference is <b>"' +
        response.trxref +
        '"</b>';

      document.getElementById("alert-holder").innerHTML =
        '<div class="alert alert-success">' + msg + "</div>";
      document.getElementById("pay-form").reset();
      window.location.assign("/shop_order_complete.html");
    },
    onClose: function () {
      // Visitor cancelled payment
      var msg = "Cancelled. Please click the 'Pay' button to try again";
      document.getElementById("alert-holder").innerHTML =
        '<div class="alert alert-danger">' + msg + "</div>";
    },
  });
  handler.openIframe();
}

let totalPrice = localStorage.getItem("totalPrice");
console.log({ totalPrice });

/////PAYMENT PRICE TEMPLATE
const totalPriceDOM = document.getElementById("paying");

const totalPriceTemplate = (totalPrice) => {
  return `
<div class="form-title">You're Paying # ${totalPrice}</div> `;
};

const DisplaytotalPriceTemplate = () => {
  let htmlString = totalPriceTemplate(totalPrice);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  totalPriceDOM.appendChild(htmlFragment);
};

DisplaytotalPriceTemplate();

//MAKE SURE YOU DISPLAY MSG (REFERENCE ID ON ORDER COMPLETE PAGE)
