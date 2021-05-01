'use strict';
const person = {
    name: 'nico',
    age: 12
};
console.log(Object.values(person));
console.log(Object.entries(person).forEach(item => console.log(item[0], item[1])));


//이터레이블을 객체로
console.log(Object.fromEntries([
    ['name', 'jaeho'], ['age', 26], ['f', 'fuck'], ['h', true]
]));
