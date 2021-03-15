//메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다. ★
let user = {
    name: 'John',
    age: 30,
    sayHi() {
        alert(this.name); //this 현재 객체를 가리킨다.
    }
};
user.sayHi();
