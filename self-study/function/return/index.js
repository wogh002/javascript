//returnv value
//함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환할 수 있다
function sum(a, b) {
    return a + b;
}
//실행 흐름이 지시자 return을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환합니다. 
let result = sum(1, 2);
alert(result);



// /아래와 같이 함수 하나에 여러 개의 return문이 올 수도 있습니다.
function checkAge(age) {
    if (age >= 18) return true;
    else return confirm('보호자의 동의를 받으셨나요?');
}
let age = +prompt('나이를 알려주세요', 18);
if (checkAge(age)) {
    alert('접속 허용');
}
else alert('접속 차단');

//지시자 return만 명시하는 것도 가능합니다. 이런 경우는 함수가 즉시 종료됩니다.
function showMovie(age) {
    if (!checkAge(age)) { //만약 false 를 반환한다면 함수가 종료된다. return 지시자를 만나게 되어서.
        return;
    }
    alert('영화 상영');
}

///return문이 없거나 return 지시자만 있는 함수는 undefined를 반환합니다.
///return문이 없는 함수도 무언가를 반환합니다. undefined를 반환하죠.
function doNothing() { /* empty*/ }

alert(doNothing() === undefined); //true

function doNothing2() {
    return;
}
alert(doNothing2() === undefined); // true

// //주의 ★
//return과 값 사이에 절대 줄을 삽입하지 마세요.
//반환하려는 값이 긴 표현식인 경우, 아래와 같이 지시자 return과 반환하려는 값 사이에 새 줄을 넣어 코드를 작성하고 싶을 수도 있습니다.
return
(some + long + expression + or + whatever * f(a) + f(b))
//자바스크립트는 return문 끝에 세미콜론을 자동으로 넣기 때문에 이렇게 return문을 작성하면 안 됩니다. 위 코드는 아래 코드처럼 동작합니다.
return;
(some + long + expression + or + whatever * f(a) + f(b))
//따라서 반환하고자 했던 표현식을 반환하지 못하고 아무것도 반환하지 않는 것처럼 되어버립니다
//표현식을 여러 줄에 걸쳐 작성하고 싶다면 표현식이 return 지시자가 있는 줄에서 시작하도록 작성해야 합니다. 
//또는 아래와 같이 여는 괄호를 return 지시자와 같은 줄에 써줘도 괜찮습니다.
return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
)

//함수 이름 짓기 
//함수는 어떤 동작을 수행하기 위한 코드를 모아놓은 것입니다. 따라서 함수의 이름은 대개 동사입니다. 
//함수가 어떤 동작을 하는지 설명할 수 있어야 하죠. 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 합니다.

