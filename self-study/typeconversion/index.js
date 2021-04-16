//함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다. 이런 과정을 "형 변환(type conversion)"이라고 합니다.
let value = true;
alert(typeof value); //boolean
let typeConversion = String(value);
alert(typeof typeConversion); //String
alert("6" / "2"); //문자열이 숫자형으로 자동변환된 후 연산이 수행됩니다.
let str = '123';
alert(typeof str); //'string'
let num = Number(str);
alert(typeof num);
let age ='안녕123살';
let newAge = Number(age);
console.log(Boolean(1));//true
console.log(Boolean('abcdefgh')) //true
console.log(Boolean(0)) //false
console.log(Boolean('')); // false
