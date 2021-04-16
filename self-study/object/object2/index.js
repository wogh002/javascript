let user = {
    name: 'John',
    age: 30
};
//키엔 문자형, 값엔 모든 자료형이 허용됩니다.
alert(user.name);
alert(user.age);

//객체에 프로퍼티 동적으로 추가 가능.
user.isAdmin = true;
//boolean 형을 가진 isAdmin 프로퍼티 추가. 
alert(user.isAdmin);

//delete 를 이용해 프로퍼티 삭제 가능.
delete user.age;
console.log(user);


