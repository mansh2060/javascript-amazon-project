class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    //businessCart.localStorageKey = 'cart-business';

    this.loadFromStorage();
    //businessCart.loadFromStorage();
  }

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
  
    if (!this.cartItems) {
      this.cartItems = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 2,
      deliveryOpptionId : '1'
    },{ 
      productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity : 1,
      deliveryOpptionId : '2'
    }];
    }
  }

  saveToStorage() {
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingId;
    this.cartItems.forEach(
      (item) => {
        if (productId === item.productId){
          matchingId = item;
        }
      }
    );
  
    if (matchingId){
      matchingId.quantity += 1;
    }
    else {
      this.cartItems.push({
      productId : productId,
      quantity : 1,
      deliveryOpptionId : '1'
    });
    }
  
    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId != productId){
        newCart.push(cartItem);
      }
    });
    
    this.cartItems = newCart;
  
    this.saveToStorage();
  }

  updateDeliveryOption(productId,deliveryOptionId) {
    let matchingId;
    this.cartItems.forEach((item) => {
        if (productId === item.productId){
          matchingId = item;
        }
      });
     matchingId.deliveryOpptionId = deliveryOptionId;
  
     this.saveToStorage();
    }
}
const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business');


cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')

console.log(cart);
console.log(businessCart);