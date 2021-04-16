//심볼은 유일한 식별자를 만들고 싶을때 사용한다. (기본자료형 -> 심볼)
//id 는 심볼이된다.
//let id = Symbol();

let id = Symbol('id'); //id심볼에 'id'라는 설명이 붙는다.

let id2 = Symbol('id');
console.log(id == id2);
