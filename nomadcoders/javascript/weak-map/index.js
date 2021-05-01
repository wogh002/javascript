'use strict';
const map = new Map();
map.set('one', 1);
map.set('two', 1);
for (const values of map.values()) {
    console.log(values);
}
console.log(map);

