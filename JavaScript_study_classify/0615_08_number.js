// Number object : it can use number object property

var num = 1.5;
console.log(num.toFixed()); //2

/*
1. Number Constructor
- Number() constructor function
*/

var x = new Number(123);
var y = new Number('123');
var z = new Number('str');

console.log(x); // 123
console.log(y); // 123
console.log(z); // NaN

var zz = Number('123'); // 
console.log(typeof zz, zz); // number, 123 -> type casting

var xx = 123;
var yy = new Number(123);

console.log(xx == yy); //true
console.log(xx === yy); //false

console.log(typeof xx); //number
console.log(typeof yy); //object

/*
2. Number Property : static property
*/

// 2-1. Number.EPSILON

Number.EPSILON; // 2.220446049250313e-16

console.log(0.1+0.2); //0.30000000000000004
console.log(0.1+0.2 == 0.3); //false

function isEqual(a,b){
  return Math.abs(a-b) < Number.EPSILON;
}

console.log(isEqual(0.1+0.2, 0.3)); //true

// 2-2. Number.MAX_VALUE

Number.MAX_VALUE; // 1.7976931348623157e+308

var num = 10;
num.MAX_VALUE; // undefined

console.log(Infinity > Number.MAX_VALUE); // true

// 2-3. Number.MIN_VALUE

Number.MIN_VALUE; // 5e-324

num.MIN_VALUE; //undefined

console.log(Number.MIN_VALUE > 0); // true

// 2-4. Number.POSITIVE_INFINITY

Number.POSITIVE_INFINITY // Infinity

num.POSITIVE_INFINITY; //undefined

// 2-5. Number.NEGATIVE_INFINITY

Number.NEGATIVE_INFINITY // -Infinity

num.NEGATIVE_INFINITY; // undefined

// 2-6. Number.NaN

console.log(Number('xyz')); // NaN
console.log(1*'str'); // NaN
console.log(typeof NaN); // number

/*
3. Number Method
*/

// 3-1. Number.isFInite(testValue:number):boolean

Number.isFinite(testValue)

Number.isFinite(Infinity) //false
Number.isFinite(NaN) //false
Number.isFinite('Hello') //false

Number.isFinite(0) //true
Number.isFinite(2e64) //true
Number.isFinite(null) //false
Number.isFinite('123') //false

isFinite(null); //true
isFinite('123'); //true

// 3-2. Number.isInteger(testValue:number):boolean / Number.isSafeInteger

Number.isInteger(testValue)

Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(5-2) //true
Number.isInteger(0) //true
Number.isInteger(0.5) //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity) //false
Number.isInteger(0/0) //false

// 3-3. Number.isNaN(testValue:number):boolean

Number.isNaN(testValue)

Number.isNaN(NaN) //true
Number.isNaN(undefined) //false 
Number.isNaN({}) //false
Number.isNaN('blabla') //false
Number.isNaN(new Date().toString()) //false

isNaN(undefined); //true
isNaN({})l //true
isNaN('blabla') //true
isNaN(new Date().toString()) //true

// 3-4. Number.prototype.toString(radix?:number):string

numObj.toString([radix])

var count = 10;
console.log(count.toString()); //'10'
console.log((17).toString); //'17'

//3-5. Number.prototype.valueOf():number -> return primitive value

var numObj = new Number(10);
console.log(typeof numObj); //object

var num = numObj.valueOf();
console.log(num); //10
console.log(typeof num); //number