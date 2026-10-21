import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js';
import '../data/cart-class.js';
import '../data/backend-practice.js'
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


// promises -> for asynchronous code

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)  => {
    loadCart(() => {
      resolve();
  });
})

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts(() => {
  resolve();
  });

}).then(() => {
  return new Promise((resolve)  => {
    loadCart(() => {
      resolve();
      
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


// callbacks
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  })
  
})
*/
