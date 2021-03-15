let calculator = {
    read() {
        this.a = +prompt('숫자입력하세요1', 0);
        this.b = +prompt('숫자입력하세요2', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }

}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
