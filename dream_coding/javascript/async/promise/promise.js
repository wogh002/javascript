'use strict';
//promise 는 자바스크립트에 내장되어 있는 객체
//비동기를 위해 사용한다 콜백함수 대신에
//1.프로세스의 상태
//성공,실패
//State : pending  -> fulfilled or rejected
//Producer  vs Consumer
//1.producer
//새로운 프로미스가 만들어 질 때 우리가 전달한 콜백 함수가 자동적으로 실행된다 ★ 
const promise = new Promise((resolve, reject) => {
    //doing some heavy wrok(network,read files)
    //시간이 좀 걸리는 작업은 프로미스를 만들어서 해결하자
    console.log('doing something....');
    //프로미스가 만들어지는 그 순간 실행시킨다. 
    //인스턴스 생성하지 않아도 된다.
    setTimeout(() => {
        //성공적으로 작업을 마무리 하였을 경우 resolve() 함수 사용
        //resolve('ellie');
        //만약 네트워크하다가 무언가 실패 하였을경우 reject( ) 사용
        reject(new Error('no network'));
    }, 2000)
});

//2.Consumers : then,catch , finally

promise
    .then(value => {
        //then 작업을 성공했다면 그때!
        console.log(value);
    })
    .catch(error => { //에러
        console.log(error);
    })
    .finally(() => console.log('finally'))
//finally 성공 실패 유무 상관없이 출력.
//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1)
            }, 1000);
        })
    })
    .then(num => console.log(num));



