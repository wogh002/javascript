//중첩 객체 복사
//프로퍼티가 다른 객체에 대한 참조 값일 수 있다.
//하지만 중첩 객체는 복사한 객체 중첩객체와 주소값이 같다
let user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
};
let clone = Object.assign({}, user);
alert(clone === user); //false 객체 주소값이 다름
//하지만 중첩 객체는 주소값이 같다
alert(user.sizes === clone.sizes); // true, 같은 객체입니다.
user.sizes.width++;
alert(clone.sizes.width);
