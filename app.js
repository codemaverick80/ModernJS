//#### Asynchronous Javascript, Ajax & Fetch
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  //http://www.icndb.com/api/
  //api: http://api.icndb.com/jokes/random/2

  const number = document.querySelector('input[type="number').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li class='collection-item'>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector(".jokes").innerHTML = output;

      console.log(response);
    }
  };

  xhr.send();
  e.preventDefault();
}

/*

{
"type": "success",
"value": [
    {"id": 597,"joke": "Once death had a near Chuck Norris experience.","categories": []},
    {"id": 554,"joke": "Chuck Norris can install a 64 bit OS on 32 bit machines.","categories": ["nerdy"]}
  ]
}

*/
