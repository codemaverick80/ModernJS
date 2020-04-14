/**
 * 
  <body>
     <div class="container">
      <h2>Async & await fetch Example</h2>      
      <button id="button1" class="btn">Get API Data</button>
      <br /><br />
      <div id="output"></div>
    </div>
    <script src="app.js"></script>
    </body>
 * 
 */

document.getElementById('button1').addEventListener('click', function () {
  getDataFromApi('https://jsonplaceholder.typicode.com/users').catch(error => {
    console.log(error);
  });
});

async function getDataFromApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  let output = '';

  data.forEach(function (item) {
    output += `<li>user name: ${item.username}, Name: ${item.name}`;
  });

  document.getElementById('output').innerHTML = output;
}
