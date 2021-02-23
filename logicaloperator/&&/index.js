//and 연산자 && 하나라도 false 일 경우 false 반환.
//전통적인 프로그래밍에서 AND 연산자는 두 피연산자가 모두가 참일 때 true를 반환합니다. 그 외의 경우는 false를 반환하죠.
alert(true && true); //true
alert(false && true); // false

let hour = 12;
let minute = 30;
if (hour === 12 && minute === 30) alert('현재 시각은 12시 30분 입니다');
//각 피연산자는 불린형으로 변환됩니다. 변환 후 값이 false이면 평가를 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.

//// 첫번째 피연산자가 true 두번째도 true 일 경우, AND는 두 번째 피연산자를 반환합니다.
alert(1 && 5);

//첫번째 피연산자가 false 면 AND는 첫번째 피연산자를 반환하고 , 두번째 피연산자는 무시한다.
alert(null && 5); // null
alert(0 && 'ddd') //0

alert(1 && 2 && null && 3); // null

//아래 예시에선 AND연산자의 피연산자가 모두 true 이기 때문에 마지막 피연산자 반환.
alert(1 && 2 && 3) //3

//&&의 우선순위가 ||보다 높습니다.

//어떤 개발자들은 AND 연산자 &&를 if문을 ‘짧게’ 줄이는 용도로 사용하곤 합니다.
//but if를 ||나 &&로 대체하지 마세요.
let x = 1;
(x > 0) && alert('0보다 큽니다!');

