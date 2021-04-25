'use strict';
//primitive type 에는 변수하나당 값 1개 
//만약에 조금 더 인자가 많아지게되면 추가해야 되는 단점이있다.
function print({ name, age, hasJob }) {
    console.log(name);
    console.log(age);
    console.log(hasJob);
}


const ellie = {
    name: 'ellie',
    age: 4
}
print(ellie);

//계산된 프로퍼티
ellie['hasJob'] = true;


//언제 대괄호 접근자가 사용되는가?
//동적으로 키의 value 값을 받아와야 할 경우
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'hasJob');

const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const makePerson = (name, age) => ({ name, age });
const person4 = makePerson('jaeho', 26);
console.log(person4);

//for ..in vs for..of
//for(key in obj)
for (const key in ellie) {
    console.log(key);
}
const array = [1, 2, 3, 4, 5];
for (const item of array) {
    console.log(item);
}

//클로닝
const user = { name: 'ellie', age: 20 };
const user2 = user;

//old way
const user3 = {};
for (const key in user) {
    //user3['name'] = user['name'];
    //user3['age'] = 'ellie';
    //user3['age']= user['age'];
    //user3['age'] = 20;
    user3[key] = user[key];
}
//new way
//Object.assign
const target = { age: 26 };
const source = { age: 27, name: 'taeho' };
const retrunTarget = Object.assign(target, source);
//source 복사하고자 하는 object
console.log(retrunTarget);
