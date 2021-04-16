'use strict';

const DEFAULT = 'adasasdasddasasd';
const sayHi = (aName = DEFAULT) => 'Hello' + aName;
console.log(sayHi());
