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
//console.log(defaultSortAges);

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

const agesAsc = ages.sort(function (a, b) {
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
});

//console.log(agesAsc);

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

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

//// Example:  sort companies array descending order
// ---------------- ES6 way

// const sortedCompaniesDesc = companies.sort(function (a, b) {
//   if (a.start < b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(sortedCompaniesDesc);

// ---------------- ES6 way (Arrow function)

// const sortedCompaniesDesc = companies.sort((a, b) =>
//   a.start < b.start ? 1 : -1
// );

// console.log(sortedCompaniesDesc);
