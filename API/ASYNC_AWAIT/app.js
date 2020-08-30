/*async function myFunc() {
  //return 'Hello world';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Heloo world'), 1000);
  });
  const error = true;
  if (!error) {
    const result = await promise; // await 1 sec until promise resolve
    return result;
  } else {
    await Promise.reject(new Error('Errorr mass...'));
  }
}

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));

async function getUsers() {
  // await response fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // only proceed once it resolved
  const data = await response.json();
  return data;
}

getUsers().then(res=>console.log(res));
*/

const http = new EasyHTTP();

//http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data));
// // .catch(err => console.log(err));

const data = {
  name: 'John Doe',
  username: 'john234k',
  email: 'john123234k@gmail.com',
};

http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http
//   .delete('https://jsonplaceholder.typicode.com/users/4')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
