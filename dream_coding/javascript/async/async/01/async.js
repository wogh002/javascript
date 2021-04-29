'use strict';

//1.async 사용하기
//함수앞에 async 작성 할 경우 프로미스로 자동 변환이 된다. 
async function fetchUser() {
    return 'ellie';
}
// fetchUser().then(console.log);

//2.await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(2000);
    return '🍏';
}



async function getBanana() {
    await delay(1000);
    //await 자체가 then 값을 가지고 있다.
    return '🍌'
}

// function getBanana() {
//     return delay(3000)
//         .then(() => '🍌');
// }


// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`)
//     })
// }
async function pickFruits() {
    const applePromise = getApple(); // 프로미스를 만들면 바로 코드블럭이 실행된다.
    const bananaPromise = getBanana();// 프로미스를 만들면 바로 코드블럭이 실행된다. 
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}


//3.Promise API
function pickAllFruits() {
    //병렬적으로 수행한다 all (비동기적으로 이행한다)
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    //가장먼저 값을 리턴하는 아이만 전달된다.
    return Promise.race([getApple(), getBanana()])
        .then(fruit => fruit);
}
pickOnlyOne().then(console.log);
