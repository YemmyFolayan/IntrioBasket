const app = document.getElementById("root");

// const subcontainer = document.createElement("div");
// subcontainer.setAttribute("class", "displayflex");

// container.appendChild(subcontainer);

const url =
  "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food";
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
      .slice(0, 2);

    console.log(top10);
    // if (request.status >= 200 && request.status < 400) {
    top10.forEach(({ food_product_name, image_link, cost }) => {
      const container = document.createElement("div");
      container.setAttribute("class", "product");

      const productdetails = document.createElement("a");
      productdetails.setAttribute("class", "product-img");
      productdetails.setAttribute("href", "shop_detail.html");

      const img = document.createElement("img");
      img.setAttribute("alt", "product");
      img.src = `${image_link}...`;

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
    });
  });

// // // // // const app = document.getElementById("root");
// // // // // const container = document.createElement("div");
// // // // // container.setAttribute("class", "row no-gutters-sm");

// // // // // const subcontainer = document.createElement("div");
// // // // // subcontainer.setAttribute("class", "col-6 col-md-4 col-lg-3");

// // // // // app.appendChild(container);
// // // // // container.appendChild(subcontainer);

// // // //  const url =
// // // //    "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food";
// // // // // console.log("foodlists");

// // // // // const cachedFetch = (url, options) => {
// // // // //   console.log("casched fetch");
// // // // //   let expiry = 5 * 60; // 5 min default
// // // // //   if (typeof options === "number") {
// // // // //     expiry = options;
// // // // //     options = undefined;
// // // // //   } else if (typeof options === "object") {
// // // // //     // I hope you didn't set it to 0 seconds
// // // // //     expiry = options.seconds || expiry;
// // // // //   }
// // // // //   // Use the URL as the cache key to sessionStorage
// // // // //   let cacheKey = url;
// // // // //   let cached = localStorage.getItem(cacheKey);
// // // // //   let whenCached = localStorage.getItem(cacheKey + ":ts");
// // // // //   if (cached !== null && whenCached !== null) {
// // // // //     // it was in sessionStorage! Yay!
// // // // //     // Even though 'whenCached' is a string, this operation
// // // // //     // works because the minus sign converts the
// // // // //     // string to an integer and it will work.
// // // // //     let age = (Date.now() - whenCached) / 1000;
// // // // //     if (age < expiry) {
// // // // //       let response = new Response(new Blob([cached]));
// // // // //       return Promise.resolve(response);
// // // // //     } else {
// // // // //       // We need to clean up this old key
// // // // //       localStorage.removeItem(cacheKey);
// // // // //       localStorage.removeItem(cacheKey + ":ts");
// // // // //     }
// // // // //   }
// // // // //   console.log("before return");

// // // // //   return fetch(
// // // // //     "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food",
// // // // //     options
// // // // //   ).then((response) => {
// // // // //     // let's only store in cache if the content-type is
// // // // //     // JSON or something non-binary

// // // // //     console.log("after return");
// // // // //     if (response.status === 200) {
// // // // //       let ct = response.headers.get("Content-Type");

// // // // //       console.log("if after ret");
// // // // //       if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
// // // // //         // There is a .json() instead of .text() but
// // // // //         // we're going to store it in sessionStorage as
// // // // //         // string anyway.
// // // // //         // If we don't clone the response, it will be
// // // // //         // consumed by the time it's returned. This
// // // // //         // way we're being un-intrusive.
// // // // //         console.log("if");
// // // // //         response
// // // // //           .clone()
// // // // //           .text()
// // // // //           .then((data) => {
// // // // //             localStorage.setItem(cacheKey, data);
// // // // //             localStorage.setItem(cacheKey + ":ts", Date.now());
// // // // //             data.payload.forEach(({ food_product_name, image_link, cost }) => {
// // // // //               const product = document.createElement("div");
// // // // //               product.setAttribute("class", "product");

// // // // //               const img = document.createElement("img");
// // // // //               img.setAttribute("class", "product-img");
// // // // //               img.src = `${image_link}...`;

