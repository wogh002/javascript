// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('보호자의 동의를 받으셨나요?');
//     }
// }
function checkAge(age) { //Q1 삼항연산자 === ? 연산자.
    return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}
alert(checkAge(+prompt('당신의 나이를 입력해주세요')));

function checkAge2(age) { //Q2 ||연산자
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}
alert(checkAge2(+prompt('당신의 나이를 입력해주세요')));
//if else 는 OR || , 삼항연산자로 코드를 작성 할 수 있다.
