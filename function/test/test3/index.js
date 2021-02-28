function minValue(a, b) {
    if (a < b) {
        return a;
    }
    else return b;
}
const a = +prompt('첫번째 값을 입력하세요');
const b = +prompt('두번째 값을 입력하세요');
minValue(a, b);
