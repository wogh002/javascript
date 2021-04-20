'use strict';
//settings object 를 api를 통해서 받았다고 가정하자
//chosen_color 자바스크립트에서 변수명 이렇게 작성하면 두드려 맞는다(하지만 api 변수명이 _이렇게 적혀져 있다).
//so, i have to set 변수명
//rename (':') 이라는 것 이 존재한다.
const settings = {
    color: {
        chosen_color: 'dark'
    }
};

let chosenColor = 'blue'
console.log(chosenColor);
//() 양쪽 끝에 괄호를 써준 이유는  기존 let 변수 (chosenColor)를 찾아서 업데이트 해주기 위한 것.
//( ) 를 사용하지 않았을 경우 const, let 둘중 하나 사용 해주어야 한다 하지만 위에서 이미 정의했기 때문에 오류가 나기 때문에 ( ) 를 사용한 것.
//기존 let 변수를 찾아서 등록. ( )
//rename을 사용하고 싶을 경우 ':' 을 사용해주자
(
    { color: { chosen_color: chosenColor = 'default value' } } = settings
);
console.log(chosenColor); //dark

//////////////////////////////////////////////////////////////////////////////////////
