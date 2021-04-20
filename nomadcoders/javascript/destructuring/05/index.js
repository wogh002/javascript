'use strict';
//value shorthands;
const follow = checkFollow();
const alert = checkAlert();
const settings = {
    notification: {
        follow,
        alert
    }
}