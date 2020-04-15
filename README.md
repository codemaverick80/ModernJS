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

```javascript
var name = 'John Doe';
console.log(name);

name = 'Scott';
console.log(name);

//Init var
var greeting;
console.log(greeting); //undefined
greeting = 'Hello';
console.log(greeting);
```

#### let

```javascript
let name;
name = 'John Doe';
console.log(name);
name = 'Smith';
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

```javascript
// Primitive Types

//String
const name = 'John Doe';
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

```javascript
// Reference Type - Objects
//Array
const hobbies = ['movies', 'music', 'coding'];
console.log(typeof hobbies); //object

//Object Literal
const address = {
  street: '42 South Ave',
  city: 'San Francisco',
  state: 'CA',
};
console.log(typeof address); //object

//Date
const today = new Date();
console.log(today);
console.log(typeof today); // object
```

## Type Conversion

```javascript
let val;
val = 5;

//output
console.log(val); // 5
console.log(typeof val); // number
console.log(val.length); // undefined becasue length works with string
```

##### Number to string

```javascript
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
val = Number('hello');
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

### Math Object

```javascript
let val;

val = Math.PI; //3.141592653589793

val = Math.round(2.4); //2

val = Math.round(2.5); //3

val = Math.ceil(4.4); //5

val = Math.floor(4.4); //4

val = Math.sqrt(25); //5

val = Math.abs(-2); //2

val = Math.pow(8, 2); //64

val = Math.min(5, 7, 4, 1, 8, -4); //-4

val = Math.max(5, 7, 4, 1, 8, -4); //8

val = Math.random(); // it will give us a random decimal, like 0.13372837819279804

val = Math.random() * 20; // random decimal number between 0-19, like 7.601589596167888

val = Math.floor((val = Math.random() * 20));

console.log(val);
```

#### String Methods & Concatenation

#### Template Literals (Template string)

##### Without template string (es5), old way

```javascript
const name = 'John Doe';
const age = 30;
const job = 'Web Development';
const city = 'San Francisco';
let html;

// without template string (es5), old way
html =
  '<ul> <li>Name: ' +
  name +
  '</li> <li>Age: ' +
  age +
  '</li> <li>Job: ' +
  job +
  '</li> <li>City: ' +
  city +
  '</li> </ul>';

// OR

html =
  '<ul>' +
  '<li>Name: ' +
  name +
  '</li>' +
  '<li>Age: ' +
  age +
  '</li>' +
  '<li>Job: ' +
  job +
  '</li>' +
  '<li>City: ' +
  city +
  '</li>' +
  '</ul>';

document.body.innerHTML = html;
```

##### With template string (es6)

```javascript
const name = 'John Doe';
const age = 30;
const job = 'Web Development';
const city = 'San Francisco';
let html;

// with template string (es6)
html = `
      <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
      </ul>
`;

document.body.innerHTML = html;
```

##### Arrays & Array Method

```javascript
//TODO:...
```

##### Object Literal

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 36,
  hobbies: ['music', 'movies', 'coding'],
  address: {
    city: 'San Francisco',
    state: 'CA',
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

let val;
val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.city;
val = person.address['state'];
val = person.getBirthYear();

console.log(val);
```

##### Array of Object

```javascript
const perople = [
  { name: 'John', age: 36 },
  { name: 'Mike', age: 32 },
  { name: 'Sally', age: 35 },
  { name: 'Scott', age: 28 },
];

console.log(perople);
```

##### Date and Time

```javascript
//TODO:..
```

##### If Statement

```javascript
//TODO:..
```

##### Switches

```javascript
//TODO:..
```

##### Function & Function Expression

###### Function declarations & Calling

```javascript
//Function declarations
function greet() {
  return 'Hello';
}
// calling function
greet();
```

###### Function Parameters

```javascript
function fullName(fname, lname) {
  if (typeof fname === 'undefined') {
    fname = 'John';
  }
  if (typeof lname === 'undefined') {
    lname = 'Doe';
  }

  return fname + ' ' + lname;
}

//calling
fullName();
fullName('Mark', 'smith');
```

