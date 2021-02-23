//alert(null || 2 || undefined); //2
//alert(alert(1) || 2 || alert(3)); //1,2
//alert 자체가 undefined 반환.
//OR연산자 인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환하죠.
//alert(alert(1) && alert(2));
let age = +prompt('나이 입력하세요');
if (age >= 14 && age <= 90) alert('포함됩니다.');

