'use strict';
//JSON은 JavaScript Object Notation의 약자로, 브라우저와 서버사이에서 오고가는 데이터의 형식이다.
//1.Object to JSON
//오버로딩. 메소드의 이름은 동일하지만 파라미터 개수가 달라야한다.
//stringify()
//서버에게 데이터를 넘겨 줄 경우 string 값으로 넘겨준다.


const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump() {
        console.log(`${this.name} can jump`);
    }
}
let json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key},value : ${value}`);
    //key 가 'name' 일 경우 'ellie' 를 리턴하라
    return key === 'name' ? 'ellie' : value;
})


//2.JSON to Object
//parse()
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key},value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);


