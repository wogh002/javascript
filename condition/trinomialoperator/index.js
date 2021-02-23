//삼항연산자
let age = +prompt('나이를 입력해주세요', 18);
let message = (age <= 3) ? '아기야 안녕' :
    (age <= 18) ? '환영해' :
        (age < 100) ? '환영합니다' : '나이가 많으십니다 반갑습니다';
alert(message);

if (age < 3) {
    alert('아기야안녕')
}
else if (age < 18) {
    alert('환영해')
}
else if (age < 100) {
    alert('환영합니다')
}
else alert('나이가 많으십니다 반갑습니다.');
