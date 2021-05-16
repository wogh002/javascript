import * as sound from './sound.js';
import Field from './field.js';

export default class Game { //지역스코프
    constructor(gameDuration, carroutCount, bugCount) {
        this.gameDuration = gameDuration;
        this.carroutCount = carroutCount;
        this.bugCount = bugCount;
        this.timer = undefined;
        this.started = false;
        this.score = 0;
        this.gameBtn = document.querySelector('.game__header__button');
        this.gameTimer = document.querySelector('.game__header__timer');
        this.gameScore = document.querySelector('.game__header__score');

        this.gameField = new Field(this.carroutCount, this.bugCount);
        this.gameField.setClickListener(this.onItemClick);

        this.gameBtn.addEventListener('click', () => {
            if (this.started) {
                this.stopGame();
            }
            else {
                this.startGame();
            }
        })
    }
    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }
    startGame = () => {
        this.started = true;
        sound.playBackground();
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
    }
    stopGame() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameBtn();
        this.onGameStop && this.onGameStop('cancel');
        sound.playAlert();
        sound.stopBackground();
    }
    initGame() {
        this.gameField.init();
        this.score = 0;
        this.gameScore.textContent = `${this.carroutCount}`;
    }

    showStopButton() {
        const icon = document.querySelector('.fas');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-stop');
        this.gameBtn.style.visibility = 'visible';
    }
    showTimerAndScore() {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }
    updateTimerText(time) {
        const minutes = Math.floor(time / 60); //65초를 넣었다고 가정. => 1
        const seconds = time % 60; //65초를 넣었다고 가정. => 5
        this.gameTimer.textContent = `${minutes}:${seconds}`;
    }

    startGameTimer() {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec); //5
        this.timer = setInterval(() => {
            if (remainingTimeSec <= 0) {
                this.finishGame(this.carroutCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }
    stopGameTimer() {
        clearInterval(this.timer);
    }
    hideGameBtn() {
        this.gameBtn.style.visibility = 'hidden';
    }
    updateScoreBoard() {
        this.gameScore.textContent = this.carroutCount - this.score;
    }

    finishGame(win) {
        this.started = false;
        this.hideGameBtn();
        if (win) {
            sound.playWin();
        }
        else {
            sound.playBug();
        }
        this.stopGameTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    }
    onItemClick = item => {
        if (!this.started) { //게임시작하지 않았다면.
            return;
        }
        if (item === 'carrot') {
            this.score++;
            this.updateScoreBoard();
            if (this.score === this.carroutCount) {
                this.finishGame(true);
            }
        }
        else if (item === 'bug') {
            this.finishGame(false);
        }
    };

}