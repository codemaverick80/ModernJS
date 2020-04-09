## ModernJS

Learning Modern JavaScript

## Environment Setup

1. Install Visual Studio Code (https://code.visualstudio.com/)
2. Install following extensions for VS Code
  - Bracket Pair Colorizer 2
  - Prettier - Code formatter

## Variable naming convention
- Camel Case (preferred)
- `var firstName ='John Doe';` for multi word variable

### var , let, const (ES6)

#### var

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

```
#### let

```javascript

 let name;
 name = "John Doe";
 console.log(name);
 name = "Smith";
 console.log(name);

```


#### const
  - const variable can not be reassign
  - const variabel must me initialize 

```javascript
const name = "John Doe";
console.log(name);

//Error: we can not reassign const for premitive type
//name = "Smith";

//Error: Missing initializer in const declaration
//const greeting;

//For object and array we can change the value but we can not reassign const

const object - Works
const person = {
  name: "John Doe",
  age: 25,
};
console.log(person);

person.name = "Mark";
person.age = 30;
console.log(person);

//Error : Assignment to constant variable
//person = {
//  name: "A",
//  age: 10,
// };

//const array - Works
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

 //Error : Assignment to constant variable
 //numbers = [1, 2, 3];
```
## Js Data types
### Primitive Data Type
- stored directly in the location the variable accesses
- stored on the stack


### Reference Data Type
- accessed by reference
- objects that are stored on the heap
- a pointer to a location in memory



| Primitive Data type | Reference Data type |
| ------------------- | ------------------- |
| String              | Arrays              |
| Number              | Object Literals     |  
| Boolean             | Functions           |  
| Null                | Dates               | 
| Undefined           | Anything Else..     |  
| Symbols (ES6)       | Content Cell        |  

``` javascript

// Primitive Types

//String
const name = "John Doe";
console.log(typeof name); //string

//Number
const age = 30;
console.log(typeof age); //number

//Boolean
const married = true;
console.log(typeof married); //boolean

//Null
const car = null;
console.log(typeof car); //object (which is bug)

//Undefined
let animal;
console.log(typeof animal); //undefined

//Symbol
const sym = Symbol();
console.log(typeof sym); //symbol

```


``` javascript
// Reference Type - Objects
//Array
const hobbies = ["movies", "music", "coding"];
console.log(typeof hobbies); //object

//Object Literal
const address = {
  street: "42 South Ave",
  city: "San Francisco",
  state: "CA",
};
console.log(typeof address); //object

//Date
const today = new Date();
console.log(today);
console.log(typeof today); // object

```
