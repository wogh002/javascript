const superBig = {
    [Symbol('nico')]: {
        age: 12
    },
    [Symbol('nico')]: {
        age: 12
    }
    //'nico' 심볼은 서로 다르다.
};
superBig.abc = true;
//심볼을 가져오고 싶다면?
const takeSymbol = Object.getOwnPropertySymbols(superBig);
console.log(takeSymbol);
takeSymbol.forEach(value => console.log(superBig[value]));