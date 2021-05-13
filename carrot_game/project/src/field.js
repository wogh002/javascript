'use strict';
export default class Field {
    constructor(carrotCount, bugCount) {
        this.carrotCount = carrotCount;
        this.bugCount = bugCount;
        this.CARROT_SIZE = 80;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = this.fieldRect.width - this.CARROT_SIZE;
        this.y2 = this.fieldRect.height - this.CARROT_SIZE;
        this.field.addEventListener('click', event => {
            this.onClick && this.onClick(event);
        })
    }
    //field 안에 존재하는 메소드들.
    init() {
        this.field.innerHTML = ``;
        this._addItem('carrot', this.carrotCount, './carrot/image/carrot.png');
        this._addItem('bug', this.bugCount, './carrot/image/bug.png');
    }
    setClickListener(onClick) {
        this.onClick = onClick;
    }
    randomNumber(min, max) { //min 이상 max미만
        return Math.random() * (max - min) + min;
    }
    _addItem(className, count, imgPath) {
        for (let i = 0; i < count; i++) {
            const item = document.createElement('img');
            item.setAttribute('class', className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const randomWidth = this.randomNumber(this.x1, this.x2);
            const randomHeight = this.randomNumber(this.y1, this.y2);
            item.style.top = `${randomHeight}px`;
            item.style.left = `${randomWidth}px`;
            this.field.appendChild(item);
        }
    }
}