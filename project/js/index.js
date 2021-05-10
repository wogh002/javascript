'use strict';
const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();
const CARROT_SIZE = 80;
const x1 = 0;
const y1 = 0;
const x2 = fieldRect.width - CARROT_SIZE;
const y2 = fieldRect.height - CARROT_SIZE;

function randomNumber(min, max) { //min 이상 max미만
    return Math.random() * (max - min) + min;
}
function addItem(className, count, imgPath) {
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const randomWidth = randomNumber(x1, x2);
        const randomHeight = randomNumber(y1, y2);
        item.style.transform = `translate(${randomWidth}px,${randomHeight}px)`;
        gameField.appendChild(item);
    }
}

function initGame() { 
    addItem('carrot', '5', './carrot/image/carrot.png');
    addItem('bug', '5', './carrot/image/bug.png');
}
initGame();
