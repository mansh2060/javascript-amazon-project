export const cart = [];

export function addToCart(productId) {
  let matchingId;
  cart.forEach(
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
    cart.push({
    productId : productId,
    quantity : 1
  });
  }
}
