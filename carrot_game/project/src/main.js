'use strict';
import PopUp from './popup.js';
import Game from './game.js';

const gameFinishBanner = new PopUp();
const game = new Game(5, 5, 5);
gameFinishBanner.setClickListener(game.startGame);
game.setGameStopListener(reason => {
    let message;
    switch (reason) {
        case 'cancel':
            message = 'REPLAY ❓';
            break;
        case 'win':
            message = `YOU WON ⭕`;
            break;
        case 'lose':
            message = `YOU LOST 💥`;
            break;
        default: throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});
gameFinishBanner.hide();
