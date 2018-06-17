// Date Constructor

new Date();
new Date(milliseconds);
new Date(dateString);
new Date(year, month, day, hour, minute, second, millisecond);

/*
1-1. new Date()
*/

var dateObj = new Date();
console.log(typeof dateObj, dateObj); // object Sun Jun 17 2018 12:07:40 GMT+0900 (한국 표준시)

var dateStr = Date();
console.log(typeof dateStr, dateStr); //string Sun Jun 17 2018 12:07:40 GMT+0900 (한국 표준시)

/*
1-2. new Date(miliseconds)
86400000ms = day 1
*/

var sec01 = new Date(0);
console.log(sec); //Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
var sec02 = new Date(866666666);
console.log(sec); //Sun Jan 11 1970 09:44:26 GMT+0900 (한국 표준시)

/*
1-3. new Date(dateString)
*/

var d = new Date('May 12, 2016 12:13:00');
console.log(d); //Thu May 12 2016 12:13:00 GMT+0900 (한국 표준시)

var dd = new Date('2017/08/20:00:00');
console.log(dd); //Tue Aug 01 2017 20:00:00 GMT+0900 (한국 표준시)

/*
1-4. new Date(year, month, day, hour, min, sec, millisec)
*/

var d = new Date(1999, 1, 3, 11, 33, 30, 0);
console.log(d); //Wed Feb 03 1999 11:33:30 GMT+0900 (한국 표준시)

var d = new Date('1999/1/3/11:33:00:00');
console.log(d); //Sun Jan 03 1999 11:33:00 GMT+0900 (한국 표준시)

// Date Method

/*
2-1. Date.now()
*/

var n = Date.now();
console.log(n);

/*
2-2. Date.parse()
*/

var d = Date.parse('Jan 1, 1970 00:00:00 UTC');
console.log(d); // 86400000

/*
2-3. Date.prototype.getFullYear()
*/

var today = new Date();
var year = today.getFullYear();

console.log(today);
console.log(year);

/*
2-4. Date.prototype.setFullYear()
*/

dateObj.setFullYear(yearValue, monthValue, dayValue)

var today = new Date(); 

console.log(today.getFullYear()); ////2018

today.setFullYear(2000);
var year = today.getFullYear();

console.log(today); //Sat Jun 17 2000 12:54:02 GMT+0900 (한국 표준시)
console.log(year); //2000

(function printNow() {
  var today = new Date();

  var dayNames = ['(sunday)', '(monday)', '(tuesday)', '(wednesday)', '(thursday)', '(friday)', '(saturday)']

  var day = dayNames[today.getDay()];

  var year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate(),
      hour = today.getHours(),
      minute = today.getMinutes(),
      second = today.getSeconds();
      ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;
  hour = hour ? hour : 12; 

  minute = minute < 10 ? '0'+minute : minute;
  second = second < 10 ? '0'+second : second;

  var now = year + month + date + day + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;

  console.log(now);
  setTimeout(printNow, 1000);
}());

