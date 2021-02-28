//매개변수를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다.
//매개변수는 인수 라고 불리기도 한다.
// function showMessage(from, text) {
//     alert(from + ':' + text)
// };
// //함수에 전달된 매개변수는 지역변수 from과 text에 복사됩니다
// showMessage('jaeho', 'i assume you gonna absolute success to front-end dev!');
// showMessage('taeho', `why you don't like to go jeju 아일랜드!!`);

function showMessage(from, text) {//함수는 언제나 복사된 값을 사용한다.  //JAEHO
    from = '*' + from + '*'; ////함수는 언제나 복사된 값을 사용한다.  //전역변수를 수정하는 것 이 아니다.
    alert(from + ':' + text); // *JAEHO* : HELLOOO;
}
const from = 'JAEHO';
showMessage(from, 'HELLOOO');
alert(from); //JAEHO;