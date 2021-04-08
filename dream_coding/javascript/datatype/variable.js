'use strict';
// var age; // var hoisting
console.log(age); //var hoisting
age = 5;
console.log(age);
console.log('Hello World');
//2.Variable
//let(added in ES6)
let globalName = 'global name';
//전역변수는 어플리케이션이 끝날 때 까지 항상 메모리에 탑재 되어 있다
//{} block scope
//블록 밖에서는 블록안에 있는 내용을 볼 수가 없게 된다.
//블록안에서 선언 된 변수는 블록 안에서만 사용 가능.
//전역변수는 어디서든 사용 가능. => globalName
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//ES6전에는 let 말고 var 를 사용 하였다.
//변수 선언도 하기 전에 값을 할당하는게 가능하다. (var) var hoisting
//1.var hoisting 이란 : 어디에 선언했냐에 상관없이 항상 제일위로 선언을 끌어올려 주는 것.
//2.block scope 를 무시한다.
{
    age = 4;
    var age;
}

//3.constants 한번 작성한 값은 변경이 불가능하다.
const daysInweek = 7;
const maxNumber = 5;
//4. variable  types 
//primitive type . : number,string,boolean ,null, undefined , symbol
//object : function-class function.

const count = 17;
const size = 17.1; // decimal number
console.log(`value :${count},type : ${typeof count}`);
console.log(`value :${size},type : ${typeof size}`);

//숫자를 0 으로 나누게 되면 무한대 infinity
const infinity = 1 / 0;
console.log(infinity);
const infinity2 = -1 / 0;
console.log(infinity2);
const nAn = 'not a number' / 2;
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const gretting = 'hello' + brendan;
console.log(` ${char} ${typeof char}`)

//boolean
//flase : 0 ,null ,undefined ,NaN ,''
//true : any other value
const canRead = true;
const test = 3 < 1//false;
console.log(`value :${canRead}, type:${typeof canRead}`);

//5.Dynamic typing : dynamically typed language.
//동적으로 입력되는 언어다. 할당 된 값에 따라서 타입이 변경 될 수 있다.
//런타임 언어다.(프로그램이 동작 할때 타입이 정해진다.) 할당 된 값에 따라서 타입이 변경 될 수 있다. 이 단점을 보완하기 위해 타입스크립트가 탄생.
 let text = 'hello';
 console.log(`${text} ${typeof text}`);
 text=1;
 console.log(`${text} ${typeof text}`);




