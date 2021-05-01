'use strict';
let hours = 12;
let minutes = 5;
let second = 2;
// console.log(`${hours} h: ${minutes < 10 ? `0${minutes}` : minutes} m:${second}s`);

//목표 문자열 길이. 2자리 미만일 경우 '0'으로 반환.
minutes = String(minutes).padStart(2, '0');

console.log(`${hours}h:${minutes}:m${second}s`);
console.log("5".padEnd(5, 'x'));//5xxxx
console.log('1'.padStart(2, '0').padEnd(3, 's')); //01s;



