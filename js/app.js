//TODO : IMPLEMENT 7.5%tax on any purchase

// Functions to run once DOM is loaded
document.addEventListener(
	"DOMContentLoaded",
	() => {
		// updateCartButtonBadge
		updateCartButtonBadge();
	},
	false
);

/**
 * addToCart: This function adds products to user cart.
 * - Cart is persistent
 * 
 * Hook this  endpoint up with addtocart function to allow processing at the backend 
 * http://intriobasket.pexceptos.com/api/user/create-cart
 * 
 * Param purchase id = 5f4d0fd68cc9aa11e6151b88


 * @param {String} id 
 * @param {String} name 
 * @param {String} type 
 * @param {String} imageUrl 
 * @param {String} price 
 */
const addToCart = (id, name, type, imageUrl, price) => {
	const productDetails = { id, name, type, imageUrl, price, qty: 1 };

	if (localStorage.getItem(CONFIG.CART_STORE) === null) {
		const cartList = [];
		cartList.push(productDetails);
		localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
	} else {
		const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
		let index = cartList.findIndex(
			(cartItem) => cartItem.id === productDetails.id
		);
		if (index === -1) {
			cartList.push(productDetails);
		} else {
			cartList[index].qty =
				Number(cartList[index].qty) + Number(productDetails.qty);
		}

		localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
	}

	// updateCartButtonBadge
	updateCartButtonBadge();
};



//deleteCartItem (slice)


//Empty cart
const emptyCart = () => {
	const cartBadge = document.getElementById("emptyCartButton");
	window.localStorage.clear();

	const row = document.getElementById('shopCartTBody');
	row.parentNode.removeChild(row);


	updateCartButtonBadge();
};








/**
 * Update Cart Badge Function - Updates the Cart Button on the header section
 */
/**
 * 
PUT
Hook this  endpoint up with update cart function to allow processing at the backend 

Update User Checkout History
http://intriobasket.pexceptos.com/api/checkout/user/id



PUT

Update User Cart
http://intriobasket.pexceptos.com/api/user/update-cart/id

 */





const updateCartButtonBadge = () => {
	const cartBadge = document.getElementById("cartButtonBadge");
	const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

	if (cartList === null) {
		cartBadge.innerText = 0;
	} else {
		cartBadge.innerText = cartList.length;
	}
};

// Mini Router (refreshes the page)
//ROUTER for page redirect 
const router = (url) => {
	// Check for url
	if (typeof url === "undefined") throw new Error("Invalid URL!");

	let pageUrl = "";
	if (url.includes(".html")) {
		pageUrl = url;
	} else {
		pageUrl = url.concat(".html");
	}

	window.location.assign(pageUrl);
};






// <<<<<<< HEAD
// 	$("body").prepend('<div id="quickview"> <div class="quickview-box"> <button class="round-icon-btn" id="quickview-close-btn"><i class="fas fa-times"></i></button> <div class="row"> <div class="col-12 col-md-6"> <div class="shop-detail_img"> <button class="round-icon-btn" id="zoom-btn"> <i class="icon_zoom-in_alt"></i></button> <div class="big-img big-img_qv"> <div class="big-img_block"><img src="+${productDetails.imageUrl}+" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div><div class="slide-img slide-img_qv"> <div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div></div></div><div class="col-12 col-md-6"> <div class="shop-detail_info"> <h5 class="product-type color-type">` ${productDetails.type} `</h5><a class="product-name" href="shop_detail.html">${productDetails.name}</a> <div class="price-rate"> <h3 class="product-price">${productDetails.name}</h3> </div><p class="product-describe"> ${productDetails.description}</p><div class="quantity-select"> <label for="quantity">Quantity:</label> <input class="no-round-input" id="quantity" type="number" min="0" value="1"> </div><div class="product-select"> <button class="add-to-cart normal-btn outline">Add to Cart</button> <button class="add-to-compare normal-btn outline">+ Add to Compare</button> </div><div class="product-share"> <h5>Share link:</h5><a href=""><i class="fab fa-facebook-f"> </i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fab fa-invision"> </i></a><a href=""><i class="fab fa-pinterest-p"></i></a> </div></div></div></div></div></div>');
// =======
// 			$("body").prepend(`<div id="quickview"> <div class="quickview-box"> <button class="round-icon-btn" id="quickview-close-btn"><i class="fas fa-times"></i></button> <div class="row"> <div class="col-12 col-md-6"> <div class="shop-detail_img"> <button class="round-icon-btn" id="zoom-btn"> <i class="icon_zoom-in_alt"></i></button> <div class="big-img big-img_qv"> <div class="big-img_block"><img src="+${productDetails.imageUrl}+" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="big-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div><div class="slide-img slide-img_qv"> <div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div><div class="slide-img_block"><img src="${productDetails.imageUrl}" alt="product image"></div></div></div></div><div class="col-12 col-md-6"> <div class="shop-detail_info"> <h5 class="product-type color-type">${productDetails.type} </h5><a class="product-name" href="shop_detail.html">${productDetails.name}</a> <div class="price-rate"> <h3 class="product-price">${productDetails.name}</h3> </div><p class="product-describe"> ${productDetails.description}</p><div class="quantity-select"> <label for="quantity">Quantity:</label> <input class="no-round-input" id="quantity" type="number" min="0" value="1"> </div><div class="product-select"> <button class="add-to-cart normal-btn outline">Add to Cart</button> <button class="add-to-compare normal-btn outline">+ Add to Compare</button> </div><div class="product-share"> <h5>Share link:</h5><a href=""><i class="fab fa-facebook-f"> </i></a><a href=""><i class="fab fa-twitter"></i></a><a href=""><i class="fab fa-invision"> </i></a><a href=""><i class="fab fa-pinterest-p"></i></a> </div></div></div></div></div></div>`);
// >>>>>>> 1e1e2018109eed49ecb920d9f5fa572849ec0bf4
