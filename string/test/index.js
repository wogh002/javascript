//str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.
//자바스크립트에서 문자열은 수정할 수 없기 때문에 단순히 첫 글자만 바꾸는 것은 불가능합니다.
function ucFirst(str) {
    //str 에 값이 있다고 가정하자 그러면 문자열에 값이 있으면 true가 된다.
    //true 지만 부정연산자 ! 를 사용하였으니 false가 될 것이다.
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('john'));