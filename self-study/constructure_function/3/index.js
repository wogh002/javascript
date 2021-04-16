//생성자 내에서 메서드 만드는 방법
function User(name) {
    //this = {}
    //user = {}
    this.name = name;
    this.sayHi = function () {
        alert('my name is ' + this.name + '메소드 입니다.');
    }
    //return this
}
let john = new User('john');
john.sayHi();