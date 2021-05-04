'use strict';
const img = document.querySelector('.img');
const horizontal = document.querySelector('.horizontal'); //수평
const vertical = document.querySelector('.verticality'); //수직
const text = document.querySelector('.text');

window.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    text.style.top = `${y}px`;
    text.style.left = `${x}px`;
    text.textContent = `${x}px,${y}px`;
    //우선, innerText는 IE에서 이전 버전에서 쓰였던 아이로 더이상 표준에 맞지 않는 API이기 떄문에 쓰지 않는것이 좋아요. 
    //textContent는 단순히 텍스트를 읽어오고 쓰는 아이예요.
    //innerHTML은 HTML 태그를 포함한 string을 설정할 수 있는 아이로,
    //사용자에게 입력 받는 input의 경우는 innerHTML 보다는  꼭 textContent를 사용해야 해요.
});
