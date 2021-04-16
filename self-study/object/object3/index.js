//여러 단어를 조합해 프로퍼티 이름을 만드는 경우엔 프로퍼티 이름을 따옴표로 "" 묶어야 한다.
let user = {
    name: 'John',
    age: 30,
    'like birds': true, //마지막 프로퍼티 끝은 쉼표로 끝이 날 수 있다. 프로퍼티를 추가, 삭제 ,이동 하는게 쉬워진다.
};
console.log(user);

const user2 = { //상수객체도 수정, 추가 , 삭제 될 수 있다.
    name: 'John2'
};
user2.name = 'Pete';
alert(user2.name);
user2.isName = true;
console.log(user2);
//const는 user=...를 전체적으로 설정하려고 할 때만 오류가 발생합니다.

