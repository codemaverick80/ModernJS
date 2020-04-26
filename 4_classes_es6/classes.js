// Class is ES6 feature
class Product {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  //instance method
  calculateTotal() {
    return this.price * this.qty;
  }

  //instance method
  getProductSummary() {
    return `product name = ${this.name}, price = ${this.price}, quantity = ${this.qty}`;
  }

  // static method
  static bestProductStore() {
    return 'Let me think ...NONE';
  }
}

//Instantiate Object
const iphone = new Product('iPhone 11', 1100, 2);
console.log(iphone.name);
console.log(iphone.calculateTotal());
console.log(iphone.getProductSummary());
console.log(iphone);

//static method
console.log(Product.bestProductStore());