###### Function Parameters (with ES6)

```javascript
function fullName(fname = 'John', lname = 'Doe') {
  return fname + ' ' + lname;
}

//calling
fullName();
fullName('Mark', 'smith');
```

###### Function Expression

```javascript
const square = function (x) {
  return x * x;
};

square(8);

// with ES6
const square = function (x = 3) {
  return x * x;
};

square(8);
```

###### IIFE (Immidiatley Invokable Function Expression)

```javascript
(function () {
  console.log('IIFE Ran...');
})();

(function (name) {
  console.log('Hello' + name);
})('Brad');

// Property Methods
//Note: when a function is put inside of an object is called method
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
```

##### Loops (Array, Array of objects and object)

```javascript
// FOR loop
const cars = ['Honda', 'Toyota', 'Nissan', 'Subaru', 'Ford', 'Chevy'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// FOREACH array loop
// FOREACH taks a callback function which takes iterator, index & array
cars.forEach(function (car) {
  console.log(car);
});

cars.forEach(function (car, index, cars) {
  console.log(`${index} : ${car}`);
  console.log(cars);
});

// MAP (array of objects)
const people = [
  { id: 101, name: 'Sam' },
  { id: 102, name: 'Mark' },
  { id: 103, name: 'John' },
  { id: 104, name: 'Mike' },
  { id: 105, name: 'Smith' },
];

const ids = people.map(function (person) {
  return person.id;
});

console.log(ids);

// FOR IN loop (used for loop through an object)

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 38,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
```

##### Block scope with let & const

```javascript
//TODO:..
```

#### DOM Selectors

```javascript
// DOM Selectors for single elements (getElementById())
console.log(document.getElementById('task-title'));

//Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change styling
console.log((document.getElementById('task-title').style.background = '#333'));
console.log((document.getElementById('task-title').style.color = '#ffffff'));

// Change content
console.log((document.getElementById('task-title').textContent = 'Task List'));
console.log((document.getElementById('task-title').innerText = 'My List'));
console.log(
  (document.getElementById('task-title').innerHTML =
    '<span style="color:red">Task List</span>')
);

// DOM Selectors for single elements (querySelector())

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));

//Get things from the element
console.log((document.querySelector('li').style.color = 'red'));
console.log((document.querySelector('ul li').style.color = 'blue'));

console.log((document.querySelector('li:last-child').style.color = 'red'));
console.log((document.querySelector('li:nth-child(3)').style.color = 'yellow'));
console.log(
  (document.querySelector('li:nth-child(4)').textContent = 'hello World')
);

console.log(
  (document.querySelector('li:nth-child(odd)').style.background = '#ccc')
);

// DOM Selectors for multiple elements (getElementsByClassName())

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');
console.log(listItems);

// DOM Selectors for multiple elements (getElementsByTagName())
let liList = document.getElementsByTagName('li');
console.log(liList);
console.log(liList[1]);

liList = Array.from(liList);
liList.reverse();
console.log(liList);

liList.forEach(function (li) {
  console.log(li.className);
});
```

## Higher order functions and Array

###### forEach

```javascript
//// ==================== forEach ====================

/**
 * ES6 introduced the Array.forEach() method for looping through arrays.
 * You call this method on your array, and pass in a callback function to
 * run on each iteration of the loop. The callback accepts two arguments.
 * The first is the value of the current item in the loop,
 * and the second is the index of that item.
 */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//// ---------------- ES5 way

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//// ---------------- ES6 Way

companies.forEach(function (company) {
  console.log(company);
});

//// ---------------- ES6 Way (Arrow function)

companies.forEach(company => console.log(company));

/**
 * ---------------- Skipping Items ----------------
 * In a for loop, you can use continue to skip the current item
 * and break to end the loop altogether.
 *
 * Because the forEach() methods run callback functions,
 * you would use return to skip the current item.
 * There is no way to break the loop completely.
 *
 * For example, if you wanted to log all companies to the
 * console except for category 'Auto', you would do this.
 */

companies.forEach(function (company) {
  // If the company is auto, skip it
  if (company.category === 'Auto') return;

  // Otherwise log it.
  console.log(company);
});
```

