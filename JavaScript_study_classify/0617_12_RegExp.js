// Regular Expression 

var targetStr = 'This is a pen.';
var regexr = /is/ig;

// RegExp object method
console.log(regexr.exec(targetStr)); 
console.log(regexr.test(targetStr));

// String object method
console.log(targetStr.match(regexr));
console.log(targetStr.replace(regexr, 'IS'));
console.log(targetStr.search(regexr)); 
console.log(targetStr.split(regexr));

// Flag : i_ignore case, g_global, m_multi line

var targetStr = 'Is this all there is?'
var regexr = /is/;

console.log(targetStr.match(regexr)); // 'is', index: 5, input: 'Is this all there is?'

regexr = /is/ig;
console.log(targetStr.match(regexr)); // Is, is, is

// Pattern

var targetStr = 'AA BB Aa Bb';

var regexr = /.../;
console.log(targetStr.match(regexr)); // 'AA '

regexr = /.../g; 
console.log(targetStr.match(regexr)); // 'AA ', 'BB ', 'Aa '

regexr = /./g;
console.log(targetStr.match(regexr)); // 'A', 'A', ' ', 'B', 'B', ' ', 'A', 'a', ' ', 'B', 'b'

var regexr = /A/;
console.log(targetStr.match(regexr)); // A

regexr = /A/ig;
console.log(targetStr.match(regexr)); // A, A, A, a

regexr = /A+/g;
console.log(targetStr.match(regexr)); // AA A

regexr = /A|B/g;
console.log(targetStr.match(regexr)); // A A B B A B

regexr = /A+|B+/g;
// regexr = /[AB]+/g;
console.log(targetStr.match(regexr)); // AA BB A B

var target = 'AA BB ZZ Aa Bb'

var regExr = /[A-Z]/g;
console.log(target.match(regExr)); // 'AA', 'BB', 'ZZ', 'A', 'B'

var numberTarget = 'AA BB ZZ 24,000';

var regExrNum = /[0-9,]+/g;
console.log(numberTarget.match(regExrNum)); //24,000

regExrNum = /[\d,]+/g;
var regExrStr = /[\D,]+/g;

console.log(numberTarget.match(regExrNum));
console.log(numberTarget.match(regExrStr));

regExrNum = /[\w,]+/g; // alphabet and number 

/* 
RegExp that Usually use
*/

var url = 'http://example.com';
var regexr = /^http/; //start with typical word 
console.log(regexr.test(url)); //true

regexr = /com$/; // ends with typical word

regexr = /^\d+$/; // check if all of them are number \d => number, ^ => start, $ => end

var targetStr = ' hi!';

var regexr = /^[\s]+/;
console.log(regexr.test(targetStr)); //true


