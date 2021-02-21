//할당 연산자
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
//a=3;
//c=0
alert(`a=${a},c=${c}`);
//할당 연산자 체이닝
//이렇게 할당 연산자를 여러 개 연결한 경우, 평가는 우측부터 진행됩니다. 
let d, e, f;
d = e = f = 2 + 2;
alert(d); // 4
alert(e); // 4
alert(f); // 4
//그런데 되도록이면 연산자를 체이닝 하는것 보다 가독성을 위해 아래와 같이 줄을 나눠 코드를 작성하길 권유드립니다.
f = 2 + 2;
e = f;
d = f;

//복합 할당 연산자
let n = 2;
n += 5; //7
n *= 2; //14

//증가 감소 연산자
let counter = 2;
counter++; // => counter =  counter + 1;
alert(counter); //3
let minusCounter = 3;
alert(--minusCounter);

//전위형
let counter2 = 1;
let z = ++counter2; // (*)
alert(z); // 2
//후위형 
let counter3 = 1;
let v = counter3++;
//후위형 counter++는 counter를 증가시키긴 하지만, 증가 전의 기존 값을 반환합니다. 따라서 alert는 1을 표시합니다.
//후위형은 증가 전의 값을 반환합니다.
alert(v); // 1
let counter4 = 1;
console.log('aaaaaa' + 2 * counter4++); //2
console.log('bbbb' + counter4);//2

//'코드 한 줄엔, 특정 동작 하나’에 관련된 내용만 작성하는 게 좋습니다. 아래와 같이 말이죠.
let counter4 = 1;
alert(2 * counter4);
counter4++;