###### filter

```javascript
//// ==================== filter ====================
/**
 * The Array filter() is an inbuilt method, this method creates a new array 
 * with elements that follow or pass the given criteria and condition.
 * Syntax:
 *    var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 *
 *
 * callback : function is a predicate, to test each element of the array. 
 * Return true to keep the element, false otherwise.
 
 * It accepts 3 arguments
 *
 * 1) element : the current element being processed in the array.
 * 
 * 2) index (optional) : the index of the current element being prpcessed in the array
 * 
 * 3) array (optional) : the array filter was called upon.
 *
 * Return value: A new array with the elements that pass the test.
 * If no elements pass the test, an empty array will be returned.
 */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//// Example: find out who can drink :)
//// ---------------- ES5 way
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//// ---------------- ES6 way
const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

console.log(canDrink);

//// ---------------- ES6 way (Arrow function)
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

//// Example: filter all Retail companies
//// ---------------- ES6 way
const retailCompanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});

console.log(retailCompanies);

//// ---------------- ES6 way (Arrow function)
const retailCompanies = companies.filter(
  company => company.category === 'Retail'
);

console.log(retailCompanies);

//// Example: get all companies that started in 80s

//// ---------------- ES6 way
const eightiesComp = companies.filter(function (company) {
  return company.start >= 1980 && company.start < 1990;
});

console.log(eightiesComp);

//// ---------------- ES6 way (Arrow function)
const eightiesComp = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesComp);

//// Example: get all companies that lasted 10 yesrs

//// ---------------- ES6 way
const compLastedTenYears = companies.filter(function (company) {
  return company.end - company.start >= 10;
});
console.log(compLastedTenYears);

// ---------------- ES6 way (Arrow function)
const compLastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(compLastedTenYears);
```

###### map

```javascript
//// ==================== map ====================
/**
 * The map() method creates a new array populated with the
 * results of calling a provided function on every element in the calling array.
 * 
 * Parameters
 * callback : function that is called for every element of arr.
 * Each time callback executes, the returned value is added to new_array.

 * The callback function accepts the following arguments:

 * 1) currentValue : The current element being processed in the array.
 * 2) index (Optional) : The index of the current element being processed in the array.
 * 3) array (Optional) : The array map was called upon.
 */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//// Example:  create array of company names

// ---------------- ES6 way
const companyNames = companies.map(function (company) {
  return company.name;
});

// ---------------- ES6 way (Arrow function)
// const companyNames = companies.map(company => company.name);

console.log(companyNames);
```

###### sort

```javascript
//// ==================== sort ====================

//// Example:  Sort companies by start year
/**
 * The sort() method sorts the elements of an array in place and returns
 * the sorted array.
 * The default sort order is ascending, built upon converting the elements
 * into strings, then comparing their sequences of UTF-16 code units values.
 *
 * Parameters
 *
 * 1) compareFunction (Optional) : Specifies a function that defines the sort order.
 * If omitted, the array elements are converted to strings, then sorted according
 * to each character's Unicode code point value.
 *
 * 2) firstEl : The first element for comparison.
 *
 * 3) secondEl : The second element for comparison.
 *
 * Return value : The sorted array, note that the array is sorted in place, and no copy is made.
 */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//// Example:  sort ages array (default)

const defaultSortAges = ages.sort();
console.log(defaultSortAges);

//// Example:  sort ages array ascending order
const agesAsc = ages.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(agesAsc);

//console.log(ages.sort((a, b) => a - b));

//// Example:  sort ages array descending order

const agesAsc = ages.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(agesAsc);

console.log(ages.sort((a, b) => b - a));

//// Example:  sort companies array ascendng order
// ---------------- ES6 way

const sortedCompanies = companies.sort(function (a, b) {
  if (a.start > b.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

// ---------------- ES6 way (Arrow function)

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

//// Example:  sort companies array descending order
// ---------------- ES6 way

const sortedCompanies = companies.sort(function (a, b) {
  if (a.start < b.start) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedCompanies);

// ---------------- ES6 way (Arrow function)

const sortedCompanies = companies.sort((a, b) => (a.start < b.start ? 1 : -1));

console.log(sortedCompanies);
```

