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
    console.log(target);
    const userName = friends[target].split('@')[0];//flynn
    const email = 'korea.com'
    console.log(userName, email);
    friends[target] = `${userName}@${email}`;
    target = check();
}

console.log(target);
console.log(friends);

