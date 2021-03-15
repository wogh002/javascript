//1.this 는 메소드로써 호출해서 사용해야한다.
function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    };
}
let user = makeUser();
console.log(user.ref().name);

