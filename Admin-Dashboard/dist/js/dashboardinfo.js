const featuredProductDOM = document.getElementById("userReg");

const featuredProductItemTemplate = (productDetails) => {
  return `
    <!-- small box -->
      <div class="small-box bg-warning">
        <div class="inner">
          <h3>44 ${productDetails}</h3>

          <p>User Registrations</p>
        </div>
        <div class="icon">
          <i class="ion ion-person-add"></i>
        </div>
        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
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


  res.payload.forEach((product) => {
    let productDetails = product.length;
    console.log(product.length);
    console.log("hi lenght");

    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();