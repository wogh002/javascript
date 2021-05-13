'use strict';
function Machine() { //생성자 함수 
    //새로생성되는 object this.
    this.q = 'consume';
    this.w = 'snowball';
}

Machine.prototype.name = 'kim';
const nunu = new Machine();
console.log(nunu.name);
