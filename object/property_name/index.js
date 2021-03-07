//Constraints of property name
//알다시피 변수 이름엔 for,let,return 같은 예약어를 사용하면 안된다.
//하지만 객체 프로퍼티엔 이런 제약이 없다.
//예약어를 키로 사용해도 괜찮다
let obj = {
    for: 1,
    let: 2,
    return: 3
};
alert(obj.for + obj.let + obj.return);
let obj2 = {
    0: 'test'
};
//숫자 0은 문자열 '0' 으로 변환되기 때문에 두 얼럿창은 같은 프로퍼티에 접근.
alert(obj2[0]);
alert(obj2['0']);
