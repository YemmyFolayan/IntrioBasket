// const fetchHelper = ("http://intriobasket.pexceptos.com/api/user/create", config = {}) => {
//      const token = localStorage.getItem("token")
//      return fetch(
//      "http://intriobasket.pexceptos.com/api/user/create",
//      { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } })
// }

fetch("http://intriobasket.pexceptos.com/api/user/create", {
  method: "POST",
  body:
    "title=" +
    encodeURIComponent("My awesome new article") +
    "&body=" +
    encodeURIComponent("This is the text of my article"),
})
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
