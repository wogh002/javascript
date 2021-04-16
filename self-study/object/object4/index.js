//단축 프로퍼티
//함수에서 객체를 리턴
function makeUser(name, age) {
    return {
        name,
        age
    };
}
let user = makeUser('john', 30);
alert(user.age);

//한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능하다.
let user2 = {
    name,
    age: 30
};
