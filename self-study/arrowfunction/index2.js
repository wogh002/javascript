//인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있습니다. 괄호를 생략하면 코드 길이를 더 줄일 수 있습니다.
let double = n => n * 2;
//let double = function(n){ return n*2} 동일
alert(double(2));

//인수가 하나도 없을 경우 괄호를 비워놓으면 안된다
let sayHi = () => alert('안녕하세요!');
//let sayHi = function(){return alert('안녕하세요!')} 동일
sayHi();