##### reduce

```javascript
//// ==================== reduce ====================
/**
 * The reduce() method executes a reducer function (that you provide)
 * on each element of the array, resulting in a single output value.
 *
 * The reducer function takes four arguments:
 * 1 ) Accumulator (acc)
 * 2) Current Value (cur)
 * 3) Current Index (idx)
 * 4) Source Array (src)
 *
 * Your reducer function's returned value is assigned to the accumulator,
 * whose value is remembered across each iteration throughout the array,
 * and ultimately becomes the final, single resulting value.
 */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//// Example:  sum the ages array

// ---------------- ES5 way

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

// ---------------- ES6 way

const ageSum = ages.reduce(function (total, age) {
  return total + age;
}, 0);

console.log(ageSum);

// ---------------- ES6 way (Arrow function)

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);
```

## Object Oriented JavaScript

##### Constructor function & 'this' keyword (ES5)

```javascript
//to use this Person constructor function, we have to create new instance using new keyword
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// create instance of Person constructor function
const john = new Person('John', '9-03-1930');

console.log(john.calculateAge());

console.log(john.name);

// create another instance of Person construction function

const mary = new Person('Mary', 'March 20 1978');

console.log(mary.calculateAge());

console.log(may.name);
```

##### Prototype

```javascript
// Person constructor
/*

To create an instance of Person, we have to provide firstName, lastName and dob which are the properties of Person object.
However calculateAge() function going to be the same for every instance of Person object. 
This is something we can put inside prototype instead of putting directly inside the object.

*/
function Person(firstName, lastName, dob) {
  this.firstName = firstName;

  this.lastName = lastName;

  this.birthday = new Date(dob);

  /*
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();

    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
*/
}

// Putting calculateAge function inside prototype of Person
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();

  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Lets put getFullName function inside prototype of Person
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.getMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person('John', 'Doe', '9-03-1930');

//console.log(john);
console.log(john.calculateAge());
console.log(john.getFullName());

const mary = new Person('Mary', 'Johnson', 'March 20 1987');

//console.log(mary);
console.log(mary.calculateAge());
console.log(mary.getFullName()); //Mary Johnson
mary.getMarried('Smith');
console.log(mary.getFullName()); //Mary Smith

console.log(mary.hasOwnProperty('firstName')); //true
```

##### Prototype Inheritance

```javascript
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;

  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello  ${this.firstName} ${this.lastName}. Greeting from Person`;
};

const john = new Person('John', 'Doe');
console.log(john.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer();

Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-333-5555', 'Basic');
console.log(customer1);
console.log(customer1.greeting());

//Overriding Person greeting method

Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}. Greeting from Customer.`;
};

console.log(customer1.greeting()); //customer1.greeting is not a function
```

##### ES6 Classes

```javascript
//ES6 Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();

    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  //static mathod
  static addNumber(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary.greeting());
console.log(mary.calculateAge());

// calling static method
console.log(Person.addNumber(5, 4));
```

##### ES6 Sub Classes (Inheritance)

```javascript
//ES6 Sub Classes (Inheritance)
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

// Customer inherit from Person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Doe', '552-444-7845', 'Basic');
console.log(john);
console.log(john.greeting());
```

#### Asynchronous Javascript, Ajax & Fetch

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <title>Modern Javascript</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div id="main" class="card">
            <div class="card-content">
              <span class="card-title">Chuck Norris Joke</span>

              <div class="row">
                <form id="task-form">
                  <div class="input-field col s12">
                    <input type="number" id="number" />
                    <label for="number">Number of Jokes</label>
                  </div>
                  <button class="btn get-jokes">Get Jokes</button>
                </form>
              </div>
            </div>

            <div class="card-action">
              <h5 id="task-title">Jocks</h5>
              <ul class="collection jokes">
                <li class="collection-item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

