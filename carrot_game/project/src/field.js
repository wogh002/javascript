'use strict';
import * as sound from './sound.js';
const CARROT_SIZE = 80;

export default class Field {
    //지역스코프 : 해당 지역(Field)에서만  접근 해줘야한다.
    //그래야 지역에 존재하는 메소드 그리고 변수를 사용 할 수 있다.
    constructor(carrotCount, bugCount) {
        //this={}
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = this.fieldRect.width - CARROT_SIZE;
        this.y2 = this.fieldRect.height - CARROT_SIZE;
        //콜백함수 : 함수로써 다른함수의 인자로 들어간 후 어떠한 로직이 실행되고 호출된다.
        //함수를 어딘가의 인자로 전달할 경우 클래스정보는 함께 전달되지 않는다.
        //즉 this.onclick() 이라는 ★함수만★ 전달된다.
        //클래스정보를 무시하고 싶지 않을 때는 함수를 클래스에 바인딩을 시켜줘야한다. this 바인딩
        //or arrow function 을 사용해주어야한다.
        // this.onClick = this.onClick.bind(this);
        this.field.addEventListener('click', this.onClick);
        //return this;
    }
    init() {
        this.field.innerHTML = ``;
        this._addItem('carrot', this.carrotCount, './carrot/image/carrot.png');
        this._addItem('bug', this.bugCount, './carrot/image/bug.png');
    }

    _addItem(className, count, imgPath) {
        for (let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const randomWidth = randomNumber(this.x1, this.x2);
            const randomHeight = randomNumber(this.y1, this.y2);
            item.style.top = `${randomHeight}px`;
            item.style.left = `${randomWidth}px`;
            this.field.appendChild(item);
        }
    }
    onClick = event => {
        const target = event.target;
        if (target.matches('.carrot')) {
            sound.playCarrot();
            target.remove();
            this.onItemClick && this.onItemClick('carrot');
        }
        else if (target.matches('.bug')) {
            this.onItemClick && this.onItemClick('bug');
        }
    }
    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }


}
//클래스에 상관없는 것들은 밖에다가 두자.
//메모리 효율적 -> 똑같이 반복해서 오브젝트에 만들어지지 않기 때문.
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
