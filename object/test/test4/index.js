let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
function multiplyNumeric(number) {
    for (prop in number) {
        if (typeof number[prop] === 'number') {
            number[prop] *= 2;
        }
    }
};
multiplyNumeric(menu);
console.log(menu);