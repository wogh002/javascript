'use strict';
//import 파일변수명 from '.js';
import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder, Reason } from './game.js';

// export default 된 애만 사용 할 수 있다.

const gameFinishBanner = new PopUp();
//생성자에 이름을 알 수 없는 변수를 등록하는 것은 좋지 않다.(실수 할 수 있다.)
//또한 인자가 3개이상인 경우 builder 패턴을 사용하자.
gameFinishBanner.hide();

const game = new GameBuilder()
    .withGameDuration(5)
    .withCarrotCount(5)
    .withBugCount(5)
    .build();

game.setGameStopListener(reason => {
    let message;
    switch (reason) {
        case Reason.cancel:
            sound.playAlert();
            message = 'REPLAY ❓';
            break;
        case Reason.win:
            sound.playWin();
            message = `YOU WON ⭕`;
            break;
        case Reason.lose:
            sound.playBug();
            message = `YOU LOST 💥`;
            break;
        default: throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(game.startGame);
