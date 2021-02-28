let arg = prompt('값을 입력해주세요');
switch (arg) {
    case '0':
    case '1':
        alert('0이나 1을 입력하셨습니다.');
        break;
    case '2': alert('2를 입력하셨습니다.');
        break;
    case 3: alert('이코드는 절때 실행되지 않습니다!');
        break;
    default: alert('알 수 없는 값을 입력하셨습니다.');
}
