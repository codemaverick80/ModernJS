//###### Loop Through Array, Array of objects and object

// FOR loop
const cars = ["Honda", "Toyota", "Nissan", "Subaru", "Ford", "Chevy"];

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
  { id: 101, name: "Sam" },
  { id: 102, name: "Mark" },
  { id: 103, name: "John" },
  { id: 104, name: "Mike" },
  { id: 105, name: "Smith" },
];

const ids = people.map(function (person) {
  return person.id;
});

console.log(ids);

// FOR IN loop (used for loop through an object)

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 38,
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