// // // // //               const h5 = document.createElement("h5");
// // // // //               h5.textContent = food_product_name;

// // // // //               console.log(food_product_name);

// // // // //               console.log("food name");

// // // // //               h5.setAttribute("class", "product-type");

// // // // //               const h3cost = document.createElement("h3");
// // // // //               h3cost.textContent = food_product_name;

// // // // //               h3cost.setAttribute("class", "product-name");

// // // // //               const h3 = document.createElement("h3");
// // // // //               h3.textContent = `#${cost}`;

// // // // //               console.log(cost);

// // // // //               h3.setAttribute("class", "product-price");

// // // // //               const productselect = document.createElement("div");
// // // // //               productselect.setAttribute("class", "product-select");

// // // // //               const addlist = document.createElement("button");
// // // // //               addlist.setAttribute("class", "add-to-wishlist round-icon-btn");

// // // // //               const iconlist = document.createElement("i");
// // // // //               iconlist.setAttribute("class", "icon_heart_alt");

// // // // //               const addcart = document.createElement("button");
// // // // //               addcart.setAttribute("class", "add-to-cart round-icon-btn");

// // // // //               const iconcart = document.createElement("i");
// // // // //               iconcart.setAttribute("class", "icon_bag_alt");

// // // // //               const addcomp = document.createElement("button");
// // // // //               addcomp.setAttribute("class", "add-to-compare round-icon-btn");

// // // // //               const iconcomp = document.createElement("i");
// // // // //               iconcomp.setAttribute("class", "fas fa-random");

// // // // //               const addview = document.createElement("button");
// // // // //               addview.setAttribute("class", "quickview round-icon-btn");

// // // // //               const iconview = document.createElement("i");
// // // // //               iconview.setAttribute("class", "far fa-eye");

// // // // //               subcontainer.appendChild(product);

// // // // //               product.appendChild(img);
// // // // //               product.appendChild(h5);

// // // // //               product.appendChild(h3cost);

// // // // //               product.appendChild(h3);

// // // // //               product.appendChild(productselect);

// // // // //               productselect.appendChild(addlist);

// // // // //               addlist.appendChild(iconlist);
// // // // //               console.log("food name");

// // // // //               productselect.appendChild(addcart);

// // // // //               addcart.appendChild(iconcart);

// // // // //               productselect.appendChild(addcomp);

// // // // //               addcomp.appendChild(iconcomp);

// // // // //               productselect.appendChild(addview);

// // // // //               addview.appendChild(iconview);
// // // // //             });
// // // // //           });
// // // // //       }
// // // // //     }
// // // // //   });
// // // // // };

// // // //  Default 5 min
// // // // // cachedFetch(
// // // // //   "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food"
// // // // // )
// // // // //   .then((response) => response.json())
// // // // //   .then((data) => {
// // // // //     console.log("Your origin is " + data);
// // // // //   });

// // // //  2 minutes
// // // // // cachedFetch(
// // // // //   "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food",
// // // // //   2 * 60
// // // // // )
// // // // //   .then((response) => response.json())
// // // // //   .then((info) => {
// // // // //     console.log("Your origin (with gzip) is " + info.origin);
// // // // //   });

// // // //  1 minute
// // // // // cachedFetch(
// // // // //   "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food",
// // // // //   { seconds: 60 }
// // // // // )
// // // // //   .then((r) => r.json())
// // // // //   .then((info) => {
// // // // //     console.log("Your origin (by ip only) is " + info.origin);
// // // // //   });

