// Hello Javascript!

/*
tag
1. internal: <script></script>
2. external: <script src=""></script>
*/

// JavaScript Syntax Basics

/*
JavaScript
1. Dynamic Typing language
2. doesn't need any type annotation
3. variable can have different type of data type (type inference)
*/

/*
Statement
1. structure: value, operator, expression, keyword, comment
2. ends with semi-colon ;
3. statement can be grouped by code block {...} : declare the statement for action together
4. JavaScript only generate Function-level scope
*/

var x = 5;
var y = 6;
var z = x + y;

console.log(z);

function myFunction(x, y) {
  return x + y;
}


if(x > 0) {
  // do something
}

for (var i = 0; i <10; i++) {
  // do something
}

var time = 10;
var greeting;

if (time < 10) {
  greeting = 'Good mornig';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening'
}

console.log(greeting); // Good day

/*
Expression
1. statement that can have a value
2. expression can be statement but statement can't be expression
3. expression can be sent to parameter
*/

5 * 10                    // 50
'Hello' + '' + 'world'    // 'Hello world'

var x; // statement

// statement
if (y >= 0) {  // y >= 0 : expression
  x = y;
} else {
  x = -y;
}

// statement
var x = (y >= 0 ? y : -y); // y >= 0 ? y : -y : expression 

/*
Variable
1. use it for copy the value or for the reference
2. make when it can be reusable
3. it is Memory address
4. can be call as identifier
5. keyword: var, let, const
6. use equal sign for assigning the value
7. require to name as meaningful : so co-worker can recognize what this code is for
8. variable has to be start with english, underscore(_), $
9. middle of the variable name can have number
10. case-sensitive, so it can tell the difference uppercase and lowercase  
*/

var x; // declare variable and initialization phase 
x = 6; // assign value
var y;
console.log(y); // undefined
console.log(z); // ReferenceError

/*
Value _ data type
Unlike Java, JavaScript doesn't specify the varaible data type.
| Primitive data type : immutable, pass-by-value, saved at stack segment memory area
1. Boolean
  - undefined, 0, null, false, empty string '', NaN = false
2. null
  - garvage collection
3. undefined
  - the variable or object property that is not declared
4. Number
  - +/- Infinity , NaN (not-a-number)
5. String
  - single quote (''), double quote ("") 
  - array-like object
6. Symbol (ES6)

| Object Type : mutable, pass-by-reference, saved at heap segment memory area
property(name: 'value') + method(function that is inside of object)
object, function, array etc... all the element accpet the primitive data type
*/

var bool = true; // boolean

var foo = null; // null

var bar; // undefined

var bar = {
  name: 'Lee',
  gender: 'male'
};

console.log(bar.foo); // undefined

var num1 = 1001; // number

var string = 'hello'; // string
console.log(string[0]); // h
string[0] = 'S';
console.log(string); // hello ===> can't change part of the string. the data feature is read-only. if you want to chage, you need to assign new value.
string = 'Sello';
console.log(string); // Sello
string += ' test'; 
console.log(string); // Sello test
string = string.substring(0, 3);
console.log(string); //hel ===> string is primitive data type but can use the string object method.  
string = string.toUpperCase();
console.log(string); //HEL ===> temporarily transformed into a wrapper object associated with the primitive data type to share the  object prototype.


var obj = {
  name: 'Lee',
  gender: 'male'
}; //object

var array = [ 'Black', 'Gray', 'White']; // array

/*
Operator: make a single value for one or more values
1. Arithmetic Operators | +, -, *, /, %, ++, --
2. Assignment Operators | = , += , -=, *=, /=, %=
3. Comparison Operators | ==(loose equality), ===(strict equality), !=, !==, >, <, <=, >=, ?(ternary operator) 
4. Logical Operators | or ||,  and &&, not !
5. Short-Circuit Evaluation | true || anything -> true, false || anything -> anything, true && anything -> anything, false && anything -> false 
6. Type Operatores | typeof, instanceof
7. !! | exchange to boolean value
*/

var color = 'red'; 
var area = 5 * 4;
var str = 'Hi ' + 'My name is Lee';
var foo = 3 > 5;
var bar = (5 > 3) && (2 < 4);
var today = new Date();

var x = 5;
var y = 2;
var z;

z = x + y; //7
z = x - y; //3
z = x * y; //10
z = x / y; //2.5
z = x % y; //1
z = x++; //5 returns the value of its operand after adding one
z = ++x; //7 returns the value of its operand before adding one
z = x--; //7 returns the value of its operand after substracting one
z = --x; //5 returns the value of its operand before substracting one

var str1 = '5' + 5; // '55' ===> string + num = string
var str2 = 'hello' + 5; // 'hello5'

var x;

x = 10; //10
x += 5; //15
x -= 5; //10
x *= 5; //50
x /= 5; //10
x %= 5; //0

var txt1 = 'what a very ';
txt1 += 'nice day'; //what a very nice day

var x = 5;

x == 5; //true
x == '5'; //true
x == 8; //false

x === 5; //true
x === '5'; //false

x != 8; //true
x != 5; //false
x != '5'; //false

x !== 8; //true
x !== 5; //false
x !== '5'; //true

x > 0 //true
x > 5 //false
x > 8 //false

x < 0 //false
x < 5 //false
x < 8 //true

x >= 0; //true
x >= 5; //true
x >= 8; //false

x <= 0; //false
x <= 5; //true
x <= 8; //true

var condition = true;
var result = condition ? 'true' : 'false' ;
console.log(result); // true

var id = 'lee';
var INPUT_ID_MIN_LEN = 5;
var errMsg = id.length < INPUT_ID_MIN_LEN ? 'please try again' : 'success';
console.log(result); // 'please try again'

var o1 = true || true; //true
var o2 = false || true; //true
var o3 = true || false; //true
var o4 = false || (3 == 4); //false

var a1 = true && true; //true
var a2 = true && false; //false
var a3 = false && true; //false
var a4 = false && (3 == 4); //false

var n1 = !true; //false
var n2 = !false; //true
var n3 = !'Cat'; //false

var foo = 'Cat' && 'Dog' // Dog
var foo = false && 'Cat' // false
var foo = 'Cat' || 'Dog' // Cat

var o1 = 'Cat' || 'Dog'; // Cat
var o2 = false || 'Cat'; // Cat
var o3 = 'Cat' || false; // Cat

var a1 = 'Cat' && 'Dog'; // Dog
var a2 = false && 'Cat'; // false
var a3 = 'Cat' && false; // false

function foo (str) {
  str = str || '';
  // do something with str
  console.log(str.length);
}

foo(); // 0 -> str = str || false (empty string is false value) -> whatever parameter comes, empty string is false so the result would be parameter.length
foo('hi'); // 2

var obj = {
  bar: 'hey'
}

console.log('obj.foo is ' +  obj.foo); //obj.foo is undefined

if (obj && obj.foo) {
  // do something with obj.foo
  console.log('obj.foo is '+ obj.foo);
} // obj && obj.foo -> true && false -> false -> undefined

console.log(typeof ''); //string
console.log(typeof 1); //number
console.log(typeof NaN); //number
console.log(typeof true); //boolean
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof new Date()); //object
console.log(typeof /test/gi); //object
console.log(typeof function() {}); //function
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof undeclared); //undefined

function Person() {}
var me = new Person();
console.log(me instanceof Person); //true

console.log(!!1); //true
console.log(!!0); //false
console.log(!!'string') //true
console.log(!!''); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!{}); //true
console.log(!![]); //true

/*
Keyword: define what action to perform
*/

var x = 5 + 6; // variable
function foo (arg) {
  return ++arg;
} // function

