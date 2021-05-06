'use strict';
const ENTER = 13;
const input = document.querySelector('input');
const addBtn = document.querySelector('.section__footer__btn');
const ol = document.querySelector('.section__lists');
const removeItem = li => {
    li.remove();
}
function createItem(currentValue) {
    const li = document.createElement('li');
    li.setAttribute('class', 'section__list');
    li.textContent = `${currentValue}`;
    const removeBtn = document.createElement('span');
    removeBtn.setAttribute('class', 'section__list-icon');
    removeBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    li.appendChild(removeBtn);
    return {
        li,
        removeBtn
    };
}
function onAdd(currentValue) {
    const { li, removeBtn } = createItem(currentValue);
    ol.appendChild(li);
    li.scrollIntoView({ block: 'center' });
    removeBtn.addEventListener('click', () => {
        removeItem(li);
    })
}
const isEmpty = currentValue => {
    if (currentValue.trim().length) {
        input.value = '';
        onAdd(currentValue.trim());
    }
}
addBtn.addEventListener('click', () => {
    isEmpty(input.value);
})
input.addEventListener('keypress', event => {
    if (event.keyCode === ENTER)
        isEmpty(input.value);
});

