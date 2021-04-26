'use strict';
//자바스크립트는 동기적이다(synchronous 씽크로너스) => 작성한 순서대로 코드가 실행된다
//js엔진은 코드를 제일 위에서 밑으로 실행하게 된다.
//hosting : var or 함수 선언이 자동으로 프로그램 최상단에 선언된다.

//비동기적(Asynchronous)인 방법 
//어떠한 요청을 보내면 그 요청이 끝날 때까지 기다리는 것이 아니라, 응답에 관계없이 바로 다음 동작이 실행되는 방식
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

//Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('Asynchronous call back'), 2000);

console.clear();
//call back HELL ex)
//사용자의 데이터를 백엔드에서 받아오는 클래스 생성. 
class UserStorage {
    constructor({ userId, password }) {
        this.userId = userId;
        this.userPassword = password;
        this.loginUser(
            this.userId,
            this.userPassword,
            id => {
                this.getRoles(id,
                    ({ name, role }) => alert(`반갑습니다 ${role} ${name} 님`),
                    error => console.log(error));
            },
            error => console.log(error));
    }
    loginUser(id, password, onSuccess, onError) {
        //데이터가 실제로 없기 때문에 있다고 가정하에 setTimeout실행
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            }
            else {
                onError(new Error('not found'))
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            }
            else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userProfile = new UserStorage({ userId: 'ellie', password: 'dream' });