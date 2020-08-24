const app = document.getElementById("root");

const containers = document.createElement("div");
containers.setAttribute("class", "containers");



app.appendChild(containers);

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    //movie is self define parameter to loop through each of the json data
    // to get each properties
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h6 = document.createElement("h6");
      h6.textContent = movie.title;

      const p = document.createElement("p");
      p.class = "fooddetails";
      // p.id = 'food';
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

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


















// const app = document.getElementById("root");

// const containers = document.createElement("div");
// containers.setAttribute("class", "containers");

// app.appendChild(containers);

// var request = new XMLHttpRequest();
// request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     //movie is self define parameter to loop through each of the json data
//     // to get each properties
//     data.forEach((movie) => {
//       const card = document.createElement("div");
//       card.setAttribute("class", "card");

//       const h6 = document.createElement("h6");
//       h6.textContent = movie.title;

//       const p = document.createElement("p");
//       p.class = "fooddetails";
//       // p.id = 'food';
//       movie.description = movie.description.substring(0, 300);
//       p.textContent = `${movie.description}...`;

//       containers.appendChild(card);
//       card.appendChild(h6);
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement("marquee");
//     errorMessage.textContent = `Gah, it's not working!`;
//     app.appendChild(errorMessage);
//   }
// };

// request.send();
