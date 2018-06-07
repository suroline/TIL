// Array

// create an array

var arr = ['apple', 'banana', 'tomato'];

console.log(arr.length);
console.log(arr[1]);
console.log(typeof arr);

// access (index into) an array item

var first = arr[0];
// ===> apple
var last = arr[arr.length-1];
// ===> banana

// object literal : property name & value

var obj = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};











// object prototype vs array prototype

var emptyArr = [];
var emptyObj = {};

console.dir(emptyArr.__proto__); 
// ===> constructor : array, __proto__: object
console.dir(emptyObj.__proto__);
// ===> constructor : object





// loop over an array

arr.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// ===> apple 0 (3) ["apple", "banana", "tomato"]
// ===> banana 1 (3) ["apple", "banana", "tomato"]
// ===> tomato 2 (3) ["apple", "banana", "tomato"]