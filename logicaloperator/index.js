//(OR 연산자 ||)  인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환하죠.
alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false
//피연산자가 불린형이 아니면, 평가를 위해 불린형으로 변환됩니다.
if (1 || 0) alert('truthy!');
// /가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자를 평가합니다.
//각 피연산자를 불린형으로 변환합니다. 변환 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환합니다.
let hour = 12;
if (hour < 10 || hour > 18 || isWeekend) alert('영업시간이 아닙니다.'); //주말이기 때문에

