'use strict';
class Counter {
    constructor({ initiaNumber = 0, counterId, plusId, minusId }) {
        this.count = initiaNumber;
        this.counter = document.getElementById(counterId);
        this.plusBtn = document.getElementById(plusId);
        this.minusBtn = document.getElementById(minusId);
        this.addEventListener(); //함수 실행.
    }
    addEventListener = () => {
        this.plusBtn.addEventListener('click', this.increase);
        this.minusBtn.addEventListener('click', this.decrease);
    }
    increase = () => {
        //arrow function 에서 this 를 사용 할 경우 외부함수의 객체를 참조.
        this.count = this.count + 1;
        this.repaintCount();
    }
    decrease = () => {
        this.count = this.count - 1;
        this.repaintCount();
    }
    repaintCount() {
        this.counter.innerHTML = this.count;
    }
}
new Counter({
    counterId: 'counter',
    plusId: 'add',
    minusId: 'minus'
});
new Counter({
    counterId: 'counter2',
    plusId: 'add2',
    minusId: 'minus2',
    initiaNumber: 666
});