for (let i = 0; i < 3; i++) {
    alert(i); //body
}
//step	i++	각 반복의 body가 실행된 이후에 실행됩니다.
let z=0;
for(z=0; z<3; z++) {
 console.log('전역변수사용!')
}
console.log(z+`전역변수사용`);

