//JS에서의 this 는 런타임에 결정된다.
//this 는 . 앞의 객체를 참조한다.
//자바스크립트에선 모든 함수에 this를 사용할 수 있습니다. ★
//동일한 함수라도 다른 객체에서 호출했다면 'this’가 참조하는 값이 달라집니다.
let user = {
    name: 'John',
};
let admin = {
    name: 'Admin'
};

function sayHi() {
    alert(this.name);
}
//객체의 프로퍼티에 할당한 함수를 메소드라고한다.
user.f = sayHi;
admin.f = sayHi;
user.f();
admin['f']();

function sayHi2() {
    //그런데 엄격 모드가 아닐 때는 this가 전역 객체를 참조합니다.
    alert(this);
}
sayHi2(); //전역객체 window.


