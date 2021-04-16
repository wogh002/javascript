//레이블
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`(${i},${j})의 값`, '');
        if (!input) break outer;
        //input 아래에 평범한 break 지시자를 사용하면 안쪽에 있는 반복문만 빠져나올 수 있습니다
        //이럴 때 레이블을 사용할 수 있습니다.\
        //레이블(label) 은 반복문 앞에 콜론과 함께 쓰이는 식별자입니다.

        //입력받은 값을 가지고 무언가를 하는 코드작성란.
    }
}
alert('완료');