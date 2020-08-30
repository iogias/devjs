// Iterator Function example
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// const nameArray = ['Jack', 'Jill', 'John'];
// const name = nameIterator(nameArray);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// Generator Example
// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }
// const names = sayNames();
// console.log(names);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator ID
function* genID() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const gen = genID();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
