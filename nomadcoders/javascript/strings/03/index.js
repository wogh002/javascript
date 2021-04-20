'use strict';
const wrapper = document.querySelector('.wrapper');
const friends = ['me', 'lynn', 'jaeho', 'taeho'];

const list = `<h1>i love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}★</li>`).join('')}
    </ul>
`;
//0: "<li>me</li>",
//1: "<li>lynn</li>",
//2: "<li>jaeho</li>",
//3: "<li>taeho</li>",
wrapper.innerHTML = list;
console.log(friends.map(friend => `<li>${friend}</li>`));
