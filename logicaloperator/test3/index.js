if (-1 || 0) alert('first'); //first
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//// 연산자 &&는 ||보다 우선순위가 높습니다.
// 따라서 -1 && 1 이 먼저 실행되어 아래와 같이 표현식이 순차적으로 바뀝니다.
// null || -1 && 1  ->  null || 1  ->  1
// 결과적으로 alert가 실행됩니다.