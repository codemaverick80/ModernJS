//Product Constructor
function Product(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
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

// Laptop Constructor
// Laptop constructor function inherit from Product Constructor function
/**
 *
 * @param {string} name
 * @param {number} price
 * @param {number} qty
 * @param {string} memory
 * @param {string} processor
 */
function Laptop(name, price, qty, memory, processor) {
  Product.call(this, name, price, qty);
  //// this = Laptop

  this.memory = memory;
  this.prototype = processor;

  this.getProductSpec = function () {
    return `Memory = ${this.memory}, Processor = ${this.processor}`;
  };
}

/* Inherit Prototype */
/* NOTE: to get all prototype function from Product into Laptop, we have inherit prototype before we create instance of Latop */

/**
 * Uncaught TypeError: dell_laptop.calculateTotal is not a function.
 * above error means we have not inherit prototype from Product into Laptop
 */

Laptop.prototype = Object.create(Product.prototype);

/* Instantiate Laptop */
const dell_laptop = new Laptop(
  'Dell XPS 15',
  2100,
  1,
  '32 GB',
  'Intel i9 8 core'
);

console.log(dell_laptop);
console.log(dell_laptop.name);

console.log(dell_laptop.calculateTotal());
console.log(dell_laptop.getProductSummary());
console.log(dell_laptop.getProductSpec());
