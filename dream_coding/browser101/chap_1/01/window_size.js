'use strict';
const tag = document.querySelector('.tag');

function updateTag() {
    tag.innerText = `window.screen:${window.screen.width},${window.screen.height}
    window.outer:${window.outerWidth},${window.outerHeight}
    window.inner:${window.innerWidth},${window.innerHeight}
    documentElement.clientWidth:${document.documentElement.clientWidth},${document.documentElement.clientHeight}
`;
}
window.addEventListener('resize', () => {
    updateTag();
});
updateTag();
