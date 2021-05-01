'use strict';
//promise 들 끼리 상관이 있을경우 all 사용

//allSettled 메소드 같은경우 성공 실패 상관하지 않고 객체로 출력
//모든 프로미스가 잘 작동하는지 확인 할 필요가 없으면 allSettled 사용. 
//어떤게 잘 동작하고 어떤게 잘동작하지 않는지 확인시

const p = Promise.allSettled([
    fetch('https://yts.mx/api/v2/list_movies.json'),
    fetch(''),
    fetch('https://yts.mx/api/v2/list_movies.json'),
    fetch(''),
    fetch('https://yts.mx/api/v2/list_movies.json'),
])
    .then(console.log)
    .catch(error => console.log("error : " + error))