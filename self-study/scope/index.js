'use strict';
class A {
    //스코프 : 변수또는 함수에 접근할 수 있는 범위.
    //{}바깥에 사용된건 전부 전역스코프.
    constructor() {
        this.a = 1;
    }
    methodA() {
        console.log('나는 메소드 A 즉, 지역스코프 -> 해당 지역에서만(A) 접근해야한다. ');
        this.methodB();  // << this를 사용해주었을 경우 해당지역에서 접근하였으니, 참조가능.
        //해당 지역에서만 접근할 수 있어 지역을 벗어난 곳에선 접근할 수 없다.
        //하지만 this를 사용해주지 않았으니까 글로벌 스코프까지 methodB()를 찾으러간다.
        //하지만 값이 없으니까 에러.
    }
    methodB() {
        console.log('나는 메소드 B 즉, 지역스코프 -> 해당 지역에서만(A) 접근해야한다. ');
    }
};

const abc = new A();
abc.methodA();



// a메소드에서 b메소드를 사용하시오.
const obj = {
    a() {
        console.log('나는 a 메소드');
        this.b();
    },
    b: function () {
        console.log('나는 b 메소드');
    }
}
obj.a();


