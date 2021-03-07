//대괄호 표기법 예시
let user = {
    name: 'John',
    age: 30,
};
let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');
//변수로 접근 prompt 창에 name 을 입력한경우.
alert(user[key]);
//하지만 (.) 표기법은 이런 방식이 접근불가.
let user = {
    name: 'aaaa',
    age: 78
};
let key = prompt('aa', 'name');
// alert(user.key); //undefined
