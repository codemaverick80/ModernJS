const firstApiUrl = '';
const secondApiUrl = '';

// fetch always returns promises
fetch(firstApiUrl) // pass the first api url
  .then(apiResponse => {
    // convert the apiResponse to json and return to the chain.
    // apiResponse : is the response from first Api
    // .json() returns promises
    return apiResponse.json();
  })
  .then(json => {
    // json : is the data we have got from first Api
    // do something with json (data). populate ui or send this data to another api or save in db ...

    //calling second api so pass the second api url.
    // remember, fetch always returns promises
    return fetch(secondApiUrl);
  })
  .then(apiResponse => {
    // convert the apiResponse to json and return to the chain.
    // apiResponse : is the response from second Api
    // .json() returns promises
    return apiResponse.json();
  })
  .then(json => {
    // json : is the data we have got from second Api
    //do something with json (data). populate ui, sned this data to another api, save in db ...
  })
  .catch(err => console.log(err)); //this catch will capture all errors thrown by fetch
