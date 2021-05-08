// 0, -0 false, '',null,undefined   
//-1 true 
//-0,0은 무조건 false
//정수 중에서 0을 제외한 모든 것은 true
//빈 배열이나 빈 객체도 무조건 true
let obj = {
    name: 'ellie'
}
//if 대신해서 && 사용가능.
if (obj) {
    console.log(obj.name);
}

obj && console.log(obj.name = '김밥나라');