// // // //  const cachedFetch = (url, options) => {
// // // //    let expiry = 5 * 60 // 5 min default
// // // //    if (typeof options === 'number') {
// // // //      expiry = options
// // // //      options = undefined
// // // //    } else if (typeof options === 'object') {
// // // //      // I hope you didn't set it to 0 seconds
// // // //      expiry = options.seconds || expiry
// // // //    }
// // // //    // Use the URL as the cache key to sessionStorage
// // // //    let cacheKey = url
// // // //    let cached = localStorage.getItem(cacheKey)
// // // //    let whenCached = localStorage.getItem(cacheKey + ':ts')
// // // //    if (cached !== null && whenCached !== null) {
// // // //      // it was in sessionStorage! Yay!
// // // //      // Even though 'whenCached' is a string, this operation
// // // //      // works because the minus sign tries to convert the
// // // //      // string to an integer and it will work.
// // // //      let age = (Date.now() - whenCached) / 1000
// // // //      if (age < expiry) {
// // // //        let response = new Response(new Blob([cached]))
// // // //        return Promise.resolve(response)
// // // //      } else {
// // // //        // We need to clean up this old key
// // // //        localStorage.removeItem(cacheKey)
// // // //        localStorage.removeItem(cacheKey + ':ts')
// // // //      }
// // // //    }

// // // //    return fetch(url, options).then(response => {
// // // //      // let's only store in cache if the content-type is
// // // //      // JSON or something non-binary
// // // //      if (response.status === 200) {
// // // //        let ct = response.headers.get('Content-Type')
// // // //        if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
// // // //          // There is a .json() instead of .text() but
// // // //          // we're going to store it in sessionStorage as
// // // //          // string anyway.
// // // //          // If we don't clone the response, it will be
// // // //          // consumed by the time it's returned. This
// // // //          // way we're being un-intrusive.
// // // //          response.clone().text().then(content => {
// // // //            localStorage.setItem(cacheKey, content)
// // // //            localStorage.setItem(cacheKey + ':ts', Date.now())
// // // //          })
// // // //        }
// // // //      }
// // // //      return response
// // // //    })
// // // //  }

// // // //  // Default 5 min
// // // //  cachedFetch('https://httpbin.org/get')
// // // //    .then(r => r.json())
// // // //    .then(info => {
// // // //      console.log('Your origin is ' + info.origin)
// // // //    })

// // // //  // 2 minutes
// // // //  cachedFetch('http://httpbin.org/gzip', 2 * 60)
// // // //    .then(r => r.json())
// // // //    .then(info => {
// // // //      console.log('Your origin (with gzip) is ' + info.origin)
// // // //    })

// // // //  // 1 minute
// // // //  cachedFetch('http://httpbin.org/ip', { seconds: 60 })
// // // //    .then(r => r.json())
// // // //    .then(info => {
// // // //      console.log('Your origin (by ip only) is ' + info.origin)
// // // //    })

// // // //  cachedFetch('https://httpbin.org/html')
// // // //  .then(r => r.text())
// // // //  .then(document => {
// // // //    console.log('Document has ' + document.match(/<p>/).length + ' paragraphs')
// // // //  })

// // // //  cachedFetch('https://httpbin.org/image/png')
// // // //  .then(r => r.blob())
// // // //  .then(image => {
// // // //    console.log('Image is ' + image.size + ' bytes')
// // // //  })

// // // //  // const app = document.getElementById("root");

// // // //  // const container = document.createElement("div");
// // // //  // container.setAttribute("class", "row no-gutters-sm");

// // // //  // const subcontainer = document.createElement("div");
// // // //  // subcontainer.setAttribute("class", "col-6 col-md-4 col-lg-3");

// // // //  // app.appendChild(container);
// // // //  // container.appendChild(subcontainer);

// // // //  // const url =
// // // //  //   "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food";
// // // //  // console.log("foodlists");

// // // //  // fetch(url)
// // // //  //   .then((response) => {
// // // //  if (response.ok) {
// // // //    return response.json();
// // // //  } else {
// // // //    reject(response);
// // // //  }
// // // //  //   })
// // // //  //   .then((data) => {
// // // //  // if (request.status >= 200 && request.status < 400) {
// // // //  data.payload.forEach(({ food_product_name, image_link, cost }) => {
// // // //    const product = document.createElement("div");
// // // //    product.setAttribute("class", "product");

