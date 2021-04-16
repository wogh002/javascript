//체이닝.
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder
    .up()
    .up()
    .down()
    .down()
    .down()
    .down()
    .down()
    .showStep();
//ladder.up().up().down().showStep(); //