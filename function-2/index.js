//함수 선언문 방식
function sayHi() {
    alert('hello');
}
//함수 표현식 방식
let sayHi = function () {
    alert('hello');
}
//함수를 생성하고 변수에 값을 할당하는 것처럼 함수가 변수에 할당되었습니다.
// 함수가 어떤 방식으로 만들어졌는지에 관계없이 
//함수는 값으로써 사용 할 수 있다, 따라서 변수에 할당할 수 있습니다.
alert(sayHi); //함수 코드가 보임.
// 자바스크립트는 괄호가 있어야만 함수가 호출됩니다.
let func = sayHi; //함수복사
func();
sayHi();


