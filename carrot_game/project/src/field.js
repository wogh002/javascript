'use strict';
const carrotSound = new Audio('./carrot/sound/carrot_pull.mp3');

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
        this.field.addEventListener('click', this.onClick);
    }
    init() {
        this.field.innerHTML = ``;
        this._addItem('carrot', this.carrotCount, './carrot/image/carrot.png');
        this._addItem('bug', this.bugCount, './carrot/image/bug.png');
    }
    randomNumber(min, max) {
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
    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }
    onClick(event) {
        const target = event.target;
        if (target.matches('.carrot')) {
            playSound(carrotSound);
            target.remove();
            this.onItemClick && this.onItemClick('carrot');
        }
        else if (target.matches('.bug')) {
            this.onItemClick && this.onItemClick('bug');
        }
    }
    playSound(sound) {
        sound.currentTime = 0;
        sound.play();
    }
}