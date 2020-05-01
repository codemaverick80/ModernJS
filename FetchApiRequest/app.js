// Constructor
function App() {
    this.http = new FetchApiLibrary();
}

App.prototype.getJokes = function () {
    const number = document.querySelector('input[type="number').value;
    if (number === '') return;

    this.http.get(`http://api.icndb.com/jokes/random/${number}`)
    .then(data=>this.generateJokesUI(data))
    .catch(err=>this.handleErrors(err));
};

App.prototype.handleErrors=function(response) {
    if (!response.ok)throw new Error(response.statusText);
    return response;
};

App.prototype.clearJokesUI = function () {
    document.querySelector('input[type="number').value = null;
    document.querySelector('.jokes').innerHTML = '';

    document.querySelector('.card').classList.remove('d-block');
    document.querySelector('.card').classList.add('d-none');
};

App.prototype.generateJokesUI = function (res) {
    const a = new App();
    a.clearJokesUI();

    let output = '';    
    const response = res;

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
    
};

App.prototype.getPost = function () {
    document.querySelector('.div-post').innerHTML = '';
    let output = '';

    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(data){
        if (data == null) return;        
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
                    <th scope="row">${data.id}</th>
                    <td>${data.title}</td>
                    <td>${data.body}</td>             
                    </tr>           
                </tbody>
                </table>`;  
        document.querySelector('.div-post').innerHTML = output;      
    })
    .catch(function(err){
        if (!err.ok){       
        output += `<li class="alert alert-danger" role="alert">${err.statusText}</li>`;
        document.querySelector('.div-post').innerHTML = output;
        }
    });
   
};

App.prototype.getPosts = function () {
    document.querySelector('.div-post').innerHTML = '';
    let output = '';
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(data) {       
            if (data == null) return;          
            output += `<table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>           
              </tr>
            </thead>
            <tbody>`;
            data.forEach(function (post) {
                output += `<tr>
                <td scope="col">${post.id}</td>
                <td scope="col">${post.title}</td>
                <td scope="col">${post.body}</td>           
              </tr>`;
            });
            output += `</tbody></table`;       
            document.querySelector('.div-post').innerHTML = output;
        })
    .catch(function(err){
        if (!err.ok){       
            output += `<li class="alert alert-danger" role="alert">${err.statusText}</li>`;
            document.querySelector('.div-post').innerHTML = output;
        }
    })
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


