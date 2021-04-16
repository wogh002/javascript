//객체를 복제하는방법(1)
let user = {
    name: 'John',
    age: 30
};
let clone = {};
//빈 객체에 user프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
    clone[key] = user[key];
}
// console.log(clone.name);
// clone.name = 'jaeho';
// console.log(clone.name);

//객체를 복제하는방법(2)
//assign 메소드를 사용해서 여러객체를 하나로 병합
//Object.assign(dest, [src1, src2, src3...])
//dest -> 복사할 대상 (목표객체)
//src -> 복사하고자 하는 객체

let user2 = { name: 'John' };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
//permissions1,permissions2 프로퍼티를 user2로 복사
Object.assign(user2, permissions1, permissions2);
console.log(user2);

//목표객체에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어 씌워진다.
Object.assign(user2, { name: 'Pete' });
console.log(user2.name);


//Object.assign 메소드를 사용하면 반복문 없이도 간단하게 객체를 복사 할 수 있다.
let user3 = {
    name: 'John',
    age: 30
};
const clone2 = Object.assign({}, user3);
