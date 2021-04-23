'use strict';
//class 는 청사진이다.
class User {
    //destructuring
    constructor({ userName, lastName, email, password }) {
        //this{}
        this.userName = userName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        //return this
    }
    sayHello = () => {
        console.log(`hello i'm ${this.userName} `);
    }
    getProfile() {
        console.log(`${this.userName},${this.email},${this.password}`);
    }
    updatePassword(newPassword, currentPassword) {
        if (currentPassword === this.password) {
            this.password = newPassword;
        }
        else console.log(`can't change password cause you don't fit your current password`);
    }
}
//생성자에 객체 넣기
const uglyUser = new User({
    userName: 'nico',
    lastName: 'serrano',
    email: 'nico@com',
    password: 1234
});

class Admin extends User {
    constructor({ userName, lastName, email, password, superAdmin, isActive }) { //destructuring
        super({ userName, lastName, email, password }); //super ->부모의 생성자 호출 할 수 있다. //and 객체 집어넣기 가능
        this.superAdmin = superAdmin;
        this.isActive = isActive;
    }
    deleteWebsite() {
        console.log('deleting the whole website...');
    }
}
const admin = new Admin({
    userName: 'nico',
    lastName: 'serrano',
    email: 'nico@com',
    password: 1234,
    superAdmin: true,
    isActive: true
});


