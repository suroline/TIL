# Statements
- In a computer programing language, 

# Declarations
- Variables : You use variables as symbolic names for values in your application. The names of variables, called *identifiers, conform to certain rules.
  - var
  - let
  - const
- Memory Address (메모리 주소) : reusable 
- undefined: 초기화 / 공간 확보를 함
- 할당 / 재할당: 숫자를 넣으면, 숫자 타입이란 것을 그때 알게 됨. 
- garbage collection: 무의미한 값을 치워주는 역할 
- check the data type
  - console.log(typeof variable_name); 

# Data type
- * Primitive data type : immutable
  - 기본 자료형의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달) 
    - boolean : 논리적인 요소를 나타내며 true와 false 두가지 값을 가질 수 있다. 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주
    - null : 주의할 것은 자료형을 나타내는 문자열을 반환하는 typeof 연산자로 null값은 가진 변수를 연산해 보면 null이 아닌 object가 나옴
    - undefined : 없어도 undefiend가 나옴 // 선언 이후 값을 할당하지 않은 변수
    - number : 실수만 취급, infinity 값이 존재, NaN (상수)=> error가 아닌 nan
    - string : 타 언어는 기본 자료로 취급하지 않음 // C언어: pointer
- object type : 변경이 가능하다. mutable, pass-by-reference, Dynamic Typing

- 전역 변수는 쓰면 안됨. 함수 내에서 변수 할당 후 써야 함.

- var는 ES6로 부터 금지가 됨. 

# Operator

# Comparison Operators
- never use == this means loose equality. have to compare type of variable.
- 가독성이 좋은 걸 선택해서 씀 
- VAR에서 대문자 넣은 것은 재할당 하지 말란 의미임 : 상수
- const 는 재할당이 안됨 : 상수

- 변수 중 기본 객체라 하더라도 property를 하단에서 명시하면 기본 객체가 오브젝트 객체가 됨
- 다만, undeifined의 경우엔 에러가 뜸 
- type casting 형변환


# hoisting 
var는 위에 콘솔로그가 있어도 됨
let/const 는 제대로 작동 (ES6)

# conditional statement
- if: 불리언으로 평가될 수 있는 값이 들어가야 함
