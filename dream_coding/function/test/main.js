'use strict';
//quiz time
//function calculate(command,a,b)
//command : add, substract ,divide,multply,remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add': return a + b;
        case 'substract': return a - b;
        case 'divide': return a / b;
        case 'multply': return a * b;
        case 'remainder': return a % b;
        default: throw Error('unkonwn command');
    }
}
console.log(calculate(
    prompt('choose under list \n add,substract,divide,multply,remainder'),
    +prompt('숫자를 입력하세요(1)'),
    +prompt('숫자를입력하세요(2)')
));

