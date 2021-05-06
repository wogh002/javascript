'use strict';
const input = document.querySelector('input');
const addBtn = document.querySelector('.section__footer__btn');
const items = document.querySelector('.section__lists');

const createItem = text => {
    const itemRow = document.createElement('li');
    const removeBtn = document.createElement('span');
}
function onAdd() {
    //1.사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    //2.새로운 아이템을 만듬(텍스트+삭제버튼) 
    const item = createItem(text);
    //3.items컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    //4.인풋을 초기화한다.
    input.value = '';
    input.focus();
}
addBtn.addEventListener('click', () => {
    onAdd();
})