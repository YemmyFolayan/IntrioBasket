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
    data.payload.forEach(({ product_type, cost }) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h6 = document.createElement("h6");
      h6.textContent = product_type;

      const p = document.createElement("p");

      // cost = cost.substring(0, 300);
      p.textContent = `${cost}...`;

      console.log(cost);

      containers.appendChild(card);
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
