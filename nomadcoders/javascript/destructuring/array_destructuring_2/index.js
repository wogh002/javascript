'use strict';
//variable swapping
// root (경로)= target Object,Array
let mon = 'Sat';
let sat = 'Mon';
//[sat,mon] = ['sat','mon'];
[sat, mon] = [mon, sat];
console.log(sat);

const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
//뒤에꺼 두개만 가져오고 싶을 경우 , 로 채우자
const [, , , thu, fri] = days;
console.log(fri);
