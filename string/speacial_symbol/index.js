//특수기호 줄바꿈 문자 \n. newline character
let guestList = "손님:\n * John\n * Pete\n * Mary";
console.log(guestList);

const str1 = '손님\nA';
const str2 = `손님
A`;
console.log(str1===str2);
//유니코드란, 숫자와 글자, 즉 키와 값이 1:1로 매핑된 형태의 코드 인것이다.
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, 중국어(긴 유니코드)
alert( "\u{1F60D}" ); // 😍, 웃는 얼굴 기호(긴 유니코드)