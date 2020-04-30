const http = new XmlHttpLibrary();



document.querySelector('.get-jokes').addEventListener('click', getJokes);
document.querySelector('.clear-jokes').addEventListener('click', clearJokes);

////Get
function getJokes(e) {
 
  const number = document.querySelector('input[type="number').value;
  if(number===""){
    return;
  }

  http.get(`http://api.icndb.com/jokes/random/${number}`, callback);
  
  
  e.preventDefault();

  /*
  * Response format
{
"type": "success",
"value": [
    {"id": 597,"joke": "Once death had a near Chuck Norris experience.","categories": []},
    {"id": 554,"joke": "Chuck Norris can install a 64 bit OS on 32 bit machines.","categories": ["nerdy"]}
  ]
}
*/
}


function callback(error, res) {
  clearJokes();
  let output = '';  
  if (error) {
    //console.log(error);   
    output += `<li class="alert alert-danger collection-item" role="alert">${error}</li>`;
  } else {
    //console.log(res);    
    const response = JSON.parse(res);

    if (response.type === 'success') {
      response.value.forEach(function (joke) {
        output += `<li class='list-group-item'>${joke.joke}</li>`;
      });
    } else {     
      output += `<li class="alert alert-danger collection-item" role="alert">Oops! something went wrong processing response.</li>`;
    }

    document.querySelector('.jokes').innerHTML = output;    

    document.querySelector('.card').classList.remove('d-none');
    document.querySelector('.card').classList.add('d-block');


    
  }
}

function clearJokes() {
  document.querySelector('input[type="number').value = null;
  document.querySelector('.jokes').innerHTML = '';

  document.querySelector('.card').classList.remove('d-block');
  document.querySelector('.card').classList.add('d-none');
}











////Get  single Post
//http.get('https://jsonplaceholder.typicode.com/posts/1', callback);

// function callback(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// }

////Create Post

//// create data
// const data = {
//   title: 'test post',
//   body: 'this is a test post',
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (
//   error,
//   response
// ) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//// Update post

// const dataForUpdate = {
//   title: 'test post',
//   body: 'this is updated post',
// };

// http.put(
//   'https://jsonplaceholder.typicode.com/posts/1',
//   dataForUpdate,
//   function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(response);
//     }
//   }
// );

//// Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', callback);

// function callback(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// }
