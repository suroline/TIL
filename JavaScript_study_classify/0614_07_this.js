//this : refer to own instance

function square(num) {
  console.log(arguments);
  console.log(this);

  return num*num;
}

var res = square();

/* 
Binding
Despands on function invocation pattern type, which object this would binding changes
*/

/*
1. Function invocation pattern
Basically this binds to global object
*/

var ga = 'Global variable';

console.log(ga); //Global variable
console.log(window.ga); //Global variable

function foo() {
  console.log('invoked!');
}
window.foo(); //invoked

function foo () {
  console.log("foo's this: ", this); //window
  function bar() {
    console.log("bar's this: ", this); //window
  }
  bar();
}

foo();

var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ", this); //obj
    console.log("foo's this.value: ", this.value); //100
    function bar() {
      console.log("bar's this: ", this); //window
      console.log("bar's this.value: ", this.value); //1
    }
    bar();
    setTimeout(function() {
      console.log("callback's this: ", this); //window
      console.log("callback's this.value: ", this.value); //1
    }, 100);
  }
};

obj.foo();

// to avoid inner function binding the window 

var val = 1;

var object = {
  val: 100,
  foo: function() {
    var that = this; //workaround: this === obj

    console.log("foo's this: ", this); //obj
    console.log("foo's this.value: ", this.value); //100
    function bar() {
      console.log("bar's this: ", this); //window
      console.log("bar's this.value: ", this.value); //1

      console.log("bar's that: ", that); //obj
      console.log("bar's that.value: ", that.value); //100
    }
    bar();
  }
}

object.foo();

/*
2. Method Invocation Pattern
 */

 var obj1 = {
   name: 'Lee',
   sayName: function() {
     console.log(this.name); //Lee
   }
 }

 var obj2 = {
   name: 'Kim'
 }

 obj2.sayName = obj1.sayName;

 obj1.sayName(); //Lee
 obj2.sayName(); //Kim


 function Person (name) {
   this.name = name;
 }

 Person.prototype.getName = function() {
   return this.name;
 }

 var me = new Person('Lee');
 console.log(me.getName()); //Lee

 Person.prototype.name = 'Kim';
 console.log(Person.prototype.getName()); //Kim

 /*
 3. Constructor Invocation Pattern
 - 01. empty object create, and this directs to this empty object
 - 02. this can generate property or method
 - 03. absence of return keyword, this can return the new object.
 so, when using as constructor function doesn't need to use reture keyword.
 */

function Person (name) {
  // ----- 01
  this.name = name; // ----- 02
  // ----- 03
}

var me = new Person ('Lee');
console.log(me.name);

//object literal
var foo = {
  name: 'foo',
  gender: 'male'
};

console.dir (foo); //object

//constructor function

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var me = new Person('Lee', 'male');
console.dir(me); //function person

var you = new Person('Kim', 'female');
console.dir(you); //function person

//Scope-Safe Constructor

function A(arg) {
  // arguments.callee = function name that called
  if (!(this instanceof arguments.callee)) {
    return new arguments.callee(arg);
  }
  this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value); //100
console.log(b.value); //10

/*
Apply invocation pattern
*/

func.apply(thisArg, [argsArray]) 
// thisArg : inner function object that this is binding
// argsArray: arguments array

var Person = function (name) {
  this.name = name;
};

var foo = {};

Person.apply(foo, ['name']);

console.log(foo); // {name: 'name'}

function convertArgsToArray() {
  console.log(arguments);

  var arr = Array.prototype.slice.apply(arguments);

  console.log(arr);
  return arr; 
}

convertArgsToArray(1, 2, 3); // [1, 2, 3]


// problem: callback function error while using this

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if(typeof callback == 'function') {
    callback();
    // ----- this binding to person
  }
};

function foo() {
  console.log(this.name); // ----- this binding to window
}

var p = new Person('Lee');
console.log (p.doSomething());
p.doSomething(foo); // reference error: binding this is different


// figuring out #1: make smae this biding

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  if (typeof callback == 'function') {
    callback.call(this); 
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo); // Lee


// figuring out #2: use function.prototype.bind (ES5)

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function(callback) {
  if (typeof callback == 'function') {
    callback.bind(this)();
  }
};

function foo() {
  console.log(this.name);
}

var p = new Person('Lee');
p.doSomething(foo);


