//일치 연산자(strict equality operator) ===를 사용하면 형 변환 없이 값을 비교할 수 있습니다.
alert(0 === false); //false.

//산술 연산자나 기타 비교 연산자 < > <= >=를 사용하여 null과 undefined를 비교
//null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.
alert(null>0); //false
//그런데 (동등 연산자 ==는 피연산자가 undefined나 null일 때) 형 변환을 하지 않습니다. 
alert(null==0);//false
alert(null>=0); //true
