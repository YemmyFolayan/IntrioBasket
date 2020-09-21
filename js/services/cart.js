//TODO : IMPLEMENT 7.5%tax on any purchase

const shopCartTBodyDOM = document.getElementById("shopCartTBody");
const updateCartButton = document.getElementById("updateCartButton");
const emptyCartButton = document.getElementById("emptyCartButton");
const cartTotalTable = document.getElementById("cartTotalTable");
const cartTotalTBodyDOM = document.getElementById("cartTotalTBody");

const cartItemTemplate = (productDetails) => {
  return `
        <tr id="${productDetails.id}">
            <td class="product-name">${productDetails.name}</td>
            <td class="product-price">NGN ${productDetails.price}</td>
            <td class="product-quantity">
            <input class="quantity no-round-input" type="number" min="1" value="${
              productDetails.qty
            }">
            </td>
            <td class="product-total">NGN ${
              productDetails.price * productDetails.qty
            }</td>
            <td class="product-clear">
            <button class="no-round-btn"><i class="icon_close"></i></button>
            </td>
        </tr>
    `;
};


const cartTotalTemplate = (totalPriceToPay) => {
  return `
        <tr>
            <th>TOTAL:</th>
            <td>NGN ${totalPriceToPay}</td>
        </tr>
    `;
};

const handleNoItemsInCart = () => {
  updateCartButton.style.display = "none";
  emptyCartButton.style.display = "none";
  cartTotalTable.style.display = "none";
};

const renderCartTotalTable = () => {
  let totalPriceToPay = 0;

  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  // Handle empty cart again!
  if (cartStore === null || cartStore.length === 0)
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    totalPriceToPay += product.price * product.qty;
  });

  let htmlString = cartTotalTemplate(totalPriceToPay);
  cartTotalTBodyDOM.innerHTML = htmlString;
};

const lookUpCartStore = () => {
  const cartStore = JSON.parse(localStorage.getItem(CONFIG.CART_STORE));

  if (cartStore === null || cartStore.length === 0)
    return handleNoItemsInCart();

  cartStore.forEach((product) => {
    let htmlString = cartItemTemplate(product);
    let htmlFragment = document.createElement("tr");
    htmlFragment.setAttribute("id", product.id);
    htmlFragment.innerHTML = htmlString;
    shopCartTBodyDOM.appendChild(htmlFragment);
  });

  // call renderCartTotalTable
  renderCartTotalTable();

  this.deleteProduct();
};



// Delete a product from the shopping cart


function() {
  var self = this;
  if( self.$formCart.length ) {
    var cart = this._toJSONObject( this.storage.getItem( this.cartName ) );
    var items = cart.items;

    $( document ).on( "click", ".pdelete a", function( e ) {
      e.preventDefault();
      var productName = $( this ).data( "product" );
      var newItems = [];
      for( var i = 0; i < items.length; ++i ) {
        var item = items[i];
        var product = item.product;	
        if( product == productName ) {
          items.splice( i, 1 );
        }
      }
      newItems = items;
      var updatedCart = {};
      updatedCart.items = newItems;

      var updatedTotal = 0;
      var totalQty = 0;
      if( newItems.length == 0 ) {
        updatedTotal = 0;
        totalQty = 0;
      } else {
        for( var j = 0; j < newItems.length; ++j ) {
          var prod = newItems[j];
          var sub = prod.price * prod.qty;
          updatedTotal += sub;
          totalQty += prod.qty;
        }
      }

      self.storage.setItem( self.total, self._convertNumber( updatedTotal ) );
      self.storage.setItem( self.shippingRates, self._convertNumber( self._calculateShipping( totalQty ) ) );

      self.storage.setItem( self.cartName, self._toJSONString( updatedCart ) );
      $( this ).parents( "tr" ).remove();
      self.$subTotal[0].innerHTML = self.currency + " " + self.storage.getItem( self.total );
    });
  }
},




lookUpCartStore();





//productdetails template for shop_detail_fullwidth page
const shopDetailTemplate = (productDetails) => {
    return `
            <div class="description-item_block">
                <div class="row align-items-center justify-content-around">
                    <div class="col-12 col-md-4">
                        <div class="description-item_img"><img class="img-fluid" src="${productDetails.imageUrl}" alt="description image"></div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="description-item_text">
                            <h2>${productDetails.name}</h2>
                            <p>${productDetails.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
};
    
