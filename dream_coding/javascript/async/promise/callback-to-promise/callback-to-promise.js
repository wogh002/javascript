'use strict';
class UserStorage {
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

const userStorage = new UserStorage();
const userId = prompt('enter your ID');
const userPassword = prompt('enter your Password');

userStorage.loginUser(
    userId,
    userPassword,
    userId => {
        userStorage.getRoles(
            userId,
            userWithRole => {
                alert(
                    `반갑습니다 ${userWithRole.name} 님 당신의 권한은 ${userWithRole.role} 입니다.`
                );
            },
            error => console.log(error))
    },
    error => console.log(error));

