// #### Window Object : global
// Window methods / Objects / Properties

//Alert
//alert("hello world");

// Prompt
//const input = prompt();
//alert(input);

// Confirm

// if (confirm("Are you sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// ##### DOM (Document Object Model) - Document object inside window

// #### DOM Selectors for single elements

//// DOM Selectors for single elements (getElementById())
// console.log(document.getElementById("task-title"));

// //Get things from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// //change styling
// console.log((document.getElementById("task-title").style.background = "#333"));
// console.log((document.getElementById("task-title").style.color = "#ffffff"));

// // Change content
// console.log((document.getElementById("task-title").textContent = "Task List"));
// console.log((document.getElementById("task-title").innerText = "My List"));
// console.log(
//   (document.getElementById("task-title").innerHTML =
//     '<span style="color:red">Task List</span>')
// );

//// DOM Selectors for single elements (querySelector())

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));

// //Get things from the element
// console.log((document.querySelector("li").style.color = "red"));
// console.log((document.querySelector("ul li").style.color = "blue"));

// console.log((document.querySelector("li:last-child").style.color = "red"));
// console.log((document.querySelector("li:nth-child(3)").style.color = "yellow"));
// console.log(
//   (document.querySelector("li:nth-child(4)").textContent = "hello World")
// );

// console.log(
//   (document.querySelector("li:nth-child(odd)").style.background = "#ccc")
// );

//// DOM Selectors for multiple elements (getElementsByClassName())

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

//// DOM Selectors for multiple elements (getElementsByTagName())
let liList = document.getElementsByTagName("li");
console.log(liList);
console.log(liList[1]);

liList = Array.from(liList);
liList.reverse();
console.log(liList);

liList.forEach(function (li) {
  console.log(li.className);
});
