// Functions to run once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

    // updateCartButtonBadge
    updateCartButtonBadge()
}, false);



/**
 * addToCart: This function adds products to user cart.
 * - Cart is persistent
 * 
 * @param {String} id 
 * @param {String} name 
 * @param {String} type 
 * @param {String} imageUrl 
 * @param {String} price 
 */
const addToCart = (id, name, type, imageUrl, price) => {

    const productDetails = { id, name, type, imageUrl, price, qty: 1 }

    if (localStorage.getItem(CONFIG.CART_STORE) === null) {

        const cartList = [];
        cartList.push(productDetails)
        localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
    } else {

        const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));
        let index = cartList.findIndex(cartItem => cartItem.id === productDetails.id)
        if (index === -1) {

            cartList.push(productDetails)
        } else {

            cartList[index].qty = Number(cartList[index].qty) + Number(productDetails.qty)
        }

        localStorage.setItem(CONFIG.CART_STORE, JSON.stringify(cartList));
    }

    // updateCartButtonBadge
    updateCartButtonBadge()
}

/**
 * Update Cart Badge Function - Updates the Cart Button on the header section
 */
const updateCartButtonBadge = () => {

    const cartBadge = document.getElementById('cartButtonBadge')
    const cartList = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

    if (cartList === null) {

        cartBadge.innerText = 0
    } else {

        cartBadge.innerText = cartList.length
    }
}
