let a = 2 + 2;
switch (a) {
    case 3:
        alert('비교하려는 값보다 작습니다.');
        break;
    case 4: alert('비교하려는 값과 일치합니다.');
        break;
    case 5: alert('비교하려는 값보다 큽니다.');
        break;
    default: alert('어떤 값인지 파악이 도지ㅣ 않스빈다.,');
}

//switch/case문의 인수엔 어떤 표현식이든 올 수 있습니다.
let a = '1';
let b = 0;
switch (+a) {
    case b + 1: alert('표현식 +a는 1, 표현식 b+1은 1이므로 이 코드가 실행됩니다.');
        break;
    default: alert('이 코드는 실행되지 않습니다.');
}