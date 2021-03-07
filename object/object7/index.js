//객체 정렬 방식
//정수 프로퍼티(integer property)는 자동으로 오름차순 정렬되고, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬됩니다.
let codes = {
    49: '독일',
    41: '스위스',
    44: '영국',
    1: '미국'
};
for (let code in codes) {
    alert(codes[code]);
}


let user = {
    name: 'John',
    surname: 'Smith'
};
user.age = 25;
//정수 프로퍼티가 아닌 이상 작성된 순서대로 프로퍼티 나열 된다.
for (let prop in user) {
    alert(user[prop]);
}