// // // //    const img = document.createElement("img");
// // // //    img.setAttribute("class", "product-img");
// // // //    img.src = `${image_link}...`;

// // // //    const h5 = document.createElement("h5");
// // // //    h5.textContent = food_product_name;

// // // //    h5.setAttribute("class", "product-type");

// // // //    const h3cost = document.createElement("h3");
// // // //    h3cost.textContent = food_product_name;

// // // //    h3cost.setAttribute("class", "product-name");

// // // //    const h3 = document.createElement("h3");
// // // //    h3.textContent = `#${cost}`;

// // // //    h3.setAttribute("class", "product-price");

// // // //    const productselect = document.createElement("div");
// // // //    productselect.setAttribute("class", "product-select");

// // // //    const addlist = document.createElement("button");
// // // //    addlist.setAttribute("class", "add-to-wishlist round-icon-btn");

// // // //    const iconlist = document.createElement("i");
// // // //    iconlist.setAttribute("class", "icon_heart_alt");

// // // //    const addcart = document.createElement("button");
// // // //    addcart.setAttribute("class", "add-to-cart round-icon-btn");

// // // //    const iconcart = document.createElement("i");
// // // //    iconcart.setAttribute("class", "icon_bag_alt");

// // // //    const addcomp = document.createElement("button");
// // // //    addcomp.setAttribute("class", "add-to-compare round-icon-btn");

// // // //    const iconcomp = document.createElement("i");
// // // //    iconcomp.setAttribute("class", "fas fa-random");

// // // //    const addview = document.createElement("button");
// // // //    addview.setAttribute("class", "quickview round-icon-btn");

// // // //    const iconview = document.createElement("i");
// // // //    iconview.setAttribute("class", "far fa-eye");

// // // //    subcontainer.appendChild(product);

// // // //    product.appendChild(img);
// // // //    product.appendChild(h5);

// // // //    product.appendChild(h3cost);

// // // //    product.appendChild(h3);

// // // //    product.appendChild(productselect);

// // // //    productselect.appendChild(addlist);

// // // //    addlist.appendChild(iconlist);

// // // //    productselect.appendChild(addcart);

// // // //    addcart.appendChild(iconcart);

// // // //    productselect.appendChild(addcomp);

// // // //    addcomp.appendChild(iconcomp);

// // // //    productselect.appendChild(addview);

// // // //    addview.appendChild(iconview);
// // // //  });
// // // //  //   });

// // // //  //   card.appendChild(p);
// // // //  //   card.appendChild(carty);
// // // //  //   carty.appendChild(addcart);
// // // //  //   carty.appendChild(addlist);
// // // //  //   carty.appendChild(addcomp);
// // // //  //   carty.appendChild(addview);
// // // //  // });
// // // //     });

// // // //     // Begin accessing JSON data here

// // // //   <div class="row no-gutters-sm">
// // // //   <div class="col-6 col-md-4 col-lg-3">
// // // //  // <div class="product">
// // // //  // <a class="product-img" href="shop_detail.html"><img src="assets/images/product/product01.png" alt=""></a>
// // // //  // <h5 class="product-type">Oranges</h5>
// // // //  // <h3 class="product-name">Pure Pineapple</h3>
// // // //  // <h3 class="product-price">#14.00

// // // //  // </h3>
// // // //  // <div class="product-select">
// // // //  //   <button class="add-to-wishlist round-icon-btn"> <i class="icon_heart_alt"></i></button>
// // // //  //   <button class="add-to-cart round-icon-btn">  <i class="icon_bag_alt"></i></button>
// // // //  //   <button class="add-to-compare round-icon-btn"><i class="fas fa-random"></i></button>
// // // //  //   <button class="quickview round-icon-btn"> <i class="far fa-eye"></i></button>

// // // //   const app = document.getElementById("root");

// // // //   const containers = document.createElement("div");
// // // //   containers.setAttribute("class", "containers");

// // // //   app.appendChild(containers);

