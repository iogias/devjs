// Basic Structure

// IIFE
/*(function () {
  // Declare private variable and functions

  return {
    // Declare public variable and functions
  };
})();
*/

// STANDARD MODULE PATTERN
const UICtrl = (function () {
  let text = 'Hello World';
  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };
  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];
  function add(item) {
    data.push(item);
    console.log('Data added ...');
  }
  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  return {
    add,
    get,
  };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Jack' });

const itemId = ItemCtrl.get(1);
console.log(itemId);
