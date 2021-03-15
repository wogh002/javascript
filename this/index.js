let user = {
    name : 'John',
    age : 30
};
//js 에서는 객체의 프로퍼티에 함수를 할당해서 객체에서 행동할 수 있는 능력을 부여해준다.
//객체 프로퍼티에 할당된 함수를 메서드(method) 라고 부릅니다.
user.sayHi = function(){
    alert('안녕하세요');
}
user.sayHi();

