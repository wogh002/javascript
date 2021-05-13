function 기계() {
    //새로생성되는 object this.
    //this= {};
    this.q = 'consume';
    this.w = 'snowball';
    //return this;
}
const nununu = new 기계();
const garennn = new 기계();

const a = { name: 'kim' };
const nunu = {
    q: 'consume',
    w: 'snowball'
};
const garen = {
    q: 'strike',
    w: 'courage'
};
// 비슷한 object 많이 만들 경우, class 를 사용하자

class Hero {
    constructor(){
        this.q = 'consume';
        this.w = 'snowball';
    }
}
