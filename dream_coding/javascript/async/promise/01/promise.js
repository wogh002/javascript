'use strict';
const promise = new Promise((resolve, reject) => {
    //프로미스를 만드는 순간 executor 콜백함수가 바로 실행된다. 자동적으로 ★★★
    console.log('doing something...');
    setTimeout(reject, 2000, new Error('사용자가 볼 에러'));
})
    .then(value => console.log(value))
    .catch(e => console.log(e))
    .finally(() => console.log('성공 실패 유무 상관 없이 무조건 호출하라'))


//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})
    .then(result => result * 2)//2
    .then(result => result * 3)//6
    .then(result => { //6
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result - 1), 1000)
        })
    })
    .then(result => console.log(result));


//Error handling

const getHen = () => new Promise((resolve, reject) => setTimeout(resolve, 1000, '🐔'));
const getEgg = hen => new Promise((resolve, reject) => setTimeout(reject, 1000, new Error(`무엇인가 에러 발생! ex) network error`)));
const cook = egg => new Promise((resolve, reject) => setTimeout(resolve, 1000, `${egg}=>🍳`));

//콜백함수를 전달할 때 받아오는 value 를 다른 함수에서 하나를 호출하는 경우에는 리팩토링가능
//then 에서 받아오는 value 하나를 바로 함수에 파라미터로 전달한다.
getHen() //
    .then(getEgg)
    .catch(() => '🥚=>💕') //에러 대처
    .then(cook)
    .then(console.log)
    .catch(console.log);

