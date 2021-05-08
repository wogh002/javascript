const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const button = document.querySelector('button');
//사용을 지양하자
//event.stopPropagation();
//event.stopImmediatePropagation();
//다른 사람들이 뭘 필요해서 이벤트를 들고 있던말던 내 것만 처리하니까 개무시 하게 됌.

outer.addEventListener('click', event => {
    if (event.target !== event.currentTarget) {
        return;
    }
    console.log(`outer : ${event.currentTarget} ,${event.target}`);
});
middle.addEventListener('click', event => {
    if (event.target !== event.currentTarget) {
        return;
    }
    console.log(`middle : ${event.currentTarget} ,${event.target}`);
})
button.addEventListener('click', event => {
    console.log(`button1 : ${event.currentTarget} ,${event.target}`);
    // event.stopPropagation();
})
button.addEventListener('click', event => {
    console.log(`button2 : ${event.currentTarget} ,${event.target}`);
    // event.stopImmediatePropagation();
})
// button.addEventListener('click', event => {
//     console.log(`button3 : ${event.currentTarget} ,${event.target}`);
//     // event.stopImmediatePropagation();
// })
