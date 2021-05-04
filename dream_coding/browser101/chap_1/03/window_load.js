'use strict';

//only document
//html만 완료가되면 이것이 호출됨.
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
})
//after resources (css,images)
//css,images 다운이 다 되면 그때 호출됌 load
window.addEventListener('load', () => {
    console.log('load');
})