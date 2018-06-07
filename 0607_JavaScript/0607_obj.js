//  object literal : declare and instance happens in the same time
//  var variable_name = { property_name: 'value', property_name: 'value'}
//  variable_name.property_name = 'value; || variable_name['property_name'] = 'value;

var emptyObj = {};
console.log (typeof emptyObj); 
// ===> object

var person = {
  name: 'lee',
  gender: 'male',
  sayHello: function () {
    console.log('hi! my name is '+ this.name);
  }
};

person.sayHello();
person.lastname = 'su';
person['middlename'] = 'u';
console.log(person.lastname);

// Object() constructor function : after making empty object with new operator, include property and method.

var person  = new Object();
// ===> var person = {}; | same. just syntax sugar 

person.name = 'lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('hi! my name is ' + this.name);
}

console.log(typeof person);
console.log(person); 

person.sayHello();

// Constructor function : make a template like a class 
// rule
// 1. name start with Uppercase (for recognize difference with normal function) 
// 2. this.property and this.method represents the instant
// 3. this.property and this.function are public 
// 4. variable that is inside of the function is private

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function() {
    console.log ('hi! my name is ' + this.name);
  };
}

var person01 = new Person ('lee', 'male');

console.log('person01: ', typeof person01);
console.log('person01: ', person01.name, person01.gender);


