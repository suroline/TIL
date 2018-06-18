// Array()

new Array(arrayLength);

var arr = new Array(2);
console.log(arr.length, arr); // 2, undefined

arr = new Array(1, 2, 3);
console.log(arr.length, arr); //3, [1,2,3]

/* 
array element addition and deletion
*/

var arr = [];
console.log(arr[0]); // undeifined

arr[0] = 'one';
arr[3] = 'three';
arr[7] = 'seven';

console.log(arr); // 'one', undefined, undefined, three, undefined, undefined, undefined, seven

var numbersArr = ['zero', 'one', 'two', 'three'];

delete numbersArr[2];
console.log(numbersArr); // zero, one, undefined, three

numbersArr.splice(2, 1);
console.log(numbersArr); // zero, one, three

var myArray = [];
console.log(myArray.length); // undefined

myArray[1000] = true;

console.log(myArray.length); //1001
console.log(myArray[0]); //undefined

var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

arr.length = 3; // zero, one, two

arr[arr.length] = 'san'; // zero one two san

arr.length = 5; // zero one two san undefined

arr.push('go'); // zero one two san undefined go

/* 
Array Method
---- method that does not change 'this' 
1. Array.isArray: boolean
2. Array.prototype.indexOf(num)
3. Array.prototype.concat
4. Array.prototype.join
5. Array.prototype.slice (start, this.length) : usually use for copy the array
*/

// Array.prototype.concat
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c); //a b c x y z

var d = a.concat('String');
console.log(d); //a b c String

// Array.prototype.join

var arr = ['a', 'b', 'c', 'd'];

var x = arr.join();
console.log(x); // a, b, c, d

var y = arr.join('');
console.log(y); // 'abcd'

var z = arr.join(':');
console.log(z); // a:b:c:d

function sum() {
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);; // 1, 2, 3

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 2, 3));



/* 
Array Method
---- method that does change 'this'
1. Array.prototype.pop()
2. Array.prototype.push()
3. Array.prototype.reverse() : descending
4. Array.prototype.shift()
5. Array.prototype.unshift()
6. Array.prototype.splice(start, this.length) : usually use for deleting the element in the array
7. Array.prototype.sort() : ascending
*/

var a = ['a', 'b', 'c'];
var c = a.pop();

console.log(a); // a, b
console.log(c); // c

var arr = [];

arr.push(1); // 1
arr.push(2); // 1, 2
arr.push(3); // 1, 2, 3

arr.pop(); // 1, 2
arr.pop(); // 1
arr.pop(); // []

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.push(b);
console.log(a); // a, b , c, [x, y, z]
console.log(c); // 4

console.log([1, 2].concat([3, 4])); // 1, 2, 3, 4

var a = ['a', 'b', 'c'];
var b = a.reverse();

console.log(a); // c, b, a
console.log(b); // c, b, a

var a = ['a', 'b', 'c'];
var c = a.shift();

console.log(a); // b, c
console.log(c); // a

var items = ['one', 'two', 'three', 'four'];

var res = items.splice(1, 2);

console.log(items); // one, four
console.log(res); // two, three

var items = [ 1, 2, 3, 4];

var res = items.splice(1, 2, 'x', 'y');

console.log(items); // 1, x, y, 4
console.log(res); //2, 3

var points = [40, 100, 1, 5, 2, 25, 10];

points.sort(function (a, b){return a - b;});

console.log(points); // 1, 2, 5, 10, 25, 40 ,100

points.sort(function(a, b){return b - a;});

console.log(points); // 100, 40, 25, 10, 5, 2, 1

var todos = [
  {id: 4, content: 'JavaScript'},
  {id: 1, content: 'HTML'},
  {id: 2, content: 'CSS'}
];

todos.sort(function(a, b) {
  return (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0;
});

//todos.sort((a,b) => (a.id > b.id)?1:(a.id < b.id)? -1:0;)

console.log(todos);