```javascript
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  //http://www.icndb.com/api/
  //api: http://api.icndb.com/jokes/random/2

  const number = document.querySelector('input[type="number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if (response.type === 'success') {
        response.value.forEach(function (joke) {
          output += `<li class='collection-item'>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector('.jokes').innerHTML = output;

      console.log(response);
    }
  };

  xhr.send();
  e.preventDefault();
}

/*

{
"type": "success",
"value": [
    {"id": 597,"joke": "Once death had a near Chuck Norris experience.","categories": []},
    {"id": 554,"joke": "Chuck Norris can install a 64 bit OS on 32 bit machines.","categories": ["nerdy"]}
  ]
}

*/
```

##### Callback function

```javascript
/*
Callback is a function that's passed in as a parameter to another function and then it's ran inside the function body.
*/

const fruits = ['apple', 'banana', 'mango', 'orange'];

/*
fruits.forEach(function (item) {
  console.log(item);
});
console.log('Done');
OR
*/

function callback(item) {
  console.log(item);
}

fruits.forEach(callback);
console.log('Done');
```

##### Asynchronous Callback

```javascript
const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

//// without callback
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += post.title + '\n';
//     });
//     console.log(output);
//   }, 1000);
// }

// createPost({ id: 3, title: 'Post Three', body: 'This is post three' });

// getPosts();

////with callback
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000);
}

createPost(
  { id: 3, title: 'Post Three', body: 'This is post three' },
  getPosts
);
```

#### Custom HTTP Library (Ajax with callback)

Create a new file called `easyHTTP.js`

Fake api for out testing https://jsonplaceholder.typicode.com/

```javascript
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      //console.log(self.http.responseText);
      callback(null, self.http.responseText);
    } else {
      callback('Error ' + self.http.status);
    }
  };

  this.http.send();
};

////Make an HTTP POST Request

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  // send data as json
  this.http.send(JSON.stringify(data));
};

////Make an HTTP PUT Request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  // send data as json
  this.http.send(JSON.stringify(data));
};

////Make an HTTP DELETE Request

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'post deleted');
    } else {
      callback('Error ' + self.http.status);
    }
  };

  this.http.send();
};
```

Update `app.js`

```javascript
const http = new easyHTTP();

////Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', callback);

function callback(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}

////Get  single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', callback);

function callback(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}

////Create Post

//// create data
const data = {
  title: 'test post',
  body: 'this is a test post',
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

//// Update post

const dataForUpdate = {
  title: 'test post',
  body: 'this is updated post',
};

http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  dataForUpdate,
  function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }
);

//// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', callback);

function callback(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
}
```

#### ES6 Promises (without callback)

```javascript
const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      //just for testing purpose
      const error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000);
}

createPost({ id: 3, title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });
```

#### ES6 promises

```javascript
let myFirstPromise = new Promise((resolve, reject) => {
  // promise should either be resolve ot reject otherwise it will be in pending status and its value will be undefined
});

console.log(myFirstPromise);

/**
 * Promise {<pending>}
__proto__: Promise
[[PromiseStatus]]: "pending"
[[PromiseValue]]: undefined
 */

let myFirstPromise = new Promise((resolve, reject) => {
  resolve('this is my value');
});

console.log(myFirstPromise);

/**
 * 
 Promise {<resolved>: "this is my value"}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: "this is my value"
*
*/
```

```javascript
let myPromise = new Promise((resolve, reject) => {
  // let response = fetch('https://api.github.com/users').then(res => res.json());
  // resolve(response);

  resolve(
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .catch(err => err)
  );
});

myPromise
  .then(function (value) {
    // console.log(Array.isArray(value));
    if (Array.isArray(value)) {
      value.forEach(user => {
        console.log('login :' + user.login + ', github url:' + user.html_url);
      });
    } else {
      console.log(value);
    }
  })
  .catch(function (err) {
    console.log(err);
  });
```

#### ES6 promises chain structure

##### Sample calculation example with Promise (v1)

```javascript
let x = 10;

const add = function (num) {
  return new Promise(function (resolve, reject) {
    let result = num + 10;
    if (isNaN(result)) {
      reject('Add() => not a number');
    } else {
      resolve(num + 10);
    }
  });
};

