var purchaserForm = document.getElementById("form");
let purchaserName;
let numbers;
let phoneNumber;
let zipCode;
let address;
let totalCost;

purchaserForm.addEventListener("submit", function (e) {
  e.preventDefault();

  purchaserName = document.getElementById("purchaserName").value;

  console.log(purchaserName);
  numbers = document.getElementById("numbers").value;
  phoneNumber = document.getElementById("phoneNumber").value;
  zipCode = document.getElementById("zipCode").value;
  address = document.getElementById("address").value;

  localStorage.setItem("purchaserName", purchaserName);

  localStorage.setItem("numbers", numbers);

  localStorage.setItem("phoneNumber", phoneNumber);

  localStorage.setItem("address", address);

  localStorage.setItem("zipCode", zipCode);

  window.location.assign("/payment.html");
});
