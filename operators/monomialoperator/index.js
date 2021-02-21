//단항 마이너스 연산자 - => 부호를 뒤집는다.
//피연산자의 부호를 뒤집는 단항 마이너스 연산자 -는 단항 연산자의 대표적인 예입니다.
let p = 1;
p = -p;
alert(p); //-1;
//단항 덧셈 연산자
//숫자에 단항 덧셈 연산자를 붙이면 이 연산자는 아무런 작동하지 않는다.
let x = 1;
alert(+x); //1
let y = -2;
alert(+y); //-2
//// 숫자형이 아닌 피연산자에 단항 덧셈 연산자를 사용할 경우 숫자형으로 변화합니다.
console.log(+true); //1
console.log(+false);//0
console.log(+""); //0
let apples = "2";
let oranges = "3";
alert(`apples + oranges= ${apples + oranges}`); // 23, 이항 덧셈 연산자는 문자열을 연결합니다.
//원하는 대로 값을 더해주려면, 단항 덧셈 연산자를 사용해 피연산자를 숫자형으로 변화시키면 됩니다.
console.log(+apples + + oranges);

//그런데 왜 이항 덧셈 연산자가 적용되기 전에 단항 덧셈 연산자가 먼저 적용될까요? 그 이유는 이제 학습하게 될 연산자 우선순위 때문입니다.
//자바스크립트에서 정의한 연산자 우선순위가 마음에 들지 않는다면, 괄호를 사용하면 됩니다. 
//괄호는 모든 연산자보다 우선순위가 높기 때문에 자바스크립트에서 정의한 연산자 우선순위를 무력화시킵니다. 
//순위가 같으면 왼쪽부터 시작해서 오른쪽으로 연산이 수행됩니다
