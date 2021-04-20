'use strict';
const friends = [
    'nico@gmail.com',
    'lynn@naver.com',
    'dal@yahoo.com',
    'mark@hotmail.com',
    'flynn@gorea.com'
];

const check = () => friends.findIndex(friend => friend.includes('@gorea.com'));
let target = check();
if (target !== -1) {// target 이 -1 아닐 경우 true
    friends.fill('*'.repeat(5), 1,3);

}

console.log(target);
console.log(friends);

console.log(friends.includes('mark@hotmail.com'));
