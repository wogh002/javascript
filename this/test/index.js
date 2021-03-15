'use strict';
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};
let user = makeUser();
alert(user.ref.name); // Error: Cannot read property 'name' of undefined
//위 코드에서 makeUser() 내 this는 undefined가 됩니다. 메서드로써 호출된 게 아니라 함수로써 호출되었기 때문입니다.
//메소드로써 this 가 호출이 되어야 현재객체를 가리킨다. ★
//this 값은 전체 함수가 됩니다
//코드 블록과 객체 리터럴은 여기에 영향을 주지 않습니다.
console.log(makeUser().ref); //undefined

