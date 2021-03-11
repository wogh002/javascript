//참조에 의한 비교
//같은 객체를 참조하면 true 아니면 false
//객체 비교시 동등연산자 == 일치연산자 === 는 동일하게 동작한다.
let a = {};
let b = a; //참조에 의한 복사
alert(a == b); // 두 변수는 같은 객체를 참조한다
alert(a === b); //true

let c = {};
let d = a;
alert(d==c); //false -> 독립된 두 객체
