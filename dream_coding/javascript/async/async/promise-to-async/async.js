'use strict';

class UserStorage {
    async infoUser() {
        try {
            const userInfo = await this.loginUser(userId, userPassword);
            const { name, role } = await this.getRoles(userInfo);
            alert(`${name} ${role}`);
        }
        catch (e) {
            console.log(e);
        }
    }
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
const userId = prompt('enter your ID');
const userPassword = prompt('enter your Password');

const userRole = new UserStorage()
userRole.infoUser();








