// let i = 0;
// for (; i < 3;) {
//     alert(i++);
// }
//반복문 빠져나오기
let sum = 0;
while (true) {
    let value = +prompt('숫자를입력하세요');
    if (!value) break; //false 라면 break 반복문 탈출.
    sum += value;
}
alert(`합계 : ${sum}`);

//현재 실행 중인 반복에서 더는 무언가를 하지 않고 다음 반복으로 넘어가고 싶다면 continue 지시자를 사용할 수 있습니다.
//홀수를 구하는 문제
for (let z = 0; z < 10; z++) { //continue 를 만나게 되면 반복문 증감식으로 이동
    //2로 0을 나누었을때 나머지가 0이냐? true 증감식으로 이동.
    if (z % 2 == 0) continue; //2로 1을 나누었을때 나머지가 0이냐? flase -->출력
    //2를 2로 나누었을대 나머지가 0이냐? true -->증감식으로 이동
    alert(z);
}
//홀수를 구하는 문제 리팩토링
for (let z = 0; z < 10; z++) {
    if (z % 2) { //%나머지 0일경우 false 1일 경우 true
        alert(z);
    }
}
