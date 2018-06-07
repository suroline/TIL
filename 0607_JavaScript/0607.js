/*
Q7. 문자열을 숫자로 바꾸기
strToInt 메소드는 문자열 str을 매개변수로 받는다. 
str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라. 
예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. 
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

function strToInt(str){

}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234
*/

// 들어온 매개변수를 문자를 숫자로 변환하여 변수에 넣어준다. +를 해줌
// 해당 변수를 반환한다. 

function strToInt (str) {
  var num = +str;
  result (num);
}

console.log (str);

/*
Q8. 수박수박수박수박수박수?
waterMelon 함수는 정수 n을 매개변수로 입력받는다. 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

function waterMelon(n){

}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
*/

// 수박 변수의 길이는 무한대이고, 인덱스의 짝수는 수 홀수는 박 
// n의 값을 수박 변수의 length값으로 보고, 인덱스의 -1까지 반환함.

