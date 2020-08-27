var form = document.getElementById('form');

form.addEventListener('submit' , function(e) {

    e.preventDefault();

    var name = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;

    console.log(password);

    fetch("http://intriobasket.pexceptos.com/api/user/create", {
        method: 'POST',
        body: JSON.stringify({
            username: name,
            passcode : password
        }),
        headers: {
            "Content-Type": "application/json; charset= UTF-8"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        console.log(data);
    })
}








// // const activateLoginApicall = () => {
// const formElement = document.getElementById("form");

// // 'email' is the value of the name attribute of the input element for email
// // 'password' is the value of the name attribute of the input element for password
// //  const email = formElement.elements["email"].value;
// //  const password = formElement.elements["password"].value;
// //  console.log(email);
// //  console.log(formElement);
// const url = "http://intriobasket.pexceptos.com/api/user/create";

// formElement
//   .addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//       const searchParams = new URLSearchParams();
      
//     return new Promise((resolve, reject) => {

//     fetch(url, {
//       method: "post",
//       body: searchParams,
//     }).then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         reject(response);
//       }
//     });
//   })
//   .then((data) => resolve(data))
//   .catch((err) => {
//     reject(err);
//   });

// //  console.log(formData);
// //    return new Promise((resolve, reject) => {
// //      fetch(url, {
// //        method: "POST",
// //        body: search,
// //      })
// //        .then((response) => {
// //          if (response.ok) {
// //            return response.json();
// //          } else {
// //            reject(response);
// //          }
// //        })
// //        .then((data) => resolve(data))
// //        log
// //        .catch((err) => {
// //          reject(err);
// //        });
// //    });
// //  };

// //  const login = async (event) => {
// //    event.preventDefault();
// //    try {
// //      const data = await activateLoginApicall();

// //      //whatever you want to do with data
// //    } catch (error) {
// //      //oops error, whatever you want to do with the error
// //    }
// //  };

//  const fetchHelper = ("http://intriobasket.pexceptos.com/api/user/create", config = {}) => {
//       const token = localStorage.getItem("token")
//       return fetch(
//       "http://intriobasket.pexceptos.com/api/user/create",
//       { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } })
//  }
