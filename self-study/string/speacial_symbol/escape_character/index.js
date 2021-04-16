//모든 특수 문자는 '이스케이프 문자(escape character)'라고도 불리는
// 역슬래시 (backslash character) \로 시작합니다.
//특수문자 아까 했었던 \n 같은 new line
alert('I\'m the Walrus!');
//문자열 내의 따옴표엔 \를 꼭 붙여줘야 합니다.
alert('i\'m a big fan of bts who is so famous');
alert(`I'm the Walrus!`);
//그렇다면 문자열 안에 역슬래시 \를 보여줘야 하는 경우엔 어떻게 해야 할까요?
// \\역슬래쉬 두개를 쓰면된다.
alert('역슬래시 \\');
//length 프로퍼티엔 문자열의 길이가 저장된다.
alert('ab\n'.length); //3
// \n 특수문자로 취급하기 때문에 문자열의 길이가 저장된다.
//length는 함수가 아니고, 숫자가 저장되는 프로퍼티라는 점에 주의하시기 바랍니다. 뒤에 괄호를 붙일 필요가 없습니다.

