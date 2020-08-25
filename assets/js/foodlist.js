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
      p.textContent = cost;

      const img = document.createElement("img");
      img.setAttribute("class", "product-img");

      // image_link = image_link.substring(0, 300);
      img.src = `${image_link}...`;

      console.log(image_link);

      containers.appendChild(card);
      card.appendChild(img);
      card.appendChild(h6);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();

// Create element and append the value to it
