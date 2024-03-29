//자바스크립트는 날짜, 오류, HTML 요소(HTML element) 등을 다룰 수 있게 해주는 다양한 내장 객체를 제공합니다.
//primitive 을 객체로써 사용할 수 있게 끔해주는것이 wrapper 객체
//래퍼 객체는 원시 자료형의 이름을 그대로 차용해, String,Number,Boolean, Symbol라고 부릅니다.
//래퍼 객체 마다 제공하는 메서드 역시 다릅니다.
let str = 'hello';
alert(str.toUpperCase());
//1.문자열 str은 원시값이므로 원시값의 프로퍼티(toUpperCase)에 접근하는 순간 특별한 객체가 만들어집니다.
//이 객체는 문자열의 값을 알고 있고, toUpperCase()와 같은 유용한 메서드를 가지고 있습니다.
//2.메서드가 실행되고 , 새로운 문자열이 반환된다.
//3.특별한 객체는 파괴되고 원시값 str만 남는다.

//숫자형도 고유한 메서드를 지원합니다.
// 메서드 toFixed(n)를 이용하면 원하는 자리에서 소수점 아래 숫자를 반올림할 수 있습니다.
let n = 1.23456;
alert(n.toFixed(3)); //1.235

