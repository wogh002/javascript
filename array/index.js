["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });

//배열 내에서 무언가를 찾고 싶을 때 쓰는 메서드에 대해 알아봅시다.

//왜 1, 15 ,2 정렬이 되었을까?
//모든 요소는 문자형으로 변환된 이후에 재 정렬됩니다. 
//'2'>'15'
//자바스크립트는 '사전’순으로 문자열을 비교합니다. 
//'사전편집(lexicographical)'순 이라고 불리기도 하는 이 기준을 적용하면 
//사전 뒤쪽의 문자열은 사전 앞쪽의 문자열보다 크다고 판단됩니다.
console.log(`사전문자 비교 순${'Z'>'A'}`);
//모든 요소는 문자형으로 변환된 이후에 재 정렬됩니다. 
//앞서 배웠듯이 문자열 비교는 사전편집 순으로 진행되기 때문에 2는 15보다 큰 값으로 취급됩니다("2" > "15").

const arr = [5, 100, 20];
console.log(arr); // [5, 100, 20]
arr.sort();
console.log(arr); // [100, 20, 5]
//숫자가 문자열로 변환되었기 숫자의 크기에 관계없이 1로 시작하는 100이 2로 시작하는 20보다 앞에 나옵니다.
const arrr = ['c','a','f','z'];
console.log(arrr);
arrr.sort();
//123,56,72,999
console.log(arrr);

const arrr2 = ['456','100','20','5'];
console.log(arrr2);
arrr2.sort();
//123,56,72,999
console.log(arrr2);