const multi = function (num) {
  return new Promise(function (resolve, reject) {
    let result = num * 10;
    if (isNaN(result)) {
      reject('Multi() => not a number');
    } else {
      resolve(num * 10);
    }
  });
};

const division = function (num) {
  return new Promise(function (resolve, reject) {
    let result = num / 10;
    if (isNaN(result)) {
      reject('division() => not a number');
    } else {
      resolve(num / 10);
    }
  });
};

add(x)
  .then(function (result) {
    return multi(result);
  })
  .then(function (result) {
    return division(result);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
```

##### Sample calculation example with Promise (v2 - arrow function)

```javascript
let x = 10;
const add = function (num) {
  return new Promise((resolve, reject) => {
    let result = num + 10;
    if (isNaN(result)) {
      reject('Add() => not a number');
    } else {
      resolve(num + 10);
    }
  });
};

const multi = function (num) {
  return new Promise((resolve, reject) => {
    let result = num * 10;
    if (isNaN(result)) {
      reject('Multi() => not a number');
    } else {
      resolve(num * 10);
    }
  });
};

const division = function (num) {
  return new Promise((resolve, reject) => {
    let result = num / 10;
    if (isNaN(result)) {
      reject('division() => not a number');
    } else {
      resolve(num / 10);
    }
  });
};

add(x)
  .then(result => multi(result))
  .then(result => division(result))
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

##### Sample calculation example with Promise (v3 - arrow function)

```javascript
let x = 10;

const add = function (num) {
  return new Promise((resolve, reject) => resolve(num + 10));
};

const multi = function (num) {
  return new Promise((resolve, reject) => resolve(num * 10));
};

const division = function (num) {
  return new Promise((resolve, reject) => resolve(num / 10));
};

add(x)
  .then(result => multi(result))
  .then(result => division(result))
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

##### Sample calculation example with Promise (v4 - arrow function)

```javascript
let x = 10;

const add = num => {
  return new Promise((resolve, reject) => resolve(num + 10));
};

const multi = num => {
  return new Promise((resolve, reject) => resolve(num * 10));
};

const division = num => {
  return new Promise((resolve, reject) => resolve(num / 10));
};

add(x)
  .then(result => multi(result))
  .then(result => division(result))
  .then(result => console.log(result))
  .catch(err => console.log(err));
```

###### Another promise example

```javascript
//Asynchronous task
let uploadFiles = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log('upload is completed');
      resolve('upload is completed');
    }, 2000);
  });
};

//Asynchronous task
let saveDataIntoDB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('data saved in database');
      resolve('data saved in database');
    }, 1500);
  });
};

//Asynchronous task
let generateReport = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ////console.log('reports generated');
      //resolve('reports generated');

      ////Lets reject this
      reject('Error: something went worong. generateReport().');
    }, 2000);
  });
};

//Asynchronous task
let sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log('email has been sent');
      resolve('email has been sent');
    }, 2000);
  });
};

uploadFiles()
  .then(val => {
    console.log(val);
    return saveDataIntoDB();
  })
  .then(val => {
    console.log(val);
    return generateReport();
  })
  .then(val => {
    console.log(val);
    return sendEmail();
  })
  .then(val => console.log(val))
  .catch(err => console.log(err));

/**
    upload is completed
    data saved in database
    reports generated
    email has been sent
   */
//OR, if we reject
/**
    upload is completed
    data saved in database
    Error: something went worong. generateReport().    
   */
```

## No Callback, with Callback, with Promises and Async-await

Without Callback function

```javascript
////  Without Callback function
const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000); // lets pretend server took 2 sec
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000); // lets pretend server took 1 sec
}

createPost({ id: 3, title: 'Post Three', body: 'This is post three' });
getPosts();
```

With Callback function

```javascript
/**
 * we will get following result
  Post One
  Post Two
* we don't see 'Post Three' becasue createPost() is taking 2 sec to create a post 
* where as getPosts() took only 1 sec. while createPost() is waiting, the UI thread 
* is gone ahead and executed getPosts() and disply all the posts (which in this case 2 posts, 3rd one has not been created yet). 
* so to resolve this issue we use callback function.
 */

