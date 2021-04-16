//계산된 프로퍼티
//객체를 만들 때 객체 리터럴안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우 , 이를 계산된 프로퍼티(computed property) 라고한다.
let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');
let bag = {
    [fruit]: 5, //변수 fruit 에서 프로퍼티 이름을 동적으로 받아온다. //apple 를 입력했다면 apple : 5 
}
//위 예시에서 [fruit]는 프로퍼티 이름을 변수 fruit에서 가져오겠다는 것을 의미합니다.
alert(bag.apple);

let bag2 = {
    [fruit + 'Computers']: 5
};
alert(bag2.appleComputers);
