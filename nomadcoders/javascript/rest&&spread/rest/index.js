'use strict';
//rest 문법 ...  하나의 배열로 만들어준다. -> 단, 파타미터에 들어가는게 객체면 객체로.(destructuring 해도 객체면객체,배열이면 배열로) ★
//나머지 값들을 모아서 변수에 박는다. ★
//모든 값을 하나의 변수에 넣어준다. 
//parameter 부분에 들어가면 rest...  ★
const infiniteArgs = (...kimchi) => console.log(kimchi);
infiniteArgs('1', 1, true, 'lalala', [1, 2, 3, 4, 5], 'wwewewewew');

//rest = 나머지
const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`my bestfriend is ${firstOne}`)
    console.log(potato[0]); //jaeho
};
bestFriendMaker('nico', 'jaeho', 'taeho', 'usa guy', 'japan guy');

