'use strict';
//string concatenation. +
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 =${1 + 2}`);
let counter = 1;
const preIncrement = ++counter;
console.log(preIncrement);

//|| (or) 조건들 중에 하나라도 true 면 true 바로 출력.
const value1 = 4 < 2;
const value2 = false;
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('★');
    }
    return true;
}
//&&(and) 연산자 조건들 중에서 하나라도 false 면 바로 false 출력
console.log(`and:${value1 && value2 && check()}`);
//nullableObject && nullableObject.something;
// if(nullableObject!=null) {
//     nullableObject.something;
//}

//!(not 연산자)
console.log(!value2);

const ellie1 = { name: 'ellie1' };
const ellie2 = { name: 'ellie2' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); //fa
console.log(ellie1 === ellie2);//fa
console.log(ellie3 === ellie1);

//true
//false
//true
//false
console.log(null == undefined)//true
console.log(null === undefined)//false

const name = 'ellie';
if (name === 'ellie') {
    console.log('welcome ellie');
}
else {
    console.log('who are you?')
}

const browser = 'zz';
switch (browser) {
    case 'IE': console.log('go away!');
        break;
    case 'Chrom':
    case 'Firefox':
        console.log('love you!');
        break;
    default: console.log('same all');
        break;
}
let i = 3;
while (i > 0) {
    console.log(`while:${i}`);
    i--;
}


