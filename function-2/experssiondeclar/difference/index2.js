//그럼 if문 밖에서 welcome 함수를 호출할 방법은 없는 걸까요?
//함수 표현식은 
//실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다.
// 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.
let age = prompt('나이를 알려주세요');
let welcome;
if (age < 18) {
    welcome = function () {
        alert('안녕!');
    };
}
else {
    welcome = function () {
        alert('안녕하세요');
    }
};
welcome();

// let age = prompt('나이를 알려주세요')
// let welcome = (age < 18) ?
//     function () { alert('안녕!') } :
//     function () { alert('안녕하세요!') };
// welcome();