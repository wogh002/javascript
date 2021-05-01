//자바스크립트의 객체는 [[Prototype]]이라는 숨김 프로퍼티를 자동으로 갖는다.
//객체는 내부적으로 prototype 이라고하는 프로퍼티가 생기고 
// 그 Prototype은 Person의 프로토타입 객체를 가리킨다.
function Person(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
}
const person = new Person();
person.__proto__.a = 1;
console.log(person);



