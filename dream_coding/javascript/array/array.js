'use strict';
//배열Array
//1.배열 선언
const arr1 = new Array();
const arr2 = [1, 2];
//🍎🍌🍓🍏🥥🍉🍐🍋🍑🍒🥝
//2.Index position.
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

//3.Looping over an array.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
//c. forEach
fruits.forEach((fruit) => console.log(fruit));
//4 addition,deletion,copy
//push => 배열의 제일 뒤에 아이템을 넣고 싶다면? (add an item to the end)
fruits.push('🍓', '🍑');
console.log(fruits);
//pop => 배열에서 제일 뒤에서 아이템을 지우고싶다면?(remove an item from the end)
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
//unshift : add an item to the benigging. 추가합니다 아이템을 앞쪽에요.
fruits.unshift('🍓','🍋');
console.log(fruits);
//shift : remove an item to the benigging. 제거합니다 아이템을 앞쪽에요.
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
//note !! shift, unshift are slower than pop,push 
//splice : remove an item  by index position.
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(0,2,'🍏','🍉');
console.log(fruits);
const fruits2 = ['🍐','🥥'];
//combine
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
//5,Searching
//find the index.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.includes('🍉'));






