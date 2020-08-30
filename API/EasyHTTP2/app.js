const http = new EasyHTTP();

// const users = http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: 'John Doe',
  username: 'john234k',
  email: 'john123234k@gmail.com',
};

// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

http
  .delete('https://jsonplaceholder.typicode.com/users/4')
  .then(data => console.log(data))
  .catch(err => console.log(err));
