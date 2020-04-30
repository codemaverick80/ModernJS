/**
 * Javascript Higher Order Functions and Arrays
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

//// ==================== forEach ====================
/**
 * ES6 introduced the Array.forEach() method for looping through arrays.
 * You call this method on your array, and pass in a callback function to
 * run on each iteration of the loop. The callback accepts two arguments.
 * The first is the value of the current item in the loop,
 * and the second is the index of that item.
 */

//// ---------------- ES5 way

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//// ---------------- ES6 Way

// companies.forEach(function (company) {
//   console.log(company);
// });

//// ---------------- ES6 Way (Arrow function)

// companies.forEach(company => console.log(company));

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

// companies.forEach(function (company) {
//   // If the company is auto, skip it
//   if (company.category === 'Auto') return;

//   // Otherwise log it.
//   console.log(company);
// });

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

//// Example: find out who can drink :)
//// ---------------- ES5 way
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

//// ---------------- ES6 way
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// console.log(canDrink);

//// ---------------- ES6 way (Arrow function)
//const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

//// Example: filter all Retail companies
//// ---------------- ES6 way
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

//// ---------------- ES6 way (Arrow function)
// const retailCompanies = companies.filter(
//   company => company.category === 'Retail'
// );

// console.log(retailCompanies);

//// Example: get all companies that started in 80s

//// ---------------- ES6 way
// const eightiesComp = companies.filter(function (company) {
//   return company.start >= 1980 && company.start < 1990;
// });

// console.log(eightiesComp);

//// ---------------- ES6 way (Arrow function)
// const eightiesComp = companies.filter(
//   company => company.start >= 1980 && company.start < 1990
// );

// console.log(eightiesComp);

//// Example: get all companies that lasted 10 yesrs

//// ---------------- ES6 way
// const compLastedTenYears = companies.filter(function (company) {
//   return company.end - company.start >= 10;
// });
// console.log(compLastedTenYears);

// ---------------- ES6 way (Arrow function)
// const compLastedTenYears = companies.filter(
//   company => company.end - company.start >= 10
// );
// console.log(compLastedTenYears);

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

//// Example:  create array of company names

// ---------------- ES6 way
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// ---------------- ES6 way (Arrow function)
// const companyNames = companies.map(company => company.name);

// console.log(companyNames);

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

//// Example:  sort ages array (default)

// const defaultSortAges = ages.sort();
// console.log(defaultSortAges);

//// Example:  sort ages array ascending order
// const agesAsc = ages.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(agesAsc);

//console.log(ages.sort((a, b) => a - b));

//// Example:  sort ages array descending order

// const agesAsc = ages.sort(function (a, b) {
//   if (a < b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(agesAsc);

//console.log(ages.sort((a, b) => b - a));

//// Example:  sort companies array ascendng order
// ---------------- ES6 way

// const sortedCompanies = companies.sort(function (a, b) {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies);

// ---------------- ES6 way (Arrow function)

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

//// Example:  sort companies array descending order
// ---------------- ES6 way

// const sortedCompanies = companies.sort(function (a, b) {
//   if (a.start < b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompanies);

// ---------------- ES6 way (Arrow function)

// const sortedCompanies = companies.sort((a, b) => (a.start < b.start ? 1 : -1));

// console.log(sortedCompanies);

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

//// Example:  sum the ages array

// ---------------- ES5 way

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }
// console.log(ageSum);

// ---------------- ES6 way

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// console.log(ageSum);

// ---------------- ES6 way (Arrow function)

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);



const itemObj=[
  {price:15, quantity:2},
  {price:20, quantity:3},
  {price :15, quantity:4}
];


// const itemCost=itemObj.reduce((total,item)=>{
//   return total + item.price * item.quantity

// },0);

const itemCost=itemObj.reduce((total,item)=> total + item.price * item.quantity ,0);

console.log(`Item Total is ${itemCost}`);

