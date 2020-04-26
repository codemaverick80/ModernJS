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
}

/* sub class */
class Laptop extends Product {
  constructor(name, price, qty, memory, processor) {
    super(name, price, qty);
    this.memory = memory;
    this.processor = processor;
  }

  getProductSpec() {
    return `Memory = ${this.memory}, Processor = ${this.processor}`;
  }
}

//Instantiate Laptop

const del = new Laptop('Dell XPS 15', 2100, 1, '32 GB', 'Intel i9 8 core');

console.log(del.getProductSummary());
console.log(del);
console.log(del.getProductSpec());
