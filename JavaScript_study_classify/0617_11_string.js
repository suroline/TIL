//1. String Constructor

new String(value);

//2. String Property : string.length

 var str = 'Hello';
 console.log(str.length); //5

 //3. String Method

 /* 
 3-1. String.property.charAt(pos:number): string
 */

 var str = 'Hello';

 console.log(str.charAt(0)); // H
 console.log(str.charAt(6)); //''

 for (var i = 0; i < str.length; i++) {
   console.log(str.charAt(i)); // H e l l o
   // console.log(str[i]);
 }

/* 
3-2. String.prototype.indexOf
*/

str.indexOf(searchString, fromIndex);

var str = 'Hello World';

console.log(str.indexOf('l')); //2
console.log(str.indexOf('or')); //7

/* 
3-3. String.prototype.lastIndexOf(searchString.fromIndex)
*/

console.log(str.lastIndexOf('l', 8)); //3
console.log(str.lastIndexOf('l', 1)); //-1

/* 
3-4. String.prototype.replace(searchValue, replaceValue)
*/

var replacedStr = str.replace('Hello', 'Hi');

console.log(replacedStr);

replacedStr = str.replace(/hello/gi, 'Hi');

/*
3-5. String.prototype.split(separator.limit)
*/

var str = 'How are you doing?';

var splitStr = str.split(' ');
console.log(splitStr); // 'How' 'are' 'you' 'doing?'

splitStr = str.split(''); // 'H','o','w',' ','a','r','e',' ','y','o','u',' ','d','o','i','n','g','?'

splitStr = str.split(' ', 3); // 'How' 'are' 'you'

splitStr = str.split('o'); //'H', 'w are y', 'u d', 'ing?'

/*
3-6. String.prototype.substring(start.end)
*/

var str = 'Hello World';

var res = str.substring(1, 4);
console.log(res); //ell

res = str.substring(4);
console.log(res); // o World

/*
3-7. String.prototype.toLowerCase()
*/

var res = str.toLocaleLowerCase();
console.log(res); // hello world

/* 
3-8. String.prototype.toUpperCase()
*/

var res = str.toUpperCase();
console.log(res); // HELLO WORLD

/* 
3-9. String.prototype.trim()
*/

var str = '     foo      '
var trimedStr = str.trim(); // foo


