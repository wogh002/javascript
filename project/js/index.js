'use strict';
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const CARROT_SIZE = 80;
const GAME_DURATION_SEC = 5;
const gameHeader = document.querySelector('.game__header');
const gameField = document.querySelector('.game__field');
const fieldRect = gameField.getBoundingClientRect();
const gameBtn = document.querySelector('.game__header__button');
const gameTimer = document.querySelector('.game__header__timer');
const gameScore = document.querySelector('.game__header__score');
const gamePopUp = document.querySelector('.game__pop-up');
const gamePopUpMessage = document.querySelector('.game__pop-up__message');
const gamePopUpRefreshBtn = document.querySelector('.game__pop-up__refresh');
let timer = undefined;
const x1 = 0;
const y1 = 0;
const x2 = fieldRect.width - CARROT_SIZE;
const y2 = fieldRect.height - CARROT_SIZE;
let started = false;
let score = 0;

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
    const icon = document.querySelector('.fas');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}
function updateTimerText(time) {
    const minutes = Math.floor(time / 60); //65초를 넣었다고 가정. => 1
    const seconds = time % 60; //65초를 넣었다고 가정. => 5
    gameTimer.textContent = `${minutes}:${seconds}`;
}
function startGameTimer() {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec); //5
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}
function hideGameBtn() {
    gameBtn.style.visibility = 'hidden';
}
function showGameBtn() {
    gameBtn.style.visibility = 'visible';
}
function showPopUpWithText(text) {
    score = 0;
    gamePopUpMessage.textContent = `${text}`;
    gamePopUp.classList.remove('--hide');
}

function hidePopUp() {
    gamePopUp.classList.add('--hide');
}
gameBtn.addEventListener('click', event => {
    if (started) {
        stopGame();
    }
    else {
        startGame();
    }
})
function startGame() {
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}
function stopGame() {
    started = false;
    stopGameTimer();
    hideGameBtn();
    showPopUpWithText(`REPLAY? 💕`);
}
function finishGame(win) {
    started = false;
    hideGameBtn();
    showPopUpWithText(win ? `YOU WON ⭕` : `YOU LOST 💥`);
}
function updateScoreBoard() {
    gameScore.textContent = CARROT_COUNT - score;
}

gameField.addEventListener('click', event => {
    if (!started) { //게임시작하지 않았다면.
        return;
    }
    const target = event.target;
    if (target.matches('.carrot')) {
        //당근
        target.remove();
        score++;
        updateScoreBoard();
        if (score === CARROT_COUNT) {
            stopGameTimer();
            finishGame(true);
        }
    }
    else if (target.matches('.bug')) {
        stopGameTimer();
        finishGame(false);
    }
})
gamePopUpRefreshBtn.addEventListener('click', () => {
    hidePopUp();
    startGame();
})