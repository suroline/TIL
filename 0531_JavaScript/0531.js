// Javascript Syntax Basics

// 1. statement : value, operator, expression, keyword, comment, ends with semi-colon ;

var x = 5;
var y = 6;
var z = x + y;

console.log(z);

// statement can be grouped by code block, {}

// function
function myFunction(x, y) {
  return x + y;
}

// if statement
if(x > 0) {
  // do something;
}

// for statement
for (var i =0; i <10; i++) {
  // do something;
}

// control flow

var time = 10;
var greeting;

if (time < 10) {
  greeting = 'Good morning';
} 
else if (time < 20) {
  greeting = 'Good day';
} 
else {
  greeting = 'good evening';
}

console.log (greeting);

// 2. Expression : value + variable + operator , expression can be statement, but statement can't be expression.

5 * 10 // 50
'Hello' + '' + 'world' // 'Hello world

// 3. Variable : A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($)

var x; // declaring variables

x = 5; // evaluating variables

// 4. Value ===> literal : if variable is the address, literal is the value that is in that address

10.50 // literal : number
'hello' // literal : string
{ name: 'Lee', gender: 'male' } //literal : object
[ 'black', 'gray', 'white'] //literal : array

// data type : primitive 

var bool = true; // boolean
var foo = null; // null
var bar; // undefined
var num1 = 1001; // number
var string1 = 'Hello'; // string

// data type : object
var obj = { name: 'lee', gender: 'male'}; // object
var array = ['black', 'gray', 'white'];

// 5. Operator : use to make one or more value

var color = 'red'; // Assigenment
var area = 5*4; // Arithmetic
var str = 'Hi' + 'My name is Lee' // String
var foo = 3 > 5; // Comparison
var bar = (5 > 3) && (2 < 4); // Logical
var today = new Date(); // call, create instance

// 6. Keyword
// 7. Comment

