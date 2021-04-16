//함수 선언(function declaration) 방식을 이용하면 함수를 만들 수 있습니다(함수 선언 방식은 함수 선언문이라고 부르기도 합니다 – 옮긴이).
function showMessage() { //함수선언문
    alert('안녕하세요!');
}
//함수의 주요 용도 중 하나는 중복 코드 피하기입니다.
//함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있습니다.
function localVal() {
    let message = '안녕하세요';
}

let userName = 'John'; //전역 변수 생성.
function showMessagee() {
    userName = 'JJJJJJJ';
    let message = 'Hello' + userName;
    alert(message);
};
//전역변수를 수정도 할 수 있다.
alert(userName); //함수 호출 전이므로 'John'
showMessagee(); // 'JJJJJJ';