////   With Callback function

const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000);
}

createPost(
  { id: 3, title: 'Post Three', body: 'This is post three' },
  getPosts
);

/**
 * we will get following result
  Post One
  Post Two
  Post Three
 */
```

With promises

```javascript
////   With promises

const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);

      let error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went worng!');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000);
}

createPost({ id: 3, title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => console.log(err));

/**
 * we will get following result
  Post One
  Post Two
  Post Three
 */
```

Async and await

```javascript
////   Async and await

const posts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);

      let error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: something went worng!');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += post.title + '\n';
    });
    console.log(output);
  }, 1000);
}

async function init() {
  await createPost({ id: 3, title: 'Post Three', body: 'This is post three' });
  getPosts();
}

init();
```

Async & await with fetch Api

```javascript
//// Async & await

document.getElementById('button1').addEventListener('click', function () {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetchUsers(url).then(populateUI).catch(handleError);
});

async function fetchUsers(url) {
  const response = await fetch(url);

  if (response.status >= 400 && response.status < 600) {
    throw new Error('Something went wrong');
  }

  const responseData = response.json();
  return responseData;
}

function populateUI(data) {
  let output = '';
  data.forEach(function (item) {
    output += `<li>user name: ${item.username}, Name: ${item.name}`;
  });
  document.getElementById('output').innerHTML = output;
}

function handleError(err) {
  console.log(err.message);
  return new Response(
    err
    // JSON.stringify({
    //   code: 400,
    //   message: 'Stupid network Error',
    // })
  );
}
```

## ES6 Fetch API

#### ES6 Fetch promises chain structure

```javascript
const firstApiUrl = '';
const secondApiUrl = '';

// fetch always returns promises
fetch(firstApiUrl) // pass the first api url
  .then(apiResponse => {
    // convert the apiResponse to json and return to the chain.
    // apiResponse : is the response from first Api
    // .json() returns promises
    return apiResponse.json();
  })
  .then(json => {
    // json : is the data we have got from first Api
    // do something with json (data). populate ui or send this data to another api or save in db ...

    //calling second api so pass the second api url.
    // remember, fetch always returns promises
    return fetch(secondApiUrl);
  })
  .then(apiResponse => {
    // convert the apiResponse to json and return to the chain.
    // apiResponse : is the response from second Api
    // .json() returns promises
    return apiResponse.json();
  })
  .then(json => {
    // json : is the data we have got from second Api
    //do something with json (data). populate ui, sned this data to another api, save in db ...
  })
  .catch(err => console.log(err)); //this catch will capture all errors thrown by fetch
```

##### Fetch Api returns promises

`index.html'

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <title>Modern Javascript</title>
  </head>
  <body>
    <div class="container">
      <h2>Fetch API Example</h2>
      <button id="button1" class="btn">Get Text</button>
      <button id="button2" class="btn">Get JSON</button>
      <button id="button3" class="btn">Get API Data</button>
      <br /><br />
      <div id="output"></div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

    <script src="app.js"></script>
  </body>
</html>
```

`text.txt'

```
This is a sample text file.
```

`posts.json`

```json
[
  {
    "id": 1,
    "title": "Post One",
    "body": "This is post one"
  },
  {
    "id": 2,
    "title": "Post Two",
    "body": "This is post two"
  },
  {
    "id": 3,
    "title": "Post Three",
    "body": "This is post Three"
  }
]
```

`app.js`

```javascript
//Get Text button (local text file data)
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
    .then(function (response) {
      //console.log(response);
      //console.log(response.text()); //returns Promise
      return response.text();
    })
    .then(function (data) {
      console.log(data);

      document.getElementById('output').innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}

//// Get Json button (local Json file data)
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('posts.json')
    .then(function (response) {
      //console.log(response);
      //console.log(response.json()); //returns Promise
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = '';
      data.forEach(function (post) {
        output += `<li>Id : ${post.id}, Title : ${post.title}, Body: ${post.body}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}

//// Get API button (External data)
document.getElementById('button3').addEventListener('click', getGithubUsers);

