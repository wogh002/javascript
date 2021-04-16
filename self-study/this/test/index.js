'use strict';
let user = {
    name: 'john',
    age: 30,
    // sayHi : function(){

    // }
    sayHi() {
        //// 'this'는 '현재 객체'를 나타냅니다.
        alert(this.name + 'hhihihii');
    }
};



const user2 = { name: 'john' };
const admin = { name: 'admin' };
function sayHi() {
    console.log(this.name);
}
user2.f = sayHi;
admin.f = sayHi;
user2.f();
admin.f();

const user3 = {
    firstName: '보라',
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
}
user3.sayHi();