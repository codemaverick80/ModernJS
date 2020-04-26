//Constructor : it is just a function. sometime it is also called constructor function

/* Creating Constructor functon */
function Product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;

  //// ========== Best practices ============
  //// Commom funcationality can be added through prototyping - reco

  // this.calculateTotal = function () {
  //   return this.price * this.qty;
  // };

  // this.getProductSummary = function () {
  //   return `product name = ${this.name}, price = ${this.price}, quantity = ${this.qty}`;
  // };
}

/* Prototyping Constructor function */
// calculateTotal
Product.prototype.calculateTotal = function () {
  return this.price * this.qty;
};

// getProductSummary
Product.prototype.getProductSummary = function () {
  return `product name = ${this.name}, price = ${this.price}, quantity = ${this.qty}`;
};

/* Using Constructor functon */
//Instatiate an Object
const productOne = new Product('iPhone', 980, 3);
console.log('Total Price: ' + productOne.calculateTotal());

const productTwo = new Product('laptop', 1600, 5);
console.log('Total Price: ' + productTwo.calculateTotal());
console.log(productTwo.getProductSummary());
