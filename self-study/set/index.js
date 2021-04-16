'use strict';
//셋은 중복을 허용하지 않는 컬렉션이다.
//셋에 키가 없는 값이 저장됩니다.
//중복되는 데이터는 제거가 되면서 저장이된다.
//셋에는 key 가 없는 값이 저장된다.
//방문자 방명록을 만든다고 가정해 봅시다. 
//한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황입니다. 즉, 한 방문자는 '단 한 번만 기록’되어야 합니다.
let set = new Set();
let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'mary' };
console.log(john);
// 어떤 고객(john)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(john);
set.add(john);
set.add(john);
console.log(set.size);

let set2 = new Set([
    ['orange'],
    ['apples'],
    ['bananas']
]);
for(let value of set2){
    console.log(value);
}
set2.forEach(value => console.log(value));