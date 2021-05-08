//함수란?
//프로그래밍을 짤 때 무언가 반복적으로 되는 로직이 있다면 함수로 만들어야함.
//함수로 만들면 재사용이 가능하기 때문이다.
const num = 3;
const num2 = 4;
const add = (num, num2) => num + num2;

function surprise(operator) {
    const result = operator(1, 2);
    console.log(result);
}

surprise(add); //함수의 레퍼런스(주소 값)전달.
