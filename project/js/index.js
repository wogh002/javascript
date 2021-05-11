'use strict';
const gameField = document.querySelector('.game__field');
const gameBtn = document.querySelector('.game__header__button');
const gameTimer = document.querySelector('.game__header__timer');
const gameScore = document.querySelector('.game__header__score');
const fieldRect = gameField.getBoundingClientRect();
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const CARROT_SIZE = 80;
const x1 = 0;
const y1 = 0;
const x2 = fieldRect.width - CARROT_SIZE;
const y2 = fieldRect.height - CARROT_SIZE;
let started = false;
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
    gameField.innerHTML = ``;
    gameScore.textContent = `${CARROT_COUNT}`;
    addItem('carrot', CARROT_COUNT, './carrot/image/carrot.png');
    addItem('bug', BUG_COUNT, './carrot/image/bug.png');
}
function showStopButton() {
    const icon = document.querySelector('.fa-play');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}
function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}
function startGameTimer() {
    
}
function startGame() {
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}
function stopGame() {

}
gameBtn.addEventListener('click', event => {
    if (started) {
        stopGame();
    }
    else {
        startGame();
    }
    started = !started;
})