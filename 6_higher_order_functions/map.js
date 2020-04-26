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

// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// ---------------- ES6 way (Arrow function)
const companyNames = companies.map(company => company.name);

console.log(companyNames);
