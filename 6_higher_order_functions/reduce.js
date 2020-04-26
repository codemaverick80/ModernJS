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

const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);
