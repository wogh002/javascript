//객체에 프로퍼티의 존재 유무를 알고 싶다 ? => in 연산자로 프로퍼티 존재 여부 확인
//in 왼쪽엔 반드시 프로퍼티 이름이 와야 합니다. 프로퍼티 이름은 보통 따옴표로 감싼 문자열입니다.
let user = {};
alert(user.abc === undefined);
//자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined 반환한다.
//  'key' in object

let foods = {
    apple: 'abc',
};
alert('apple' in foods); //'apple' 프로퍼티 존재한다면 true 반환
