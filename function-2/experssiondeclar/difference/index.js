//엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.
'use strict'
let age = prompt('나이를 알려주세요', 18);
//조건에 따라 함수를 선언함
if (age < 18) {
    function welcome() {
        alert('안녕')
    }
}
else {
    function welcome() {
        alert('안녕하세요!')
    }
};
welcome();//Error : welcome is not defined (be+pp) 남에 의해 당한느낌 
//함수 선언문은 함수가 선언된 코드 블록 안에서만 유효하기 때문에 이런 에러가 발생합니다.

let age = prompt('나이를 알려주세요');
if (age < 16) {
    function welcome() { //함수 선언문은 함수가 선언된 블록 내 어디서든 유효하다.
        alert('안녕')
    };
    welcome();
}
else {
    function welcome() {
        alert('안녕하세요!')
    }
    welcome();
}
