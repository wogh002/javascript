//매개변수 기본값을 설정하는 방법 -1

//매개변수에 값을 전달하지 않으면 그 값은 undefined 가 된다.
function showMessage(from, text = 'default value setting') {
  alert(from + ':' + text);
}
showMessage('Ann'); // text 매개변수에 값을 전달 하지 않았다.
//undefined 대신 기본 값 'default value setting' 할당 되었다.
//자바스크립트에선 함수를 호출할 때마다 매개변수 기본값을 평가합니다. 
//물론 해당하는 매개변수가 없을 때만 기본값을 평가하죠.

//가끔은 함수 선언부에서 매개변수 기본값을 설정하는 것 대신 함수가 실행되는 도중에 기본값을 설정하는 게 논리에 맞는 경우가 생기기도 합니다.
//매개변수 기본값을 설정하는 방법 -2
function showMessage2(text) {
  //undefined는 false 다
  //OR연산자 같은 경우 하나만 ture 여도 true 값이 반환.
  text = text || '빈 문자열';
  alert(text);
}
showMessage2();
