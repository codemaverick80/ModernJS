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

## Type Conversion
``` javascript
let val;
val = 5;

//output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.length); // undefined becasue length works with string

```
##### Number to string

``` javascript
let val;

// Number to string
val = String(5);

//output
console.log(val); // 5
console.log(typeof val); // string
console.log(val.length); // 1

```

##### Boolean to string

```javascript
let val;

// Boolean to string
val = String(true);

//output
console.log(val); // true
console.log(typeof val); // string
console.log(val.length); // 4

```

##### Date to string

```javascript
let val;

// Date to string
val = String(new Date());

//output
console.log(val); // Thu Apr 09 2020 14:43:12 GMT-0700 (Pacific Daylight Time)
console.log(typeof val); // string
console.log(val.length); // 57

```

##### Array to string
```javascript
let val;

// Array to string
val = String([1, 2, 3, 4, 5]);

//output
console.log(val); // 1,2,3,4,5
console.log(typeof val); // string
console.log(val.length); // 9

```

##### convert to number
```javascript
let val;

// string to number
val = Number(3);
console.log(val); // 3
console.log(typeof val); // number
console.log(val.toFixed()); // 3

//boolean to number
val = Number(true);
console.log(val); // 1
console.log(typeof val); // number
console.log(val.toFixed()); // 1

val = Number(false);
console.log(val); // 0
console.log(typeof val); // number
console.log(val.toFixed()); // 0

//null to number
val = Number(null);
console.log(val); // 0
console.log(typeof val); // number
console.log(val.toFixed()); // 0

// string to number
val = Number("hello");
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed()); // NaN

//array to number
val = Number([1, 2, 3, 4]);
console.log(val); // NaN
console.log(typeof val); // number
console.log(val.toFixed()); // NaN

val = parseInt(5);
console.log(val); // 5
console.log(typeof val); // number
console.log(val.toFixed()); // 5

val = parseFloat(5.35);
console.log(val); // 5.35
console.log(typeof val); // number
console.log(val.toFixed(2)); // 5.35

```
