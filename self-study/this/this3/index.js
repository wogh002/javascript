//this 가 없는 arrow function.
//arrow function have no 'this'
//고유한 this를 가지지 않는다.
//에로우 펑션에서 this 를 참조하면 , 에로우 펑션이 아닌 평범한 외부 함수에서 this 값을 가져온다.
let user = {
    firstName: '보라',
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
}
user.sayHi();



