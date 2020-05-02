document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('myForm').addEventListener('submit', handleFormAsync);
});

async function handleFormAsync(ev) {
	// stop the page reloading
	ev.preventDefault();

	let myForm = ev.target;

	let myFormData = new FormData(myForm);

	// add more things that were not in the form
	myFormData.append('api-key', 'myApiKey');

	// //loop through all the form content
	// for (let key of myFormData.keys()) {
	// 	console.log(key, myFormData.get(key));
	// }

	// call api and send the form data
	let json = await convertFordData2Json(myFormData);
	//console.log(json);
	let url = 'https://localhost:5003/api/sandbox';
	let header = new Headers();
	header.append('Content-type', 'application/json');
	let request = new Request(url, {
		headers: header,
		body: json,
		method: 'POST',
	});
	//console.log(request);

	////  Using Fetch API
	// fetch(request)
	// 	.then(response => {
	// 		console.log(response.ok);
	// 		return response.json();
	// 	})
	// 	.then(function (json) {
	// 		let a = json;
	// 		console.log('Response from server');
	// 		console.log(json);
	// 	})
	// 	.catch(function (err) {
	// 		let a = err;
	// 		console.log(err);
	// 	});

	//// Async and await Fetch Api
	submitForm(request)
		//if submitForm becomes a rejected promise then catch will handle the error.
		.catch(error => console.log(error));
}

async function submitForm(request) {
	const response = await fetch(request);
	const data = await response.json();
	console.log(data);
}

function convertFordData2Json(formData) {
	let obj = {};
	for (let key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return JSON.stringify(obj);
}

// document.addEventListener('DOMContentLoaded',()=>{
//     document.getElementById('myForm')
//     .addEventListener('submit',handleForm);
//   });

// function handleForm(ev){
//   // stop the page reloading
//   ev.preventDefault();

//   let myForm=ev.target;
//   let myFormData=new FormData(myForm);

//   // add more things that were not in the form
//   myFormData.append('api-key','myApiKey');

//   //loop through all the form content
//   for(let key of myFormData.keys()){
//     console.log(key,myFormData.get(key));
//   }

//   // call api and send the form data
//   let url='http://localhost:50001/api/customer';
//   let request=new Request(url,{
//     body:myFormData,
//     method:'POST'
//   });

//   console.log(request);

//   fetch(req)
//   .then((res)=> res.json())
//   .then((data)=>{
//     console.log('Response from server');
//     console.log(data);
//   })
//   .catch(console.warn);
// }

// function convertFordData2Json(formData){
// let obj={};
// for(let key of formData.keys()){
//   obj[key]=formData.get(key);
// }
// return JSON.stringify(obj);
// }
