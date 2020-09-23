const featuredProductDOM = document.getElementById("userReg");

const featuredProductItemTemplate = (product) => {
  return `
    <!-- small box -->
      <div class="small-box bg-warning">
        <div class="inner">
          <h3>44 ${res.payload.length}</h3>

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


  const count = res.payload.length;
    
    console.log(res.payload.length);
    console.log("hi length");

    let htmlString = featuredProductItemTemplate(product);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  
};

fetchFoodList();
