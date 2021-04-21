'use strict';
//spread ->...  배열,object 의 요소를 보여줌 .
//변수를 가져가서 풀어헤친다.
const friends = [1, 2, 3, 4];
const family = ['a', 'b', 'c'];
//만약 friends , family 둘 다 합치고 싶다면?
console.log([...friends, ...family]);

const sexy = {
    name: 'nico',
    age: 24
};
const hello = {
    sexy: true,
    hello: 'hello'
}
console.log({ ...sexy, ...hello });
//js 는 익명객체,익명 배열 다됌.

