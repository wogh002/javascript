//객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다.
//반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
//typeof 연산자는 인수의 자료형을 반환합니다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용합니다.
typeof undefined; //undefined
console.log(typeof 0); //number
typeof 10n //bigint
console.log(typeof true); //true
typeof 'foo';
typeof Math; //object
console.log(typeof null); //object
//typeof null의 결과는 "object"입니다. null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만,
// 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다.
// 언어 자체의 오류이므로 null이 객체가 아님에 유의하시기 바랍니다.
console.log(typeof alert); //function.
//피 연산자가 함수 일 시 'function'을 반환한다.
//그런데 함수 형은 따로 없다. 함수는 객체형에 속한다.
//함수도 객체다


// 자바스크립트에는 여덟 가지 기본 자료형이 있습니다.
// 숫자형 – 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.
// bigint – 길이 제약 없이 정수를 나타낼 수 있습니다.
// 문자형 – 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.
// 불린형 – true, false를 나타낼 때 사용합니다.
// null – null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.
// undefined – undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.
// 객체형 – 복잡한 데이터 구조를 표현할 때 사용합니다.
// 심볼형 – 객체의 고유 식별자를 만들 때 사용합니다.
// /null의 typeof 연산은 "object"인데, 이는 언어상 오류입니다. null은 객체가 아닙니다.