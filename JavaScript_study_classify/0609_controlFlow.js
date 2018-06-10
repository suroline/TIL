// JavaScript Control FLow : Control flow statements are used when conditional statements or repeated execution are required.

/* 
Block statement
1. scope with {}
2. group of statements
3. genarally use for function, object literal, control flow statement
*/

function foo () {
  var x = 1, y = 2;
  console.log(x +y);
}
foo(); // 3, function declarement statement

var obj = {
  x: 1,
  y: 2
};
console.log(obj.x + obj.y); // 3, object literal

var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10, while loop statement

/*
Conditional statement
1. the group of statment that exectues by if the conditional expression is true or false
2. if...else | switch
*/

if (x>0) {
//  if conditional statement is true, this code block executes
} else {
  // if conditional statement is false, this code block executes
}

var hour = 20;
var greeting;

if (hour < 18) {
  greeting = 'Good day';
}

console.log(greeting); //undefined

if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

console.log(greeting); //'Good evening'

if (hour < 10) {
  greeting = 'Good morning';
} else if (hour < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}

console.log(greeting); // 'Good evening'

var color = 'red';

switch (color) {
  case 'yellow':
    console.log('yellow color');
  case 'red':
    console.log('red color');
  case 'blue':
    console.log('blue color');
  default:
    console.log('unknown color');
} // red color, blue color, unknown color -> break statement absence

var color = 'red';

switch (color) {
  case 'yellow':
    console.log('yellow color');
    break;
  case 'red':
    console.log('red color');
    break;
  case 'blue':
    console.log('blue color');
    break;
  default:
    console.log('unknown color');
}

/*
Loop statement 
1. while the conditional expression is true, the statement that is in the block code executes until the conditional expression turns out false
2. for statement / while statement / do while statement
*/

for (var i = 0; i < 2; i++) {
  console.log(i);
}

for (var i = 1; i >=0; i--) {
  console.log(i);
}

var arr = ['one', 'two', 'three', 'four'];

console.log(arr[2]); // arr[i]: call array value | obj.name / obj['name']: call object value

for (var i =0; i < arr.length; i++) {
  console.log('[' + i + ']' + arr[i]);
}

for (var i in arr) {
  console.log('['+ i + '] = ' + arr[i]); 
}

arr.forEach(function (ele, idx, arr) {
  console.log('[' + idx + '] = ' + ele);
});

for (const element of arr) {
  console.log(element); //for-of : ES6
}

for (const [idx, value] of arr.entries()) {
  console.log('[' + idx + '] = ' + value);
}

var n = 0;
var x = 0;

while (n < 4) { // n : 0 1 2
  n++; // n : 1 2 3 4
  x += n; // x : 1 3 6 10
  console.log(x); 
}

var i = 0;

while (true) {
  console.log (i);
  i++;
  if (i===10) break;
} // 0 1 2 3 4 5 6 7 8 9 exit from the loop statment by break keyword

var i = 0;
do {
  console.log(i); // 0 1 2
  i++;
} while (i < 3);

for (var i = 0; i < 5; i++) {
  if (i % 2 == 0) continue; 
  console.log(i); // 1 3
}

/*
Evaluating
1. Type coercion: notice and be aware of it.
2. change the data type to number
| + operator, parseInt(var_name), var*1, Number(var_name)
3. change the data type to string
| '', String(var_name), toString(var_name)
*/

if (true) {
  console.log('1'); // 1
}

if (1) {
  console.log('2'); // 2, parameter 1 => number => boolean: true
}

if ('str') {
  console.log('3'); // 3, parameter str => string => boolean: true
}

if (null) {
  console.log('4'); // undefined, null => boolean: false
}

var x = ''; 
if (x) {
  console.log('5'); // undefined, empty string => boolean: false
}

if (!x) {
  console.log('6'); // 6, !false = true
}

console.log('1' > 0); //true
console.log(1 + '2'); //12
console.log(2 - '1'); //1
console.log('10' == 10); //true
console.log('10'=== 10); //false
console.log(undefined == null); //true
console.log(undefined === null); //false



