//Get Text button (local text file data)
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
    .then(function (response) {
      //console.log(response);
      //console.log(response.text()); //returns Promise
      return response.text();
    })
    .then(function (data) {
      console.log(data);

      document.getElementById('output').innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}

//// Get Json button (local Json file data)
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('posts.json')
    .then(function (response) {
      //console.log(response);
      //console.log(response.json()); //returns Promise
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = '';
      data.forEach(function (post) {
        output += `<li>Id : ${post.id}, Title : ${post.title}, Body: ${post.body}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}

//// Get API button (External data)
document.getElementById('button3').addEventListener('click', getGithubUsers);

function getGithubUsers() {
  fetch('https://api.github.com/users')
    .then(function (response) {
      //console.log(response);
      //console.log(response.json()); //returns Promise
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = '';
      data.forEach(function (user) {
        output += `<li>User Login : ${user.login} Url: ${user.html_url}</li>`;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
      document.getElementById('output').innerHTML = error;
    });
}
