//함수 표현식 vs 함수 선언문.

//함수 선언문: 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재합니다.
function sum(a, b) {
    return a + b;
};
//함수 표현식 : 연산자 (=) 을 이용해 만든다.
let sum = function (a, b) {
    return a + b;
};
//두 번째 차이는 자바스크립트 엔진이 언제 함수를 생성하는지에 있습니다.

//함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.

//하지만 함수 선언문은 조금 다릅니다.
//함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.