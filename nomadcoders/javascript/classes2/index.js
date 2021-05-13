'use strict';
//class 는 청사진이다.
class User {
    constructor() {
        this.name = 'Nico';
    }
    sayHello() {
        console.log('hello, I\'m Nico');
    }
}

//설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
const sexyUser = new User();
console.log(sexyUser.name);
setTimeout(sexyUser.sayHello, 4000);

