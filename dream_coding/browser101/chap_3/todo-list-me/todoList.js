'use strict';
const ENTER = 13;
const input = document.querySelector('input');
const addBtn = document.querySelector('.section__footer__btn');
const items = document.querySelector('.section__lists');
let id = 1; //UUID
function createItem(currentValue) {
    const li = document.createElement('li');
    li.setAttribute('class', 'section__list');
    li.dataset.id = `${id}`;
    li.innerHTML = `
            ${currentValue}
            <button class="section__list-icon">
            <i class="fas fa-trash-alt" data-id="${id}"></i>
            </button>
    `
    items.appendChild(li);
    id++;
}

function onAdd(currentValue) {
    createItem(currentValue);
}
const isEmpty = currentValue => {
    if (currentValue.trim().length) {
        input.value = '';
        input.focus();
        onAdd(currentValue.trim());
    }
}
//이벤트 버블링 => 하위의 이벤트가 상위로 전달 되어 가 는것.
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (event.target.className === 'fas fa-trash-alt') {
        if (id) {
            const toBeDeleted = document.querySelector(`.section__list[data-id='${id}']`);
            toBeDeleted.remove();
        }
    }

})

addBtn.addEventListener('click', () => {
    isEmpty(input.value);
})
input.addEventListener('keypress', event => {
    if (event.keyCode === ENTER)
        isEmpty(input.value);
});