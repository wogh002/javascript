//아래 코드를 실행했을 때 얼럿 창에 마지막으로 뜨는 값은 무엇일까요?
let i = 3;
//후위연산자 : 증가전에 기존 값을 반환한다.
while (i) {
    alert(i--);
}
//let i = 3;

//alert(i--); // 3이 출력되고 i는 2로 줄어듭니다.

// alert(i--) // 2가 출력되고 i는 1로 줄어듭니다.

// alert(i--) // 1이 출력되고 i는 0으로 줄어듭니다.

// i가 0이 되었기 때문에 while(i)는 종료됩니다.
