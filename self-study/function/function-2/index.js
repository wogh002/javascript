let userName = 'John'; //전역변수
function showMessage() {
  let userName = "Bob"; // 같은 이름을 가진 지역 변수를 선언합니다.
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
// 함수는 내부 변수인 userName만 사용합니다,
showMessage();

alert( userName ); // John이 출력됩니다.