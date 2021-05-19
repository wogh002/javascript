'use strict';
const button = document.querySelector('button');
function handleClick() {
    console.log('handleClick');
    //프로미스 만들자마자 resolve(0) 을 하면 0을리턴하는게 만들어진다.
    Promise.resolve(0)
        .then(() => {
            console.log('then');
            handleClick();
        })
}

button.addEventListener('click', () => {
    handleClick();
});


