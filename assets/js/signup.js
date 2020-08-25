// const activateLoginApicall = () => {
const formElement = document.getElementById("form");

  // 'email' is the value of the name attribute of the input element for email
  // 'password' is the value of the name attribute of the input element for password
const email = formElement.elements["email"].value;
const password = formElement.elements["password"].value;
console.log(email);
console.log(formElement);
const url = "http://intriobasket.pexceptos.com/api/user/create";

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then((data) => resolve(data))
      .catch((err) => {
        reject(err);
      });
  });
};

const login = async (event) => {
  event.preventDefault();
  try {
    const data = await activateLoginApicall();

    //whatever you want to do with data
  } catch (error) {
    //oops error, whatever you want to do with the error
  }
};

// const fetchHelper = ("http://intriobasket.pexceptos.com/api/user/create", config = {}) => {
//      const token = localStorage.getItem("token")
//      return fetch(
//      "http://intriobasket.pexceptos.com/api/user/create",
//      { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } })
// }