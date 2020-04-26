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
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

//// Example: filter all Retail companies
//// ---------------- ES6 way

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// console.log(retailCompanies);

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
const eightiesComp = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);

console.log(eightiesComp);

//// Example: get all companies that lasted 10 yesrs

//// ---------------- ES6 way

// const compLastedTenYears = companies.filter(function (company) {
//   return company.end - company.start >= 10;
// });
// console.log(compLastedTenYears);

// ---------------- ES6 way (Arrow function)
const compLastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);
console.log(compLastedTenYears);
