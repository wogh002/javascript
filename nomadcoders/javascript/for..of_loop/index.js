'use strict';
const frineds = [
    'Nico',
    'Jaeho',
    'manjae',
    'sangwon',
    'lot',
    'lot',
    'lot',
    'lot',
    'lot',
    'lot',
    'lot'
];
const addHeart = (c, index) => console.log(index, c);
frineds.forEach(addHeart);

for (const friend of frineds) {
    if (friend === 'sangwon') {
        break;
    }
    else {
        console.log(friend);
    }
}

