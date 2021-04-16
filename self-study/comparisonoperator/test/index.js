console.log(5>4); //true

console.log('apple' > 'pineapple') // false
//문자열끼리의 비교는 (유니코드) 등록된 순서로 비교가 이루어진다.
console.log('2'>'12') //true //두 피연산자는 문자열이므로, 사전순으로 비교가 이뤄집니다. 왼쪽 피연산자의 첫 번째 글자 "2"는 오른쪽 피연산자의 첫 번째 글자 "1"보다 큽니다.

console.log(undefined==null); //true //undefined와 null 은  null이나 undefined와 같다\
//null과 undefined는 동등 비교(==) 시 서로 같지만 다른 값과는 같지 않습니다.
console.log(undefined===null); // false

console.log(null == '\n0\n'); //false
//일치 연산자 ===를 제외한 비교 연산자의 피연산자에 undefined나 null이 오지 않도록 특별히 주의하시기 바랍니다.

alert('\n공백인가연?\n');
//null은 오직 undefined와 같습니다.