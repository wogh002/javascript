'use strict';
// Array Destructuring
const day = () => ['Mon', 'Tue', 'Wed'];
//day 의 요소 앞에 3개만 꺼내보자.
//const mon = day[0];
//const tue = day[1];
//const wed = day[2];
const [a, b, c, d = 'default value'] = day();
//[a, b, c, d = 'default value'] = ['Mon', 'Tue', 'Wed']
console.log(a, b, c, d);



