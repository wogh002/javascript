'use strict';
const amISexy = new Promise((rs, reject) => {
    rs(2);
});

const timesTwo = number => number * 2;
amISexy
    .then(timesTwo) //4
    .then(timesTwo) //8
    .then(timesTwo) //16
    .then(timesTwo) //32
    .then(timesTwo) //64
    .then(() => {
        throw Error('Something')
    })
    .then(lastNumber => console.log(`lastNumber = ${lastNumber}`))
    .catch(error => console.log(error));
