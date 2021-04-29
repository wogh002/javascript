'use strict';
const p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'First');
});
const p2 = new Promise((resolve, reject) => {
    //reject 함수를 사용하게되면 거부된 promise 객체를 반환한다.(거부할 때 사용)
    setTimeout(resolve, 3000, 'second');
});
const p3 = new Promise(resolve => {
    setTimeout(resolve, 1000, 'Third');
});

//메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 순서는 all([여기 정한 순서])
//혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다.
// 주어진 프로미스 중 하나라도 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부합니다.
const motherPromise = Promise.all([p1, p2, p3])
motherPromise
    .then(value => console.log(value))
    .catch(error => console.log(error));


