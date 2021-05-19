'use strict';
const box = document.querySelector('.box');
const button = document.querySelector('button');

button.addEventListener('click', event => {
    box.style.transition = 'transform 1s ease-in';
    box.style.transform = 'translateX(800px)';
    box.style.transform = 'translateX(500px)';
});
