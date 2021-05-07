const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const button = document.querySelector('button');
//사용을 지양하자
//event.stopPropagation();
//event.stopImmediatePropagation();
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
