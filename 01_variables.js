//### Variable naming convention
// - Camel Case (preferred)
// - `var firstName ='John Doe';` for multi word variable

//### var , let, const (ES6)

//#### var
``` javascript

var name = "John Doe";
console.log(name);

name = "Scott";
console.log(name);

//Init var
var greeting;
console.log(greeting); //undefined
greeting = "Hello";
console.log(greeting);

``` //#### let
```javascript

// let name;
// name = "John Doe";
// console.log(name);
// name = "Smith";
// console.log(name);

```;

// //#### const

// const name = "John Doe";
// console.log(name);

// //// Error: we can not reassign const for premitive type
// //name = "Smith";

// //// Error: Missing initializer in const declaration
// //const greeting;

// //// For object and array we can change the value but we can not reassign const

// //// const object - Works
// const person = {
//   name: "John Doe",
//   age: 25,
// };
// console.log(person);

// person.name = "Mark";
// person.age = 30;
// console.log(person);

// //// Error : Assignment to constant variable
// // person = {
// //   name: "A",
// //   age: 10,
// // };

// //// const array - Works
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);

// //// Error : Assignment to constant variable
// // numbers = [1, 2, 3];
