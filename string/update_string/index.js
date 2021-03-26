'use strict';
//문자열은 수정 할 수 없다.
//따라서 문자열의 중간 글자 하나를 바꾸려고 하면 에러가 발생한다.
let str = 'Hi';
str[0] = 'h';
console.log(str);
//위에서 이런 문제를 피하려면 완전히 새로운 문자열을 하나 만든 다음, 이 문자열을 str에 할당하면 됩니다.
let str = 'Hi';
str = 'h' + str[1]; // 문자열 전체를 교체함 (새로운 문자열을 만듬) hi
alert(str); // hi