//콜백함수
//함수가 다른함수의 인자로 들어간 후에 나중에 호출하는 함수.
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
function showOk() {
    alert('동의하셨습니다.');
}
function showCancel() {
    alert('취소하셨습니다.');
}
ask('동의하십니까?', showOk, showCancel);
//함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불립니다.

//아래는 함수 표현식을 사용한 ex)
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
//이렇게 이름 없이 선언한 함수는 익명 함수(anonymous function) 라고 한다.\
//익명 함수는 (변수에 할당된 게 아니기 때문에) ask 바깥에선 접근할 수 없습니다. 위 예시는 의도를 가지고 이렇게 구현하였기 때문에 바깥에서 접근할 수 없어도 문제가 없습니다.
ask(
    "동의하십니까?",
    function () { alert("동의하셨습니다."); },
    function () { alert("취소 버튼을 누르셨습니다."); }
);