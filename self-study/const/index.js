'use strict';
//상수 = 변화하지 않는 수.
//let 대신 const 사용하자.
const myBirthday = '01.25.1996';
//상수는 재 할당 할 수 없으므로 상수를 변경하려고 하면 에러가 발생한다
console.log(myBirthday);
myBirthday = '99999'; // error, can't reassign the constant!
console.log(myBirthday);

//대문자 상수
//대문자 상수는 ‘하드 코딩한’ 값의 별칭을 만들 때 주로 사용합니다. 실행 전에 이미 값을 알고 있고, 코드에서 직접 그 값을 쓰는 경우에 사용하죠.
//기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습 입니다.
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00F';
const COLOR_ORANGE = '#FF7F00';
let color = COLOR_ORANGE;
console.log(color);


