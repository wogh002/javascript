//특정 글자에 접근하기.
const str = 'Hello';
//첫번째글자
alert(str[0]);
alert(str.charAt(0));
//마지막 글자
alert(str[str.length - 1]);
for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
  }