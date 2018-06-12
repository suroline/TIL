// Prototype object : all of the object has their hiden [[Property]] that  directs to object property

var student = {
  name: 'lee',
  score: 90
};

console.log(student.hasOwnProperty('name')); //true

/*
[[Property]] vs property
[[Property]] : all of the object have this property, directs to parent property and use thier feature
property : only function object can have this property. 
*/

function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // has function property, constructor
console.dir(foo); // no property

console.log(Person.prototype.constructor === Person); // true

console.log(foo.constructor === Person); // true

console.log(Person.constructor === Function); // true

/*
Prototype chain
1. object literal : object.prototype
2. object () constructor function : object.prototype
3. constructor function : function name.prototype
*/

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function() {
    console.log('Hi! ' + this.name);
  };
}

var foo = new Person('Lee', 'male');

console.dir(Person);
console.dir(foo);

console.log(foo.__proto__ === Person.prototype); //true
console.log(Person.prototype.__proto__ === Object.prototype); //true
console.log(Person.prototype.constructor === Person); //true
console.log(Person.__proto__ === Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true

function Person(name) {
  this.name = name;
}

var foo = new Person('Lee');

Person.prototype.sayHello = function(){
  console.log('Hi ' + this.name);
};

foo.sayHello(); // Hi Lee

Person.prototype = {
  gender: 'male'
};

var bar = new Person('kim');

console.log(foo.gender); // undefined
console.log(bar.gender); // male
