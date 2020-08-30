const http = new EasyHTTP();

// Get All Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(posts);
//   }
// });

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Create data
const data = {
  title: 'Custom Post',
  body: 'Custom Body',
};

// Post data
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Put request
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete request
// http.delete('https://jsonplaceholder.typicode.com/posts/52', function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
