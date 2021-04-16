function Accumulator(currentValue) {
    //this = {} 
    //accumulator = {}
    this.value = currentValue;
    this.read = function () {
        this.value += +prompt('값을 입력하세요', 0);
    }
    //return this;
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);





