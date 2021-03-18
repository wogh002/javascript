//생성자와 return 문
//this 는 자동적으로 반환되기 때문에 명시적으로 적을 필요 없다. but
//객체를 return 한다면, this 대신 객체가 반환됩니다.
//원시형을 return 한다면, return문이 무시됩니다.
function BigUser() {
    this.name = 'John';
    return { name: 'Godzilla' } // this 가 아닌 새로운 객체 반환.
}
//생성자는 반드시 "new" 연산자를 붙여 실행합니다.
console.log(new BigUser().name);

function SmallUser() {
    this.name = 'John';
    return; //this 를 반환한다
}
console.log(new SmallUser().name);




