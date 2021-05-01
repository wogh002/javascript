let name = "";

//0,"" 자체가 false 를 뜻한다. 논리연산자 중에서
//다시말해 ?? 연산자 일 경우 논리연산자의 undefined,null,false 값을 출력하고 싶을 경우 ?? 연산자 사용하자.

console.log('hello', name || 'anonymous'); //hello ,anonymous
console.log('hello', name ?? 'anonymous');









