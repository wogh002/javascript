'use strict';
const ENTER = 13;
const input = document.querySelector('input');
const btn = document.querySelector('.section__footer__btn');

const ol = document.querySelector('.section__lists');
const nodeArray = [];

//사용자가 엔터키 OR 버튼 눌렀을 때

const showList = currentValue => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    
    li.setAttribute('class', 'section__list');
    span.setAttribute('class', 'section__list-icon');
    span.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    li.appendChild(span);
    li.textContent = `${currentValue}`;
    nodeArray.push(li);
   
    for (let i = 0; i < nodeArray.length; i++) {
        console.log(nodeArray);
        ol.appendChild(nodeArray[i]);
    }
}

const isEmpty = currentValue => {
    if (currentValue.trim().length) {
        input.value = '';
        showList(currentValue.trim());
    }
}
function init() {
    input.addEventListener('keypress', event => {
        if (event.keyCode === ENTER)
            isEmpty(input.value);
    });
    btn.addEventListener('click', () => {
        isEmpty(input.value);
    })
}
init();
