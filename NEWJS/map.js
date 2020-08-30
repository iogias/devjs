// MAPS - key values pair
const map = new Map();

// set key
const key1 = 'Key1',
  key2 = {},
  key3 = function () {};
// set map value by keys
map.set(key1, 'value of key1');
map.set(key2, 'value of key2');
map.set(key3, 'value of key3');

// console.log(map.get(key1));
// console.log(map.get(key2));
// console.log(map.get(key3));
// console.log(map.size);

// Iterating map
// for (let [key,value] of map) {
//   console.log(`${key}:${value}`);
// }

// forEach
// map.forEach((value, key) => {
//   console.log(`${key}:${value}`);
// });

// Create array
// const mapArray = Array.from(map);
// console.log(mapArray);
// Create array of values
const mapArray = Array.from(map.values());
console.log(mapArray);
