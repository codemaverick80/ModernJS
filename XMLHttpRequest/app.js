// Constructor
function App() {
    this.http = new XmlHttpLibrary();
}

App.prototype.getJokes = function () {
    const number = document.querySelector('input[type="number').value;
    if (number === '') return;
    this.http.get(`http://api.icndb.com/jokes/random/${number}`, this.generateJokesUI);

    /** Response format
        {
        "type": "success",
        "value": [
            {"id": 597,"joke": "Once death had a near Chuck Norris experience.","categories": []},
            {"id": 554,"joke": "Chuck Norris can install a 64 bit OS on 32 bit machines.","categories": ["nerdy"]}
          ]
        }
    */
};

App.prototype.clearJokesUI = function () {
    document.querySelector('input[type="number').value = null;
    document.querySelector('.jokes').innerHTML = '';

    document.querySelector('.card').classList.remove('d-block');
    document.querySelector('.card').classList.add('d-none');
};

App.prototype.generateJokesUI = function (error, res) {
    const a = new App();
    a.clearJokesUI();

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
};

App.prototype.getPost = function () {
    document.querySelector('.div-post').innerHTML = '';
    let output = '';
    this.http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, res) {
        if (error) {
            output += `<li class="alert alert-danger" role="alert">${error}</li>`;
            //console.log(error);
        } else {
            if (res == null) return;
            const postObj = JSON.parse(res);
            output += `<table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>           
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">${postObj.id}</th>
              <td>${postObj.title}</td>
              <td>${postObj.body}</td>             
            </tr>           
          </tbody>
        </table>`;
        }
        document.querySelector('.div-post').innerHTML = output;
    });
};

App.prototype.getPosts = function () {
    document.querySelector('.div-post').innerHTML = '';
    let output = '';
    this.http.get('https://jsonplaceholder.typicode.com/posts', function (error, res) {
        if (error) {
            output += `<li class="alert alert-danger" role="alert">${error}</li>`;
        } else {
            if (res == null) return;
            const postObj = JSON.parse(res);
            output += `<table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>           
              </tr>
            </thead>
            <tbody>`;
            postObj.forEach(function (post) {
                output += `<tr>
                <td scope="col">${post.id}</td>
                <td scope="col">${post.title}</td>
                <td scope="col">${post.body}</td>           
              </tr>`;
            });
            output += `</tbody></table`;
        }
        document.querySelector('.div-post').innerHTML = output;
    });
};

App.prototype.createPost = function (data) {
    document.querySelector('.post-create-message').innerHTML = '';
    let output = '';
    this.http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, res) {
        if (error) {
            //console.log(error);
            output += `<li class="alert alert-danger" role="alert">${error}</li>`;
        } else {
            //console.log(res);
            output += `<li class="alert alert-success" role="alert">${res}</li>`;
        }
        document.querySelector('.post-create-message').innerHTML = output;
    });
};

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