function getGithubUsers() {
  fetch('https://api.github.com/users')
    .then(function (response) {
      //console.log(response);
      //console.log(response.json()); //returns Promise
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = '';
      data.forEach(function (user) {
        output += `<li>User Login : ${user.login} Url: ${user.html_url}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}
```

#### Fetch Error Handling

```javascript
//// Get Json button (local Json file data)
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('posts.json')
    .then(handleErrors)
    .then(function (response) {
      return response.json();
    })
    .then(displayOnDiv)
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function displayOnDiv(response) {
  console.log(response);
  let output = '';
  response.forEach(function (post) {
    output += `<li>Id : ${post.id}, Title : ${post.title}, Body: ${post.body}</li>`;
  });
  document.getElementById('output').innerHTML = output;
}
```

#### Arrow Functions

```javascript
// const sayHello=function(){
//   console.log('hello');
// }

//// OR

const sayHello = () => console.log('hello');

//// returing value

// const getNumber = function () {
//   return 5;
// };

//// OR

const getNumber = () => 5;

// passing parameters and return value

// const addNumbers = function (a, b) {
//   return a + b;
// };

////OR

////NOTE: single param does not need parenthesis but multiple param does.
const addNumbers = (a, b) => a + b;

//// Return Object literal ({name:'John'})

const getObject = () => ({ name: 'John' });

const users = ['John', 'William', 'Mark', 'Scott'];
// const nameLenghts = users.map(function (name) {
//   return name.length;
// });

//// OR
const nameLenghts = users.map(name => name.length);

sayHello();
console.log(getNumber());
console.log(addNumbers(5, 6));
console.log(getObject());

console.log(nameLenghts);
```

#### Custom HTTP Library (Fetch and Promises)

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
    <title>Modern Javascript</title>
  </head>
  <body>
    <div class="container">
      <h2>Fetch API Example</h2>
      <button id="button1" class="btn">Get Text</button>
      <button id="button2" class="btn">Get JSON</button>
      <button id="button3" class="btn">Get API Data</button>
      <br /><br />
      <div id="output"></div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

    <script src="easyHTTP2.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

`easyHTTP2.js`

```javascript
/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Harish Chand
 * @license MIT
 *
 */

class EasyHTTP {
  // Make http GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http POST request

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http PUT request

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make http DELETE request

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'delete',
        headers: { 'Content-type': 'application/json' },
      })
        .then(res => res.json())
        .then(data => resolve('Resource Deleted'))
        .catch(err => reject(err));
    });
  }
}
```

`app.js'

```javascript
const http = new EasyHTTP();

////Get Users  ()
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

//// user data for POST and PUT
const data = {
  name: 'John Doe',
  email: 'john@email.com',
  username: 'johndoe',
};

////POST Users
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

////Update Users
http
  .put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//// DELETE User
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

#### Async and await (structure)

```javascript
/**
 * <div id="dataFromApi"></div>
 * <img src="" id="profileImg" width="250" />
 */

getDataFromApi('url...').catch(error => {
  console.log(error);
});

async function getDataFromApi(url) {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementsById('dataFromApi').innerText = data;
}

getImageFromApi('image url').catch(error => {
  console.log(error);
});

async function getImageFromApi(url) {
  const response = await fetch(url);
  const blob = await response.blob();

  document.getElementsById('profileImg').src = URL.createObjectURL(blob);
}
```

#### async and await fetch api call

```javascript
/**
 * index.html
  <body>
     <div class="container">
      <h2>Async & await fetch Example</h2>      
      <button id="button1" class="btn">Get API Data</button>
      <br /><br />
      <div id="output"></div>
    </div>
    <script src="app.js"></script>
    </body>
 * 
 */

//app.js
document.getElementById('button1').addEventListener('click', function () {
  getDataFromApi('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log('yay'))
    .catch(error => {
      console.log(error);
    });
});

async function getDataFromApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  let output = '';

  data.forEach(function (item) {
    output += `<li>user name: ${item.username}, Name: ${item.name}`;
  });

  document.getElementById('output').innerHTML = output;
}
```
