const featuredProductDOM = document.getElementById("userReg");

const featuredProductItemTemplate = (count) => {
  return `
    <!-- small box -->
      <div class="small-box bg-warning">
        <div class="inner">
          <h3>${count}</h3>

          <p>Registered Users</p>
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


  const count = res.payload.length;
    
    console.log(res.payload.length);
    console.log("hi count");

    let htmlString = featuredProductItemTemplate(count);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  
};

fetchFoodList();








const featuredProductsDOM = document.getElementById("allCheckout");

const featuredProductItemTemplates = (checks) => {
  return `
    <!-- small box -->
    <div class="small-box bg-danger">
      <div class="inner">
        <h3>65 ${checks}</h3>

        <p>All checkouts</p>
      </div>
      <div class="icon">
        <i class="ion ion-pie-graph"></i>
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



const fetchFoodLists = async () => {
  const endpoint = "/user/"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..


  const checks = res.payload.length;
    
    console.log(res.payload.length);
    console.log("hi count");

    let htmlString = featuredProductItemTemplates(checks);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductsDOM.appendChild(htmlFragment);
  
};

fetchFoodLists();




