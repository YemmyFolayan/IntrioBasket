const app = document.getElementById("root2");

// const subcontainer = document.createElement("div");
// subcontainer.setAttribute("class", "displayflex");

// container.appendChild(subcontainer);

const url =
  "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food/get?category_type=BAKING%20INGREDIENTS";
console.log("foodlists");

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      reject(response);
    }
  })
  .then((data) => {
    // First, parse the JSON into an array of Objects:

    // var data = JSON.parse(json);

    // Then combine sort and slice to achieve your goal:
    var top10 = data.payload
      .sort(function (a, b) {
        return a.Variable1 < b.Variable1 ? 1 : -1;
      })
      .slice(20, 30);

    console.log(top10);
    // if (request.status >= 200 && request.status < 400) {
    top10.forEach(({ food_product_name, image_link, cost }) => {
      const container = document.createElement("div");
      container.setAttribute("class", "product");

      const productdetails = document.createElement("a");
      productdetails.setAttribute("class", "product-img");
      productdetails.setAttribute("href", "shop_detail_fullwidth.html");

      const img = document.createElement("img");
      img.setAttribute("alt", "product");
      img.src = `${image_link}...`;

      //product details
      // const imagyy = document.getElementById("imagy");

      const h5 = document.createElement("h5");
      h5.textContent = food_product_name;

      h5.setAttribute("class", "product-type");

      const h3cost = document.createElement("h3");
      h3cost.textContent = food_product_name;

      h3cost.setAttribute("class", "product-name");

      const h3 = document.createElement("h3");
      h3.textContent = `NGN ${cost}`;

      h3.setAttribute("class", "product-price");

      const productselect = document.createElement("div");
      productselect.setAttribute("class", "product-select");

      const addlist = document.createElement("button");
      addlist.setAttribute("class", "add-to-wishlist round-icon-btn");

      const iconlist = document.createElement("i");
      iconlist.setAttribute("class", "icon_heart_alt");

      const addcart = document.createElement("button");
      addcart.setAttribute("class", "add-to-cart round-icon-btn");

      const iconcart = document.createElement("i");
      iconcart.setAttribute("class", "icon_bag_alt");

      const addcomp = document.createElement("button");
      addcomp.setAttribute("class", "add-to-compare round-icon-btn");

      const iconcomp = document.createElement("i");
      iconcomp.setAttribute("class", "fas fa-random");

      const addview = document.createElement("button");
      addview.setAttribute("class", "quickview round-icon-btn");

      const iconview = document.createElement("i");
      iconview.setAttribute("class", "far fa-eye");

      app.appendChild(container);

      container.appendChild(productdetails);

      productdetails.appendChild(img);
      container.appendChild(h5);

      container.appendChild(h3cost);

      container.appendChild(h3);

      container.appendChild(productselect);

      productselect.appendChild(addlist);

      addlist.appendChild(iconlist);

      productselect.appendChild(addcart);

      addcart.appendChild(iconcart);

      productselect.appendChild(addcomp);

      addcomp.appendChild(iconcomp);

      productselect.appendChild(addview);

      addview.appendChild(iconview);

      // imagyy.appendChild(img);
    });
  });
