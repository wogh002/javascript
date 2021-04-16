// let age = prompt('나이를 알려주세요', 18);
// let welcome = (age < 18) ?
//     () => alert('안녕') :
//     () => alert('안녕하세요');

// welcome();

//본문이 여러 줄인 화살표 함수 일 경우  return지시자를 명시적으로 작성하자  and {} 중괄호를 작성하자
let sum = (a, b) => { //중괄호는 본문 여러 줄로 구성되어 있음을 알려준다.
    let result = a + b;
    return result;
}
alert(sum(2, 6));
