// Function : group of code that can be reusable, object that can be recalled, can be use as parameter

/* 
1-1. Function declaration
- function name : in function declaration, the function name cannot be ommitted
- parameter (argument, argument)
- function body: {code something ro do, return value;}
*/

function square (number) { // ===> javascript engine makes function delcaration to function expression
  return number * number;
} 

// same as this:  var square = function square (number) { return number * number; }

/*
1-2. Function expression
Function is first-class-object by these feature
- it can be no-name literal (anonymous function)
- it can be saved as variable or information structure (object, array etc)
- it can send as parameter
- it has return value
* Because of hoisting system, mostly recommand to use function expression compare to function declaration.
*/

var square = function(number) {
  return number * number;
};

var foo = function multiply(a, b) { // named function expression
  return a * b;
};

var bar = function(a, b) { // anonymous function expression
  return a * b;
};

console.log(foo(10, 5)); //50
console.log(multiply(10, 5)); // ReferenceError : Recursive function call

var foo = function(a, b) {
  return a * b;
};

var bar = foo;

console.log(foo(10, 10)); //100
console.log(bar(10, 10)); //100

//First-class-object

var increase = function(num) {
  return num + 1;
};

var decrease = function(num) {
  return num - 1;
};

var obj = {
  increase: increase,
  decrease: decrease
};

var calc = function(func, num) {
  return func(num);
}

console.log(calc(increase, 1));
console.log(calc(decrease, 1));

var calc = function(mode) {
  var func = {
    plus: function(left, right){return left + right;},
    minus: function(left, right){return left - right;}
  };
  return func[mode];
}

console.log(calc('plus')(2,1));


/*
1-3. Function() constructor function
Usually use for access to the prototype property : function.prototype.constructor
*/

new Function(arg1, arg2, ... argN, functionBody)

var square = new Function ('number', 'reurn number * number');
console.log(square(10)); //100


/*
call-by-value: primitive data type, copy the value
call-by-reference: object type, reference the value address
*/

function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); //1
console.log(x); //0

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim';
  obj.gender = 'female';
  return primitive;
}

var num = 100;
var obj = {
  name: 'lee',
  gender: 'male'
}

console.log(num, obj); // 100, {name: lee, gender: male}

changeVal(num, obj);

console.log(num); // 100
console.log(changeVal(), obj); // 200, {name: kim, gender: female}

/*
Return value
- use for return the value to the caller
- use by array, it can return the value mulitiply
- it can be ommitted, and return the undifened
- if javaScript engine meets return keyword, the function returns the value and go back to the caller. so if there are codes that is after the return keyword doesnt work. 
*/

function calcArea (width, height){
  var area = width * height;
  return area; 
}

console.log(calcArea(3, 5)); //15

function getSize (width, height, depth){
  var area = width * height;
  var volume = width * height * depth;
  return [area, volume];
}

console.log(getSize(3,2,3)[0]); //6
console.log(getSize(3,2,3)[1]); //18
console.log(getSize(3,2,3)[2]); //undefined

/*
function object property
*/

function square(num) {
  return num * num;
}

square.x = 10;
square.y = 20;

square(5); //25
console.log(square(5), sqaure.x, square.y); //25, 10, 20

function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

multiply(1, 2); // Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ] , 2

function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

sum(1,2); //3
sum(1,2,3); //6

//array-like object: like array but cannot use array method. Instead use function.prototype.call or function.prototype.apply

function sum() {
  if (!aruments.length) return 0;

  // arguments object -> array
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1,2,3,4,5)); //15

//length property : number of parameter | arguments.length is number of arguments

function foo() {}
console.log(foo.length); //0

function bar(x) {
  return x;
}

console.log(bar.length); //1

function baz(x, y) {
  console.log(arguments.length); //5
  return x*y;
}

console.log(baz.length); //2

baz(1,2,3,4,5);

/*
Various type of function
1. IIFE: Immediately Invoke Function Expression
2. Inner function
3. Callback function 
*/

(function myFunction() {
  var a = 3;
  var b = 4;
  return a * b;
}());

(function() {
  var a = 3;
  var b = 4;
  return a * b;
}());

(function () {
  var foo = 1;
  console.log(foo); //1
}());

var foo = 100;
console.log(foo); //100

function parent (param) {
  var parentVar = param;
  function child() {
    var childVar = 'lee';
    console.log(parentVar + '' + childVar);
  }
  child();
  console.log(parentVar + '' + childVar);
}

parent('Hello');

function sayHello(name){
  var text = 'Hello ' + name;
  var logHello = function() {
    console.log(text);
  }
}

sayHello('lee'); // Hello lee
logHello('lee'); // logHello is not defined

setTimeout(function () {
  console.log('print out 1 sec later');
}, 1000);

function doSomething() {
  var name = 'Lee';

  setTimeout(function() {
    console.log('My name is '+ name);
  }, 1000);
}

doSomething(); // My name is Lee