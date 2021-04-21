'use strict';
//spread ->...  배열,object 의 모든 요소를 풀어 헤쳐서 보여줌 .
//변수를 가져가서 풀어헤친다.
const friends = ['nico', 'lynn'];
const newFriends = [...friends, 'jaeho'];
console.log(newFriends);

const nico = {
    userName: 'nico'
};
console.log({ ...nico, password: 123 });

const first = ['mon', 'tue', 'wed'];
const weekend = ['sat', 'sun'];
const fullWeek = [...first, '목', '금', ...weekend];
console.log(fullWeek);

//조건부
//spread 를 전개하려면 object,array 둘 중 하나여야 한다.
const lastName = prompt('Last name');
const user = {
    userName: 'nico',
    age: 24,
    ...(lastName !== '' && { lastName }),
    //...false 일 경우 spread 자체가 무시된다.
    //...false 올 수 있음
    //객체를 만드는 방법 객체의 리터럴을 이용해만든다.
    //배열을 만드는 방법 [] 를 이용한다.
}
function returnObj() {
    return [
        'a', 'b'
    ]
}
const member = {
    userName: 'nico',
    age: 35,
    ...(true && ['a', 'b'])
}
console.log(member);



