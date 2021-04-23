'use strict';
// getter setter
class User {
    //★ 일반 프로퍼티에서 값에 접근하는 것처럼 ★ 평범하게 getter setter 을 사용한다
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //setter 호출
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user = new User('jaeho', 'park', -1);
console.log(user._age);
console.log(user.age); //getter 호출




let user3 = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        this.name = value;
        console.log(this.name);
    }
};
// 주어진 값을 사용해 set fullName(value) 실행된다.
user3.fullName = "Alice Cooper";
