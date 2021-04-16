//객체란 ? 실제 존재하는 개체를 표현하고자 할 때 생성된다.

//객체의 프로퍼티에 할당된 함수를 메소드라고 한다.
user = {
    sayHi: function () {
        alert('안녕')
    }
}
//단축구문
user = {
    sayHi() {// "sayHi: function()"과 동일합니다.
        alert('안녕');
    }
}
