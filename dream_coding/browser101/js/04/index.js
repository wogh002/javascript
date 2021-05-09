//class
//생성자 함수의 이름은 첫글자가 대문자로 시작한다.
//반드시 new 연산자를 붙혀서 실행한다. ★
//new Counter(...) 가 실행된다면 
// this{ } 빈객체가 암시적으로 만들어진다.
// 그리고 암시적으로 this가 return 된다.
//생성자에서는 항상 this를 사용하자.
//new 라는 키워드로 클래스를 만들면 생성자가 실행이된다.
// 콜백함수는 함수로써 다른 함수의 인자로 들어가게 된 후에
// 어떠한 로직이 완성 된 후 호출 된다.
////빈 배열이나 빈 객체도 무조건 true
class Counter {
    constructor(runEveryFiveTimes) {//만약 생성자에 콜백이 들어오지 않았을경우 undefined
        //this={};
        this.counter = 0;
        this.callback = runEveryFiveTimes;
        //return this;
    }
    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
            // if (this.callback) { //callback 값이 있다면 실행
            //     this.callback(this.counter);
            // }
        }
    }
}
function alertNum(counter) {
    alert(`WOW ! : ${counter}`)
}

const coolCounter = new Counter(alertNum);//만약 생성자에 콜백이 들어오지 않았을경우 undefined
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();