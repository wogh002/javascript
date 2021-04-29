'use strict';

// // 이렇게 호출하는 것과
// const x = Error('I was created using a function call!');
// ​​​​// 이렇게 사용하는게 동일
// const y = new Error('I was constructed via the "new" keyword!');
const getMoviesAsync = async () => {
    try {
        //async 를 사용하면 promise 를 사용하는 것 과 같다. //return new Promise((resolve,reject) => {})
        //then을 사용하는것 대신에 await 사용하자
        //await 는 기본적으로 promise 가 끝나길 기다린다.
        //that's why response변수는 resolve(response) 가 있다.
        const response = await fetch('https://yts.mx/api/v2/list_movies.json');
        const json = await response.json();
        throw Error(`I'm hungry`);
    } catch (e) {
        console.log(e);
    }
    finally {
        console.log('we are done');
    }
}
getMoviesAsync();
