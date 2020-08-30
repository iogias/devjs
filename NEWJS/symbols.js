// Symbol() are Unique Key

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};
myObj[KEY1] = 'Prop 1';
myObj[KEY2] = 'Prop 2';
myObj.key3 = 'Prop 3';
myObj.key4 = 'Prop 4';
// console.log(myObj.KEY2);

// Symbols are not enumerable in for ... in

// for (let i in myObj) {
//   console.log(`${i}:${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({ key: 'prop' }));
// console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));
