//부분 문자열 추출하기.
//끝부분은 0부터가 아닌 -1부터 카운터 시작.
let str = "stringify";
// 끝에서 4번째부터 시작해 끝에서 1번째 위치까지
alert( str.slice(-4, -1) ); // gif

// str.substring(start [, end])
// start와 end 사이에 있는 문자열을 반환합니다.
// substring은 slice와 아주 유사하지만 start가 end보다 커도 괜찮다는 데 차이가 있습니다.

let str2 = "stringify";
// 동일한 부분 문자열을 반환합니다.
alert( str2.substring(2, 6) ); // "ring"
alert( str2.substring(6, 2) ); // "ring"

// str.substr(start [, length])
// start에서부터 시작해 length 개의 글자를 반환합니다.
// substr은  길이를 기준으로 문자열을 추출한다는 점에서 substring과 slice와 차이가 있습니다.
let str3 ='stringify';
alert(str3.substr(2,4));
let str4 = "stringify";
alert( str4.substr(-4, 2) ); // gi, 끝에서 네 번째 위치부터 글자 두 개