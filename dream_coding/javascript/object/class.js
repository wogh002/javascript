'use strict';
//class (청사진)
//붕어빵을 만들 수 있는 틀.
//피자를 넣으면 피자붕어빵
//팥넣으면 팥붕어빵
//크림넣으면 크림붕어빵
//붕어빵 object.
//class : template.
//class 를 이용해서 실제로 데이터를 넣어서 만드는 것이 object.
//문법만 class 가 추가 된 것.
class Person {
    //constructor 나중에 object 를 만들 경우 사용한다.
    constructor(name, age) {
        //this ={}; 생성자함수는 빈객체가 암시적으로 만들어진다.
        //this 생성된 object .
        //fields
        this.name = name;
        this.age = age;
    }
    speak = function () {
        console.log(`${this.name}:hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.age);
ellie.speak();




