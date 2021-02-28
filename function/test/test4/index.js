function pow(x, n) { //x=2 n=3
    let result = x; //result = 2
    for (let i = 1; i < n; i++) {
        result *= x; //4 //8
    }
    return result;
}
const x = +prompt('x?')
const n = +prompt('n?');
const result = (pow(x, n));
if (n > 0) alert(result);
else alert(`양의 정수 이어야 합니다`);



