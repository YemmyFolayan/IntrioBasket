var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  fetch(
    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/user/login",
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      var msg = text.message;


      if (msg =="Log in Successful") {
        window.location.assign('/index.html');
        localStorage.setItem('login', true);
        console.log("logged in");
      }
      else {
     
       
        console.log("not looged in");

      }
   

      
    });
});

console.log(data);
console.log("hi");

// window.addEventListener("load", function () {
//   const activateLoginApicall = () => {
//     const formElement = document.getElementById("form");
//     // 'email' is the value of the email attribute of the input element for email
//     // 'password' is the value of the email attribute of the input element for password
//     const email = formElement.elements["email"].value;
//     const password = formElement.elements["password"].value;
//     console.log(password);
//     const url = "http://intriobasket.pexceptos.com/api/user/login";

//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "post",
//         body: {
//           email,
//           password,
//         },
//       })
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             reject(response);
//           }
//         })
//         .then((data) => resolve(data))
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   };
// });
// const loginsss = async (event) => {
//   event.preventDefault();
//   try {
//     const data = await activateLoginApicall();

//     //whatever you want to do with data
//   } catch (error) {
//     //oops error, whatever you want to do with the error
//   }
// };

// // <form id="myForm">
// //   <label for="myemail">Send me your email:</label>
// //   <input id="myemail" email="email" value="John">
// //   <input type="submit" value="Send Me!">
// // </form>

// // window.addEventListener( "load", function () {
// //   function sendData() {
// //     const XHR = new XMLHttpRequest();

// //     // Bind the FormData object and the form element
// //     const FD = new FormData( form );

// //     // Define what happens on successful data submission
// //     XHR.addEventListener( "load", function(event) {
// //       alert( event.target.responseText );
// //     } );

// //     // Define what happens in case of error
// //     XHR.addEventListener( "error", function( event ) {
// //       alert( 'Oops! Something went wrong.' );
// //     } );

// //     // Set up our request
// //     XHR.open( "POST", "https://example.com/cors.php" );

// //     // The data sent is what the user provided in the form
// //     XHR.send( FD );
// //   }

// //   // Access the form element...
// //   const form = document.getElementById( "myForm" );

// //   // ...and take over its submit event.
// //   form.addEventListener( "submit", function ( event ) {
// //     event.preventDefault();

// //     sendData();
// //   } );
// // } );

// // /////////////////////

// // <form  id="postData">
// //     <div>
// //         <input type="text" email="" id="tittle">
// //     </div>
// //     <div>
// //         <textarea email="" id="body" cols="20" rows="5"></textarea>
// //     </div>
// //     <input type="submit" value="SEND POST">
// // </form>

// // document.getElementById('postData').addEventListener('submit', postData);

// // function postData(event){
// //             event.preventDefault();

// //             let tittle = document.getElementById('tittle').value;
// //             let body = document.getElementById('body').value;

// //             fetch('https://jsonplaceholder.typicode.com/posts', {
// //                 method: 'POST',
// //                 headers : new Headers(),
// //                 body:JSON.stringify({tittle:tittle, body:body})
// //             }).then((res) => res.json())
// //             .then((data) =>  console.log(data))
// //             .catch((err)=>console.log(err))
// //         }
