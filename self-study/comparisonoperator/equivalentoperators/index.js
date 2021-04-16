//동등연산자 == 
let a = 0;
alert(Boolean(a)); // false
let b = "0"; //빈문자열이 아니기 때문에 true
alert(Boolean(b)); // true
alert(a == b); // true!

//(동등 비교 연산자 ==는) 형변환 후 피연산자들을 비교한다.
console.log(0 == false) // true
console.log('' == false) // true


