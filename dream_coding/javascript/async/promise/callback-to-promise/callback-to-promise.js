'use strict';
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                }
                else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                }
                else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const userId = prompt('enter your ID');
const userPassword = prompt('enter your Password');

userStorage.loginUser(userId, userPassword)
    .then(userStorage.getRoles)
    .then(user => alert(`${user.name} 님 반가워요 당신의 권한은 ${user.role} 입니다`))
    .catch(console.log);


