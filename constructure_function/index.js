//생성자 함수
//함수의 이름 첫글자는 대문자로 시작한다
//반드시 new 연산자를 붙혀 실행한다.
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User('park jae ho');

alert(user.name);

//new User(...)가 실행되면 아래와 같이 실행된다.
function User(name) {
    //this= {}; //생성자 함수는 빈객체가 암시적으로 만들어진다.
    //return //this 가 암시적으로 반환된다.
}
let user = {
    name: 'park jae ho',
    isAdmin: false
};
//user 위에것과 동일하다.
//let user = new User('park jae ho');

//생성자를 쓰는이유 -> 재사용할 수 있는 객체 생성 코드를 구현하는 것이죠.
// 잠깐! 모든 함수는 생성자 함수가 될 수 있다는 점을 잊지 마시기 바랍니다.
//  new를 붙여 실행한다면 어떤 함수라도 위에 언급된 알고리즘이 실행됩니다.  ★
// 이름 "첫 글자가 대문자"인 함수는 new를 붙여 실행해야 한다는 점도 잊지 마세요.
//  공동의 약속이니까요.

//재사용할 필요가 없는 복잡한 객체를 만들어야 한다고 해봅시다.
//많은 양의 코드가 필요할 겁니다.
//이럴 땐 아래와 같이 코드를 익명 생성자 함수로 감싸주는 방식을 사용할 수 있습니다.
let user = new function () {
    this.name = 'park jae ho',
    this.admin = false;
}
