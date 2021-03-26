//자바스크립트에선 UTF-16을 사용해 문자열을 인코딩합니다.
// 문자열을 비교할 땐 알파벳 순서를 기준으로 글자끼리 비교가 이뤄집니다.
// 소문자는 대문자보다 항상 큽니다.
alert('a' > 'b'); //false;
alert('a' > 'F'); //true;

//발음 구별 기호(diacritical mark)가 붙은 문자는 알파벳 순서 기준을 따르지 않습니다.
alert('Österreich' > 'Zealand'); // true

//모든 문자열은 UTF-16을 사용해 인코딩되는데, UTF-16에선 모든 글자가 숫자 형식의 코드와 매칭됩니다. 
alert('z'.codePointAt(0)); //122
alert('Z'.codePointAt(0)); //90
alert(String.fromCodePoint(90)); // 'Z'

//이제 이 배경지식을 가지고 코드 65와 220 사이 대응되는 글자들을 출력해보자
let str = '';
for (let i = 65; i < 220; i++) {
    str += String.fromCodePoint(i);
}
console.log(str);




