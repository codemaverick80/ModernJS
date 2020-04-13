const http = new easyHTTP();

////Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', callback);

// function callback(error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// }

////Get  single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', callback);

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
