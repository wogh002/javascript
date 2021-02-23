const id = prompt('로그인하라우');
let password;
if (id === 'Admin') {
    password = prompt('what is your password?');
    if (password === 'TheMaster') {
        alert('welcome!');
    }
    else if (password === '' || password === null) {
        alert('canceled')
    }
    else alert('wrong password');
}
else if (id === '' || id === null) {
    alert('canceled')
}
else alert(`i don't know you`);
//힌트: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.