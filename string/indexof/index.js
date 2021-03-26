const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
//if i hope to find about 'fox'!?;
//you should use the indexOf() method;
search_Word = 'fox';
alert(paragraph.indexOf(search_Word));


//7 17 27
let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // as를 찾아봅시다.
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `위치: ${foundPos}` );
  pos = foundPos + 1; // 다음 위치를 기준으로 검색을 이어갑니다.
}

//리팩토링.
let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) { //-1이 아니라면 true. -1이라면 false.
  alert( `위치: ${pos}` );
}