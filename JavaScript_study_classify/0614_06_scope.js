//Scope : Global scope & local scope

/*
Global object : window property
*/

var global = 'global';

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local);
}

foo(); // global , local

console.log(global); // global
console.log(local); // reference error

if (true) {
  var x = 5;
}

console.log(x); // global scope x

/*
Local object : function-level scope
*/

var a = 10; // global variable

(function () {
  var b = 20; // loacl variable
})();

console.log(a); // a
console.log(b); // reference error

// practical context w. scope chain

var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);

  function bar () {
    console.log(x); // local
  }

  bar(); // local
}
foo(); // local

console.log(x); // global

// local scope can change global scope value 

var x = 10;

function foo() {
  x = 100;
  console.log(x);
}

foo();
console.log(x); // 100

// 

var x = 10;

function foo() {
  var x = 100;
  console.log(x); // 100

  function bar() {
    x = 1000;
    console.log(x); // 1000
  }
  bar(); // 1000
}

foo(); // 1000

console.log(x); // 10

var foo = function () {
  var a = 3, b = 5;

  var bar = function() {
    var b = 7, c = 11;
    // a=3, b=7, c=11
    a += b + c; 
    // a=21, b=7, c=11
  };
  bar();
  //a=21, b=5
}