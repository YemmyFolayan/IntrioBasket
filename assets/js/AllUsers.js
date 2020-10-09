const featuredProductDOM = document.getElementById("userList");

const featuredProductItemTemplate = (userDetails) => {
  return `
  <div class="product">
  <h3 class="product-price">${userDetails.fullname}</h3>
  <h3 class="product-type">${userDetails.email}</h3>
  <h3 class="product-price">${userDetails.phonenumber}</h3>
  <h3 class="product-type">${userDetails.gender}</h3>
  <div class="product-select">
      <button class="add-to-wishlist round-icon-btn">
          <i class="icon_heart_alt"></i>
      </button>
      <button class="add-to-cart round-icon-btn">
          <i class="fa fa-shopping-cart"></i>
      </button>
      <button class="quickview round-icon-btn">
          <i class="far fa-eye"></i>
      </button>
  </div>
</div>

    `;
};

// GET

// Get All Checkouts
// http://intriobasket.pexceptos.com/api/checkout/get-all

// GET

// Get All Users
// http://intriobasket.pexceptos.com/api/user/

const fetchFoodList = async () => {
  const endpoint = "/user/"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  const users = res.payload;

  console.log(res.payload);
  console.log("Hi");
  users.forEach((user) => {
    let userDetails = {
      fullname: user.fullname,
      email: user.email,
      phonenumber: user.phonenumber,
      gender: user.gender,
    };

    let htmlString = featuredProductItemTemplate(userDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();
