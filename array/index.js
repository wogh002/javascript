//객체 -> 키를 사용해 식별할 수 있는 값을 담고 저장하고 순서(x)
//객체는 태생이 순서를 고려하지 않고 만들어진 자료구조이기 때문에 객체를 이용하면 
//새로운 프로퍼티를 기존 프로퍼티 ‘사이에’ 끼워 넣는 것도 불가능합니다.
//이럴때 순서가 있는 컬렉션을 저장 할 때 쓰는 자료구조 '배열' 사용.

//배열선언
let arr = new Array();
//let arr = [];
let friuts = ['사과', '오렌지', '자두'];
alert(friuts[1]); //오렌지
alert(friuts.length); //배열의 길이
friuts[2] = '김밥'; //배열 수정 가능
console.log(friuts);

//배열 요소의 자료형엔 제약이 없습니다.
let arr2 = ['사과', { name: '이보라' }, true, function () { alert('안녕하세요'); }];
arr2[3]();
console.log(arr2[1].name);









