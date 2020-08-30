// Destructure assignments

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400 });
({ a, b, ...rest2 } = { a: 100, b: 200, c: 300, d: 400 });

// console.log(rest2);

// Array Destructur
// const names = ['Jack', 'Jill', 'John'];
// const [p1, p2, p3] = names;
// console.log(p1, p2, p3);

// Object Destructuring
const person = {
  name: 'John',
  age: 25,
  gender: 'male',
  sayHello: function () {
    console.log('Hello');
  },
};

// New ES6
const { name, age, gender, sayHello } = person;
console.log(name, age, gender);
sayHello();
