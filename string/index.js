let single = '작은따옴표';
let double = "큰따옴표";
let backticks = '백틱';
//작은따옴표와 큰따옴표는 기능상 큰 차이가 없다.
//but, 백틱은 특별한 기능이 있다.
//표현식을 ${…}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입할 수 있죠. 
//템플릿 리터럴 이라고 한다.
function sum(a, b) {
    return a + b;
}
alert(`1+2 = ${sum(1, 2)}`);


