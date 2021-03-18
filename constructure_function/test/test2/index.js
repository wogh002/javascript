//생성자 내에서 메소드를 만드는 방법.
function Calculator() {
    //this={}
    //calculator = {}
    this.read = function () {
        this.a = +prompt('값 1', 0);
        this.b = +prompt('값 2', 0);
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
    //return this;
}
let calculator = new Calculator();
calculator.read();
alert('sum => ' + calculator.sum());
alert('mul => ' + calculator.mul());

// /유사한 객체를 여러 개 만들 때 생성자 함수가 유용합니다.
