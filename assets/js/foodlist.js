const app = document.getElementById("root");

const containers = document.createElement("div");
containers.setAttribute("class", "containers");

app.appendChild(containers);

var request = new XMLHttpRequest();
request.open("GET", "http://intriobasket.pexceptos.com/api/food", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    data.payload.forEach(({ food_product_name, image_link, cost }) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h6 = document.createElement("h6");
      h6.textContent = food_product_name;

      const p = document.createElement("p");
      p.textContent = `#${cost}`;

      const img = document.createElement("img");
      img.setAttribute("class", "product-img");

      // image_link = image_link.substring(0, 300);
      img.src = `${image_link}...`;

      const carty = document.createElement("div");
      carty.setAttribute("class", "product-select");

      const addcart = document.createElement("button");
      addcart.setAttribute("class", "add-to-cart");

      const addlist = document.createElement("button");
      addlist.setAttribute("class", "add-to-wishlist");

      const addcomp = document.createElement("button");
      addcomp.setAttribute("class", "add-to-compare");

      const addview = document.createElement("button");
      addview.setAttribute("class", "quickview");

      // <button class="add-to-wishlist round-icon-btn"> <i class="icon_heart_alt"></i></button>
      // <button class="add-to-cart round-icon-btn">  <i class="icon_bag_alt"></i></button>
      // <button class="add-to-compare round-icon-btn"><i class="fas fa-random"></i></button>
      // <button class="quickview round-icon-btn"> <i class="far fa-eye"></i></button>

      console.log(image_link);

      containers.appendChild(card);
      card.appendChild(img);
      card.appendChild(h6);
      card.appendChild(p);
      card.appendChild(carty);
      carty.appendChild(addcart);
      carty.appendChild(addlist);
      carty.appendChild(addcomp);
      carty.appendChild(addview);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();

// Create element and append the value to it
