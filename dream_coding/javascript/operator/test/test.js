'use strict';
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }    
    console.log(`짝수 : ${i}`)

}
for (let j = 0; j <= 10; j++) {
    if (j > 8) {
        break;
    }
    console.log(`숫자 8만나면 탈출 ${j}`);
}