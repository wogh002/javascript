'use strict';

let user = {
    name: 'jaeho',
};
let admin = { name: 'aaa' };

function sayHi() {
    alert(this.name);
}
user.f = sayHi;
admin.f = sayHi;




