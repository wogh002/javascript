//if (…) 문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환합니다.
let year = +prompt('ECMAScript-2015 명세는 몇년도에 출판되었을까요?', '');
if (year === 2015) { // if 문은 (true) 일 경우 false 일 경우 작동
    alert('정답입니다')
    alert('아주똑똑하시네요')
}
else alert('땡')
//숫자 0, 빈 문자열(""), null, undefined, NaN은 불린형으로 변환 시 모두 false가 됩니다. \

//유사하지만 약간씩 차이가 있는 조건 여러 개를 처리해야 할 때가 있습니다. 이때 else if를 사용할 수 있습니다.
let year2 = +prompt('2222222ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');
if (year2 < 2015) {
    alert('숫자를 좀 더 올려보세요.')
}
else if (year > 2015) {
    alert('숫자를 좀 더 내려보세요')
}
else {
    alert('정답입니다@!');
}

let age = +prompt('몇살입니까?', '')
let accessAllowed = age > 18 ? true : false;
if (accessAllowed) alert('반갑습니다');
else alert('돌아가세요');