// // // //   const url =
// // // //     "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food";
// // // //   console.log("foodlists");

// // // //   fetch(url)
// // // //     .then((response) => {
// // // //  // if (response.ok) {
// // // //  //   return response.json();
// // // //  // } else {
// // // //  //   reject(response);
// // // //  // }
// // // //     })
// // // //     .then((data) => {
// // // //   if (request.status >= 200 && request.status < 400) {
// // // //  // data.payload.forEach(({ food_product_name, image_link, cost }) => {
// // // //  //   const card = document.createElement("div");
// // // //  //   card.setAttribute("class", "card");

// // // //  //   const h6 = document.createElement("h6");
// // // //  //   h6.textContent = food_product_name;

// // // //  //   const p = document.createElement("p");
// // // //  //   p.textContent = `#${cost}`;

// // // //  //   // console.log(cost);

// // // //  //   const img = document.createElement("img");
// // // //  //   img.setAttribute("class", "product-img");

// // // //  //   // image_link = image_link.substring(0, 300);
// // // //  //   img.src = `${image_link}...`;

// // // //  //   const carty = document.createElement("div");
// // // //  //   carty.setAttribute("class", "product-select");

// // // //  //   const addcart = document.createElement("button");
// // // //  //   addcart.setAttribute("class", "icon_bag_alt");

// // // //  //   const addlist = document.createElement("button");
// // // //  //   addlist.setAttribute("class", "icon_heart_alt");

// // // //  //   const addcomp = document.createElement("button");
// // // //  //   addcomp.setAttribute("class", "fas fa-random");

// // // //  //   const addview = document.createElement("button");
// // // //  //   addview.setAttribute("class", "far fa-eye");

// // // //  //   // <button class="add-to-wishlist round-icon-btn"> <i class="icon_heart_alt"></i></button>
// // // //  //   // <button class="add-to-cart round-icon-btn">  <i class="icon_bag_alt"></i></button>
// // // //  //   // <button class="add-to-compare round-icon-btn"><i class="fas fa-random"></i></button>
// // // //  //   // <button class="quickview round-icon-btn"> <i class="far fa-eye"></i></button>

// // // //  //   // console.log(image_link);

// // // //  //   containers.appendChild(card);
// // // //  //   card.appendChild(img);
// // // //  //   card.appendChild(h6);
// // // //  //   card.appendChild(p);
// // // //  //   card.appendChild(carty);
// // // //  //   carty.appendChild(addcart);
// // // //  //   carty.appendChild(addlist);
// // // //  //   carty.appendChild(addcomp);
// // // //  //   carty.appendChild(addview);
// // // //  // });
// // // //     });

// // // //  const cachedFetch = (url, options) => {
// // // //    let expiry = 5 * 60 // 5 min default
// // // //    if (typeof options === 'number') {
// // // //      expiry = options
// // // //      options = undefined
// // // //    } else if (typeof options === 'object') {
// // // //      // I hope you didn't set it to 0 seconds
// // // //      expiry = options.seconds || expiry
// // // //    }
// // // //    // Use the URL as the cache key to sessionStorage
// // // //    let cacheKey = url
// // // //    let cached = localStorage.getItem(cacheKey)
// // // //    let whenCached = localStorage.getItem(cacheKey + ':ts')
// // // //    if (cached !== null && whenCached !== null) {
// // // //      // it was in sessionStorage! Yay!
// // // //      // Even though 'whenCached' is a string, this operation
// // // //      // works because the minus sign converts the
// // // //      // string to an integer and it will work.
// // // //      let age = (Date.now() - whenCached) / 1000
// // // //      if (age < expiry) {
// // // //        let response = new Response(new Blob([cached]))
// // // //        return Promise.resolve(response)
// // // //      } else {
// // // //        // We need to clean up this old key
// // // //        localStorage.removeItem(cacheKey)
// // // //        localStorage.removeItem(cacheKey + ':ts')
// // // //      }
// // // //    }

