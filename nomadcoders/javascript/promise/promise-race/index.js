'use strict';
const p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'First');
});
const p2 = new Promise((resolve, reject) => {
    //reject 함수를 사용하게되면 거부된 promise 객체를 반환한다.(거부할 때 사용)
    setTimeout(reject, 5000, 'second');
});
const p3 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Third');
});

// /Promise.race() 메소드는 Promise 객체를 반환합니다.
//  이 프로미스 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.(resolve,reject 상관없이)
const motherPromise = Promise.race([p1, p2, p3])
motherPromise
    .then(value => console.log(value))
    .catch(error => console.log(error));
