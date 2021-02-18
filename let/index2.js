// 변수 두 개를 선언하고, 한 변수의 데이터를 다른 변수에 복사 할 수 있다.
let hello = 'Hello world!';
let message;
message = hello;
console.log('변수명 hello --> ' + hello);
console.log('변수명 message -->' + message);

// 값이 변경되면, 이전 데이터는 변수에서 제거됩니다.
let testMessage = '변경이 되는가';
testMessage = '상수 변수가 아니기 때문에 변경이 가능합니다.';
console.log(testMessage);
// 변수 명 규칙
//1.변수명에는 오직 문자와 숫자, 그리고 기호 $ 와 _ 만 들어갈 수 있다.
//2.첫 글자는 숫자가 될 수 없습니다.
//3. 여러 단어를 조합하여 변수명을 만들 때 camelCase(낙타표기법)
let userName;
let test123;
let $ = 1;
let _ = 2;
alert($ + _);


