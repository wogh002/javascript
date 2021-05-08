//primitive type -> string,boolean,null,undefined,number,symbol;
let age = 2;
let obj = {
    name: 'ellie',
    age: 23
};
const obj2 = obj;
obj.name = 'james';
console.log(obj2);

