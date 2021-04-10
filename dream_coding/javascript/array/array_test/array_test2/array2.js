'use strict';
//splice 이 메서드를 사용하면 요소 추가, 삭제, 교체가 모두 가능합니다.
//실무에서 객체로 구성된 배열을 다뤄야 할 일이 잦기 때문에 find 메서드 활용법을 알아두면 좋습니다.
//,map
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
// expected output: Array [2, 8, 18, 32]

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
//item 콜백함수에서 처리 할 현재 요소를 의미.

let arr2 = [1, 2, 15];
// arr 내부가 재 정렬됩니다.
arr2.sort();
console.log(arr2);  // 1, 15, 2
// 엇! 뭔가 이상하네요.
// 재정렬 후 배열 요소가 1, 15, 2가 되었습니다. 기대하던 결과(1, 2, 15)와는 다르네요. 왜 이런 결과가 나왔을까요?
//요소는 문자열로 취급되어 재 정렬되기 때문입니다.

const grades = [
    {
        name: 'jaeho',
        score: 100
    }, {
        name: 'taeho',
        score: 70
    }, {
        name: 'sangone',
        score: 90
    },
    {
        name: 'manjae',
        score: 75
    }
];
const result = grades.filter(item => item.score >= 90);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]