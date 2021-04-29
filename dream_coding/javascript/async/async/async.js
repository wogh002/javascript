'use strict';
//async && await
//clear style of promise
//1.async 사용하기
async function fetchUser() {
    //사용자의 데이터를 백엔드에서 받아오는 함수라고 가정. 10초정도 걸린다고 가정.
    //만약 이 함수를  비동기적으로 처리하지 않을 경우 자바스크립트 엔진은 코드를 한줄한줄 읽는 동기식 언어이다 . 그래서 엄청 오래걸릴 수 있다. 10초동안 끝날떄까지 기다림.
    return 'ellie';
}
const user = fetchUser();
console.log(user);


