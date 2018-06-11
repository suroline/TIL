// JavaScript Object

/*
Object 
1. JavaScript is object based language, accept primitive data type
2. Object is organized with property and method
| property: {name: value}
| method: {name: function ()}, the function that is inside of the object property 
3. by javascript engine, object literal is also made by constructor function (which is built-in function)
*/

/*
Object literal form
var objectname = {};
var objectname = {
  propertyname1: value,
  propertyname2: function() {
    //do something;
  }
};
*/

var emptyObject = {};
console.log(typeof emptyObject); //object

var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function(){
    console.log('hi ' + this.name);
  }
};

console.log(typeof person); //object
console.log(person); // name: Lee, gender: male, sayHello: function

person.sayHello(); // hi Lee
console.log(person.name); // Lee

/*
Object() constructor function
1. make with new operator and empty Object
2. include property value at empty object
*/

var person = new Object(); // ===> var person = {}; short-hand 

person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log ('hi '+ this.name);
};

console.log(typeof person); //object
console.log(person); // name: Lee, gender: male, sayHello: function

person.sayHello(); // hi Lee

/*
Constructor function
1. Usually make function name with Uppercase to make difference with normal function
2. this keyword that is in front of property or method name point to the instance that constructor function will generate
3. binding with this property is public
4. the variable that is declared inside of constructor function is private
*/

function Person(name, gender) {
  var married = true;             // private
  this.name = name;               // public
  this.gender = gender;           // public
  this.sayHello = function (){    // public
    console.log('hi ' + this.name);
  };
}

var person1 = new Person('Lee', 'male'); //new object is made that property value have Lee and male
var person2 = new Person('Kim', 'female'); //new object is made that property value have Kim and female

console.log(person1); //{name: "Lee", gender: "male", sayHello: ƒ}
console.log(person2.gender); //female
console.log(Person.merried); //undefined

person1[sayHello()]; // hi Lee
person2.sayHello(); // hi Kim

Person.age = age;

console.log(Person.age);

var person = {
  'first-name': 'Lee',
  gender: 'female',
  age: 50,
  sayHello: function() {
    console.log('Hi ' + this['first-name']);
  }
};

delete person.gender;

console.log(person.gender); //undefined





