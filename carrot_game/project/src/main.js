'use strict';
import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;
const gameBtn = document.querySelector('.game__header__button');
const gameTimer = document.querySelector('.game__header__timer');
const gameScore = document.querySelector('.game__header__score');
let timer = undefined;
let started = false;
let score = 0;
const gameFinishBanner = new PopUp();
const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameFinishBanner.setClickListener(startGame);

function startGame() {
    started = true;
    sound.playBackground();
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

gameField.setClickListener(onItemClick);

function onItemClick(item) {
    if (!started) { //게임시작하지 않았다면.
        return;
    }
    if (item === 'carrot') {
        score++;
        updateScoreBoard();
        if (score === CARROT_COUNT) {
            finishGame(true);
        }
    }
    else if (item === 'bug') {
        finishGame(false);
    }
};
function initGame() {
    gameField.init();
    score = 0;
    gameScore.textContent = `${CARROT_COUNT}`;
}
function showStopButton() {
    const icon = document.querySelector('.fas');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
    gameBtn.style.visibility = 'visible';
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

gameFinishBanner.hide();

gameBtn.addEventListener('click', event => {
    if (started) {
        stopGame();
    }
    else {
        startGame();
    }
})
function stopGame() {
    started = false;
    stopGameTimer();
    hideGameBtn();
    gameFinishBanner.showWithText('REPLAY ❓');
    sound.playAlert();
    sound.stopBackground();
}

function finishGame(win) {
    started = false;
    hideGameBtn();
    if (win) {
        sound.playWin();
    }
    else {
        sound.playBug();
    }
    stopGameTimer();
    sound.stopBackground();

    gameFinishBanner.showWithText(win ? `YOU WON ⭕` : `YOU LOST 💥`);
}

function updateScoreBoard() {
    gameScore.textContent = CARROT_COUNT - score;
}