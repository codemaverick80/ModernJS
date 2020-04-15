document.getElementById('button1').addEventListener('click', function () {
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetchUsers(url).then(populateUI).catch(handleError);
});

async function fetchUsers(url) {
  const response = await fetch(url);

  if (response.status >= 400 && response.status < 600) {
    throw new Error('Something went wrong');
  }

  const responseData = response.json();
  return responseData;
}

function populateUI(data) {
  let output = '';
  data.forEach(function (item) {
    output += `<li>user name: ${item.username}, Name: ${item.name}`;
  });
  document.getElementById('output').innerHTML = output;
}

function handleError(err) {
  console.log(err.message);
  return new Response(
    err
    // JSON.stringify({
    //   code: 400,
    //   message: 'Stupid network Error',
    // })
  );
}
