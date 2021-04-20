'use strict';
const friends = Array.of('nico', 'jaeho', 'taeho');
console.log(friends);




const buttons = document.getElementsByClassName('btn');
console.log(buttons);

Array.from(buttons).forEach(item => {
    item.addEventListener('click', () => console.log(`i've been clecked`))
});





