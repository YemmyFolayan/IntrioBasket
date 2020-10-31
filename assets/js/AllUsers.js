const featuredProductDOM = document.getElementById("userList");

const featuredProductItemTemplate = (userDetails) => {
  return `
  <div class="product left-align">
  <h3 class="product-price left-align">NAME: ${userDetails.fullname}</h3>
  <h3 class="product-price left-align">E-MAIL: ${userDetails.email}</h3>
  <h3 class="product-price left-align">PHONE NO: ${userDetails.phonenumber}</h3>
  <h3 class="product-price left-align">GENDER: ${userDetails.gender}</h3>
  <div class="product-select">
      <button class="quickview round-icon-btn">
          <i class="far fa-eye"></i>
      </button>
  </div>
</div>

    `;
};

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
