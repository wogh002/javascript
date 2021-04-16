'use strict';
//자료구조를 구성하는 요소도 자신이 속한 자료구조가 메모리에 남아있는 동안 대개 도달 가능한 값으로 취급되어 메모리에서 삭제되지 않습니다.
// 객체의 프로퍼티나 배열의 요소, 맵이나 셋을 구성하는 요소들이 이에 해당합니다.
let john = { name: 'john' };
const array = [john];
john = null;
//이때 배열이 메모리에 남아있는 한, 배열의 요소인 이 객체도 메모리에 남아있게 됩니다. 이 객체를 참조하는 것이 아무것도 없더라도 말이죠.
//console.log(JSON.stringify(array[0]));

let john2 = { name: 'john' };
const map = new Map();
map.set(john2, 'asdasd');
john2 = null;

for (let item of map.keys()) {
    console.log(JSON.stringify(item));
}
//위크맵을 사용하면 키로 쓰인 객체가 가비지 컬렉션의 대상이 됩니다.
//맵과 위크맵의 첫 번째 차이는 위크맵의 키가 반드시 객체여야 한다는 점입니다. 원시값은 위크맵의 키가 될 수 없습니다.
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, 'ok');
//weakMap.set('test','whoops'); Error: Invalid value used as weak map key

let john3 = { name: 'john' };
let weakMap2 = new WeakMap();
weakMap2.set(john3, '...');
console.log(weakMap2.get(john3));
john3 = null;
//john3을 나타내는 객체는 이제 메모리에서 지워진다.
//참조를 덮어쓰게 되면 이 객체는 위크맵과 메모리에서 자동으로 삭제됩니다.

// /위크맵은 부차적인 데이터를 저장할 곳이 필요할 때 그 진가를 발휘합니다.
//추가해 줄 데이터는 객체가 살아있는 동안에만 유효한 상황입니다. 
let weakMap3 = new WeakMap();
let john4 = {};
weakMap3.set(john4,'비밀문서')
// john이 사망하면, 비밀문서는 자동으로 파기됩니다.

let visitsCountMap = new Map(); // 맵에 사용자의 방문 횟수를 저장함
// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
// 📁 main.js
let john5 = { name: "John" };
countUser(john5); // John의 방문 횟수를 증가시킵니다.
// John의 방문 횟수를 셀 필요가 없어지면 아래와 같이 john을 null로 덮어씁니다.
john5 = null;