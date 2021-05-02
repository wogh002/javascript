'use strict';
const spacial = document.querySelector('#spacial');
const btnGroup = document.querySelector('.button-group');

function moveBy100() {
    window.scrollBy({
        top: 100,
        behavior: 'smooth'
    });
}
function moveTo100() {
    window.scrollTo(0, 100);
}
function moveToSpacial() {
    spacial.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
}
btnGroup.addEventListener('click', event => {
    const id = event.target.id;
    console.log(event)
    switch (id) {
        case '1': moveBy100();
            break;
        case '2': moveTo100();
            break;
        case '3': moveToSpacial();
            break;
    }
});
