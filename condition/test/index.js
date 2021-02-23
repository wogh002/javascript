let javascriptName = prompt('자바스크립트 공식 이름은 무엇일까요?', '');
if (javascriptName === 'ECMAScript') alert('정답입니다.')
else alert('모르셨나요? 정답은 ECMAScript 입니다.');

let someNumber = +prompt('you have to put anything number');
let message = (someNumber > 0) ? 1 :
    (someNumber < 0) ? -1 : 0;
alert(message);

let a = +prompt('첫번째 값을 입력해주세요');
let b = +prompt('두번째 값을 입력해주세요');
let result = (a + b < 4) ? '미만' : '이상';
alert(result);
// if (a + b < 4) {
//   result = '미만';
// } else {
//   result = '이상';
// }
