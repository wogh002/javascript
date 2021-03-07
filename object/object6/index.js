//for ..in 반복문
//for ..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있다. 
let user = {
    name: 'john',
    age: 30,
    isAdmin: true
};
for (let prop in user) { //객체의 모든 키를 순회 할 수 있다.
    alert(prop);
    alert(user[prop]);
}
