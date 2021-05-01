'use strict';
const fruits = ['apple', 'strawberry', 'avocado'];
const sortFruitByLength = (fruitA, fruitB) => {
    //a-b => a<0 => a 탄생 
    //a-b=>a>0 => b탄생
    //10-5 => 5 
    //7-5 => 2
    return fruitB.length - fruitA.length;

}
console.log(fruits.sort(sortFruitByLength));




//object 배열 정렬
const person = [
    {
        name: 'nico',
        age: 12
    }
    , {
        name: 'lynn',
        age: 22
    }
]

const orderPersonByAge = (personA, personB) => {
    return personB.age - personA.age;
    //return 값이  12-22 0 보다 작은 경우일경우 a가먼저  => a탄생
    //22-12 a>0 => b탄생
}
console.log(person.sort(orderPersonByAge));
console.log(person);