// // // //    return fetch(url, options).then(response => {
// // // //      // let's only store in cache if the content-type is
// // // //      // JSON or something non-binary
// // // //      if (response.status === 200) {
// // // //        let ct = response.headers.get('Content-Type')
// // // //        if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
// // // //          // There is a .json() instead of .text() but
// // // //          // we're going to store it in sessionStorage as
// // // //          // string anyway.
// // // //          // If we don't clone the response, it will be
// // // //          // consumed by the time it's returned. This
// // // //          // way we're being un-intrusive.
// // // //          response.clone().text().then(content => {
// // // //            localStorage.setItem(cacheKey, content)
// // // //            localStorage.setItem(cacheKey+':ts', Date.now())
// // // //          })
// // // //        }
// // // //      }
// // // //      return response
// // // //    })

//LATEST

// const app = document.getElementById("root");

// const container = document.createElement("div");
// container.setAttribute("class", "row no-gutters-sm");

// const subcontainer = document.createElement("div");
// subcontainer.setAttribute("class", "displayflex");

// app.appendChild(container);
// container.appendChild(subcontainer);

// const url =
//   "https://cors-anywhere.herokuapp.com/http://intriobasket.pexceptos.com/api/food";
// console.log("foodlists");

// fetch(url)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       reject(response);
//     }
//   })
//   .then((data) => {
//     // First, parse the JSON into an array of Objects:

//     // var data = JSON.parse(json);

//     // Then combine sort and slice to achieve your goal:
//     var top10 = data.payload
//       .sort(function (a, b) {
//         return a.Variable1 < b.Variable1 ? 1 : -1;
//       })
//       .slice(0, 2);

//     console.log(top10);
//     // if (request.status >= 200 && request.status < 400) {
//     top10.forEach(({ food_product_name, image_link, cost }) => {
//       const product = document.createElement("div");
//       product.setAttribute("class", "product");

//       const img = document.createElement("img");
//       img.setAttribute("class", "product-img");
//       img.src = `${image_link}...`;

//       const h5 = document.createElement("h5");
//       h5.textContent = food_product_name;

//       h5.setAttribute("class", "product-type");

//       const h3cost = document.createElement("h3");
//       h3cost.textContent = food_product_name;

//       h3cost.setAttribute("class", "product-name");

//       const h3 = document.createElement("h3");
//       h3.textContent = `NGN ${cost}`;

//       h3.setAttribute("class", "product-price");

//       const productselect = document.createElement("div");
//       productselect.setAttribute("class", "product-select");

//       const addlist = document.createElement("button");
//       addlist.setAttribute("class", "add-to-wishlist round-icon-btn");

//       const iconlist = document.createElement("i");
//       iconlist.setAttribute("class", "icon_heart_alt");

//       const addcart = document.createElement("button");
//       addcart.setAttribute("class", "add-to-cart round-icon-btn");

//       const iconcart = document.createElement("i");
//       iconcart.setAttribute("class", "icon_bag_alt");

//       const addcomp = document.createElement("button");
//       addcomp.setAttribute("class", "add-to-compare round-icon-btn");

//       const iconcomp = document.createElement("i");
//       iconcomp.setAttribute("class", "fas fa-random");

//       const addview = document.createElement("button");
//       addview.setAttribute("class", "quickview round-icon-btn");

//       const iconview = document.createElement("i");
//       iconview.setAttribute("class", "far fa-eye");

//       subcontainer.appendChild(product);

//       product.appendChild(img);
//       product.appendChild(h5);

//       product.appendChild(h3cost);

//       product.appendChild(h3);

//       product.appendChild(productselect);

//       productselect.appendChild(addlist);

//       addlist.appendChild(iconlist);

//       productselect.appendChild(addcart);

//       addcart.appendChild(iconcart);

//       productselect.appendChild(addcomp);

//       addcomp.appendChild(iconcomp);

//       productselect.appendChild(addview);

//       addview.appendChild(iconview);
//     });
//   });
