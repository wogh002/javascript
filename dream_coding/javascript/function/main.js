'use strict';
//one function = one thing
//naming : doSomething ,verb
//createCard, createPoint
//function  is object in JS.
//오브젝트이기 때문에 함수를 변수에다가 할당 할 수 있고 파라미터에 전달 할 수 있고.

function printHello() {
    console.log('Hello');
}
printHello();
function log(message) {
    console.log(message);
}
log('hello'.toUpperCase());

//2 parameter.
//premitivetype parameters : passed by value
//object parameters : passed by reference.
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie.name);

//3. default parameters ( added in ES6 )
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


//4. Rest parameters ( added in ES6 )
function printAll(...args) { //배열형태로 전달되어진다
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }

    //args.forEach(arg => console.log(arg));
    args.forEach(function (arg) {
        console.log(arg);
    })
}
printAll('jaeho', 'coding', 'ellie', 'eee');

//5.Local scope
//return 타입이 없는 함수는 return undefined 가 들어가있는 것 과 같다.
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message)
    console.log(globalMessage);
    printAnother();
    //retrun undefined
    function printAnother() {
        console.log(message + "&& printAnother");
        let childMessage = 'hello';
        //retrun undefined
    }
}
printMessage();
//6.return
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(` sum : ${result}`);

//7.Early return ,early exit.
//Bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
//good
function upgradeUser(user) {
    if (user.point <= 10) { //조건이 맞지 않을 때는 빨리 return 해서 함수종료. (효율적이다)
        return;
    }
    //long upgrade logic... //필요한 로직 이제 작성.
}

//자바스크립트에서 함수는 값으로 써 사용 할 수 있다. 변수에 할당, 리턴 프리미티브 타입처럼 사용 할 수 있다.
//1.function expression 변수에 할당
const print = function () { //함수에 이름이 없는 것을 익명함수 라고한다.
    console.log('print');
}
print();
const abc = print; //print 함수를 abc 에 복사해서 할당한다. 참조(x)
abc();
const sum2 = sum;
console.log(sum2(1, 4));

//함수선언식은 호이스팅이 된다. (함수선언을 최상단으로 끌어올려준다)

//콜백함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'i love you') {
        printYes();
    }
    else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!!');
};
const printNo = function () {
    console.log('No!!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('i love you', printYes, printNo);

//arrow function
//arrow funciton 은 항상 함수이름이 없는 익명함수이다.
const simplePrint = function () {
    console.log('simplePrint');
}
const simplePrint2 = () => console.log('simplePrint');
const add = (a, b) => a + b;
const add2 = function (a, b) {
    return a + b;
}
simplePrint2();
console.log(add(1, 2));
console.log(add2(1, 2));
//arrow function 에서 블록을 사용하게 될 경우 명시적으로 return 키워드를 사용해주어야 한다.
const simpleMultiply = (a, b) => { 
    return a * b;
}

//IIFE 함수선언식이든 표현식이든 항상 만들면 호출을 해야한다.
//하지만 밑에 처럼 괄호로 묶고 호출을 한다면 바로 호출이된다.
//JS에서 함수를 바로 호출하고 싶을 때 사용.
//IIFE : Immediately Invoked Function Expression.
//즉시 호출 함수.
function hello() {
    console.log('IIFE');
}
hello();

(function hello2() {
    console.log('IIFE222222222222222');
})();
