//List of roles: ["superAdmin" || "admin" || "accountManager" || "aggregator" || "foreman"]
//GET PENDING ORDERS
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
        <a href="/AllUsers.html" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
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

  const res = await api.request(endpoint); // TO DO: handle errors..

  const count = res.payload.length;

  console.log(res.payload.length);
  console.log("hi count");

  let htmlString = featuredProductItemTemplate(count);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  featuredProductDOM.appendChild(htmlFragment);
};

fetchFoodList();

////////////////////////////NEW

const featuredProductDOM = document.getElementById("pendingOrders");

const featuredPendingOrderTemplate = (orders) => {
  return `
    <!-- small box -->
      <div class="small-box bg-warning">
        <div class="inner">
          <h3>${orders}</h3>

          <p>Registered Users</p>
        </div>
        <div class="icon">
          <i class="ion ion-person-add"></i>
        </div>
        <a href="/AllUsers.html" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
       </div>

    `;
};

// GET

// Get All Checkouts
// http://intriobasket.pexceptos.com/api/checkout/get-all

// GET

// Get All Users
// http://intriobasket.pexceptos.com/api/user/

const fetchPendingOrderList = async () => {
  const endpoint = "/admin/orders?status=Pending"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TO DO: handle errors..

  const count = res.payload.length;

  console.log(res.payload.length);
  console.log("hi  Pending orders");

  let htmlString = featuredPendingOrderTemplate(orders);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  featuredProductDOM.appendChild(htmlFragment);
};

fetchPendingOrderList();

/////////////////////////////END NEW

const featuredProductsDOM = document.getElementById("allCheckout");

const featuredProductItemTemplates = (checks) => {
  return `
    <!-- small box -->
    <div class="small-box bg-success">
      <div class="inner">
        <h3>${checks}</h3>

        <p>All checkouts</p>
      </div>
      <div class="icon">
        <i class="ion ion-stats-bars"></i>
      </div>
      <a href="../AllCheckouts.html" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
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
  const endpoint = "/checkout/get-all"; // ADD CHECKOUTS ENDPOINT HERE // http://intriobasket.pexceptos.com/api/checkout/get-all
  const res = await api.request(endpoint); // TODO: handle errors..

  const checks = res.payload.length;

  console.log(res.payload.length);
  console.log("checkouts");
  console.log(res.payload);
  console.log(res.payload);

  let htmlString = featuredProductItemTemplates(checks);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  featuredProductsDOM.appendChild(htmlFragment);
};

fetchFoodLists();

const featuredProductsSDOM = document.getElementById("totalProducts");

const featuredProductItemTemplatesS = (totals) => {
  return `
    <!-- small box -->
    <div class="small-box bg-danger">
      <div class="inner">
        <h3>${totals}</h3>

        <p>Products Available</p>
      </div>
      <div class="icon">
        <i class="ion ion-pie-graph"></i>
      </div>
      <a href="../shop.html" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>

    `;
};

// GET

// Get All Checkouts
// http://intriobasket.pexceptos.com/api/checkout/get-all

// GET

// Get All Users
// http://intriobasket.pexceptos.com/api/user/

const fetchFoodListsS = async () => {
  const endpoint = "/food"; // ADD CHECKOUTS ENDPOINT HERE // http://intriobasket.pexceptos.com/api/checkout/get-all
  const res = await api.request(endpoint); // TODO: handle errors..

  const totals = res.payload.length;

  console.log(res.payload.length);
  console.log("hi count");

  let htmlString = featuredProductItemTemplatesS(totals);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  featuredProductsSDOM.appendChild(htmlFragment);
};

fetchFoodListsS();

//CHECKOUT HISTORY FUNCTION

//USER REGISTRATION HISTORY FUNCTION : onclick =>more info

const AdminNameDOM = document.getElementById("AdminName");
console.log("USERNAMEEEEEEE");

let adminName = localStorage.getItem("adminName");
console.log({ adminName });

const userNameTemplate = (adminName) => {
  return `
  <div class="info">
  <a href="javascript:void()" class="d-block">Admin ${adminName}</a>
</div>

    `;
};

const DisplayUserNameTemplate = () => {
  let htmlString = userNameTemplate(adminName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  AdminNameDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE");
};

DisplayUserNameTemplate();

//username Mobile
const adminNameMobileDOM = document.getElementById("userNameMobile");

const userNameMobileTemplate = (adminName) => {
  return `<div class="info">
  <a href="javascript:void()" class="d-block">Admin</a>
</div>
    `;
};

const DisplayUserNameMobileTemplate = () => {
  let htmlString = userNameMobileTemplate(adminName);
  let htmlFragment = document.createElement("div");
  htmlFragment.innerHTML = htmlString;
  adminNameMobileDOM.appendChild(htmlFragment);

  console.log("USERNAMEEEEEEE mobile");
  console.log(name);
};

DisplayUserNameMobileTemplate();
