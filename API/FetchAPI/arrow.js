// const sayHello = function () {
//   console.log('Helo');
// };

// One line function does not need curly braces return void
// const sayHello = () => console.log('Helo');

// One line return value
// const sayHello = () => 'Helo';

// Return object
// const sayHello = () => ({
//   msg: 'Helo',
// });

// Single Params doesn't need parenthesis
// const sayHello = name => console.log(`Helo ${name}`);

// Multiple Params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Helo ${firstName} ${lastName}`);

const users = ['Bobs', 'Ronre', 'Sriaazzz', 'Jonaaaaaa'];

// const nameLength = users.map(function (name) {
//   return name.length;
// });

// const nameLength = users.map(name => {
//   return name.length;
// });

const nameLength = users.map(name => name.length);
console.log(nameLength);
