'use strict';

const getMoviesPromise = () => {
    fetch('https://yts.mx/api/v2/list_movies.json')
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`X ${e}`));
}


const getMoviesAsync = async () => {
    try {
        //async 를 사용하면 promise 를 사용하는 것 과 같다.
        //then을 사용하는것 대신에 await 사용하자
        //await 는 기본적으로 promise 가 끝나길 기다린다.
        //that's why response변수는 resolve(response) 가 있다.
        const response = await fetch('https://yts.mx/api/v2/list_movies.json');
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log(e);
    }
}
getMoviesAsync();
