//대괄호 표기법
//여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을수 없습니다.
//점 표기법(.) 은 '유효한 변수 식별자'인 경우에만 사용할 수 있다.
//유효한 변수 식별자는 공백이 없어야한다. 또한 숫자로 시작하지 않아야하며 $, _ 를 제외한 특수 문자가 없어야한다.
const user = {
    'likes birds': true
};
console.log(user);


//대괄호 표기법은 키에 어떤 문자열이 있던지 상관없이 동작한다.
// 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표로 묶어줘야 한다
const user2 = {
}
user2['likes birds'] = true; //set
alert(user2['likes birds']); // get true
delete user2['likes birds'];

//대괄호 표기법을 사용하면 아래 예시에서 변수를 키로 사용한 것과 같이 문자열뿐만 아니라 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있습니다.
let key = 'kkk kkkkkk';
user2[key] = false;
console.log(user2);
