//자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있습니다. 따라서 변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있습니다.
let message = 'hello';
message = 123456;
console.log(message);
//이처럼 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 ‘동적 타입(dynamically typed)’ 언어라고 부릅니다.

alert(1 / 0); //무한대 ->Infinity 0으로 1을 나눈다 -> 어떤 숫자든 0으로 나누면 무한대를 가진다.
alert(Infinity);
console.log('숫자가 아님' / 2); //NaN 문자열을 숫자로 나누면 오류가 발생 //NaN
//NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값입니다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이때 NaN이 반환됩니다.
let str = "Hello"//js 에서 문자열 같은 경우 따옴표로 묶는다.
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; //backtick 백틱. 역 따옴표 -->표현식
console.log(phrase);
//역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있습니다.
let currentUserName = 'John';
alert(`Hello!, ${currentUserName}`);
alert(`the result is ${1 + 2}`); //표현식을 문자열 중간에 삽입. (무엇이든 들어 갈수 있음)
//boolean
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
alert(isGreater);
//자료형 - > null 값 (empty)비어있는 값 
let age1 = null;
//자료형 - > undefinded 값 -> 변수선언은 했지만 할당이 되지 않은 상태.
let age2;
console.log(age2);
// /개발자가 변수에 undefined를 명시적으로 할당하는 것도 가능하긴 합니다.
let age;
age = 100;
age = undefined;
console.log(age);
//하지만 이렇게 undefined를 직접 할당하는 걸 권장하진 않습니다. 
//변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null을 사용하세요. 
//undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남겨둡시다.