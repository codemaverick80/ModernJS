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

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//// ---------------- ES6 Way

// companies.forEach(function (company) {
//   console.log(company);
// });

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

// companies.forEach(function (company) {
//   // If the company is auto, skip it
//   if (company.category === 'Auto') return;

//   // Otherwise log it.
//   console.log(company);
// });
