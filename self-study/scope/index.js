'use strict';
class A {
    constructor() {
        this.a = 1;
    }
    methodA() {
        console.log('나는 메소드 A 즉, 지역스코프 -> 해당 지역에서만(A) 접근할 수 있어요 ');
        methodB(); // << this를 사용해주었을 경우 해당지역에서 접근하였으니, 참조가능.
        //하지만 this를 사용해주지 않았으니까 글로벌 스코프까지 methodB()를 찾으러간다.
        //하지만 값이 없으니까 에러.
    }
    methodB() {
        console.log('나는 메소드 B 즉, 지역스코프 -> 해당 지역에서만(A) 접근할 수 있어요');
    }
};
const abc = new A();
abc.methodA();

const object = {
    bb: function () {
        console.log(' object bb의 메소드');
        cc();
    },
    cc: function () {
        console.log('object cc의 메소드');
    }
}
object.bb();