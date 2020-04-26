//Object literal
const productOne = {
  name: 'iPhone',
  price: 1000,
  qty: 2,
  calculateTotal: function () {
    return this.price * this.qty;
  },
};

console.log('product name: ' + productOne.name);
console.log('total price: ' + productOne.calculateTotal());
console.log(Object.values(productOne));
console.log(Object.keys(productOne));

const productTwo = {
  name: 'Laptop',
  price: 1450,
  qty: 3,
  calculateTotal: function () {
    return this.price * this.qty;
  },
};

console.log('product name: ' + productTwo.name);
console.log('total price: ' + productTwo.calculateTotal());
console.log(Object.values(productTwo));
console.log(Object.keys(productTwo));
