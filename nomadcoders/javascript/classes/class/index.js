'use strict';
//class 는 청사진이다.
class User2 {
    constructor(name) {
        //this {}
        this.userName = name;
        //return this
        //객체의 프로퍼티에 할당한 함수를 메소드라고한다.
        // this.abc = function () { };
    }
    //메소드 ===함수
    sayHello() {
        console.log(`hello i'm ${this.userName} `);
    }
}

const sexyUser = new User2('jaeho');
const uglyUser = new User2('nico');
//new 가 있다면 아~ 클래스를 만들고 있구나 생각하자.
//클래스를 사용하려면 인스턴스가 필요하다.


//sexyUser 은 User 의 인스턴스이다.
//인스턴스란 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
//setTimeout(sexyUser.sayHello, 4000);
// const baseObject = {
//     userName: 'Nico',
//     sayHello() {
//         console.log('Nico');
//     }
// }
sexyUser.sayHello();
console.log(uglyUser.userName);
//console.log(sexyUser === uglyUser);


