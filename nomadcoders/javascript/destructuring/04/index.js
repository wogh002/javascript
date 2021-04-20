'use strict';
//function Destructing.
//object Destructing.
function saveSettings({ color, theme, follow }) {
    console.log(follow);
}
saveSettings({
    color: 'red',
    theme: 'blue',
    follow: true
})

function saveSettings2({ notification: rename, color: { theme = 'default value' } }) {
    console.log(theme, rename.alert);
}
saveSettings2({
    notification: {
        follow: true,
        alert: true,
        mkt: false,
    },
    color: {
        theme: 'blue'
    }
});