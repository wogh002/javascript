'use strict';
let map1 = new Map();
map1.set('1', 'str1');
map1.set(1, 'num1');
map1.set(true, 'boo1');
console.log(map1.get('1'));
console.log(map1.get(true));

let john = { name: 'johnnn' };
let visitCountMap = new Map();
visitCountMap.set(john, '456456');
console.log(visitCountMap.get(john));

let john2 = { name: 'john' };
let visitCountObj = {};
visitCountObj[john2] = 123;
console.log(visitCountObj['[object Object]']);
console.log(visitCountObj);

//map.set 을 호출할 때마다 맵 자신이 반환된다 체이닝 가능
map1.set('2', 'str2')
    .set('3', 'str3')
    .set('4', 'str4');

const recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}
console.clear();
for (let vegetable of recipeMap.entries()) {
    console.log(vegetable);
}
for (let vegetable of recipeMap.values()) {
    console.log(vegetable);
}
for (let vegetable of recipeMap) { //entries() 와 같다.
    console.log(vegetable);
}
recipeMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // cucumber: 500 ...
});

const obj1 = {
    name: 'john',
    age: 30
};
const map2 = new Map(Object.entries(obj1)); // 객체를 map 으로
const obj3 = Object.fromEntries(map2); //map 을 객체로

//객체는 키값으로 문자열만 들어 갈 수 있다.
const price = Object.fromEntries([
    ['name', 'jaeho'],
    ['age', 26]
]);
console.log(price);

const map4 = new Map();
map4.set('meat', 1);
map4.set('meat', 2);
map4.set('meat', 4);
const obj5 = Object.fromEntries(map4.entries());
console.log(obj5);

const obj6 = Object.fromEntries(map4);

//set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션






