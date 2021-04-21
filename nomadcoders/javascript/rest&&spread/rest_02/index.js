'use strict';
//rest 문법 ...  하나의 배열로 만들어준다. -> 단, 파타미터에 들어가는게 객체면 객체로 return.(destructuring 해도 객체면객체,배열이면 배열로  return) ★
//나머지 값들을 모아서 변수에 박는다. ★
//모든 값을 하나의 변수에 넣어준다. 
//parameter 부분에 들어가면 rest...  ★
const user2 = {
    name: 'nico',
    age: 24,
    password: 12345
};
//destructuring + ...rest
const killPassword = ({ password, name, ...rest }) => rest;
const cleanUser = killPassword(user2);
console.log(cleanUser);

//배열 destructuring +...rest
const array = [1, 2, 3, 4, 5];
const killNumber1 = ([a, ...rest]) => console.log(rest);
killNumber1(array);


const user = {
    name: 'nico',
    age: 24,
    password: 12345
};
//destructuring +default value 사용 + ...rest ---> return 객체했음.  객체를 리턴할 경우 () 로 감싼다.
//return 할 때 spread 사용함
const setCountry = ({ country = 'KR', ...rest }) => ({ country, ...rest });
const abc = setCountry(user);
console.log(abc);

const member = {
    NAME: 'nico',
    age: 24,
    password: 12345
};
// : rename
const rename = ({ NAME: name, ...rest }) => ({ name, ...rest })
console.log(rename(member));




















const board = {
    name: 'jaeho',
    DATE: '2021-04-21',
    address: '경기'
};

//board.DATE 의 프로퍼티 이름을 date 으로 바꾸고 싶다면?
const rename2 = ({ DATE: date, ...rest }) => ({ date, ...rest })
console.log(rename2(board));
