//위 예시에서 49(독일나라번호)를 가장 위에 출력되도록 하려면 나라 번호가 정수로 취급되지 않도록 속임수를 쓰자
let codes = {
    '+49': '독일',
    '+41': '스위스',
    '+82': '한국'
};
for (let prop in codes) {
    alert(codes[prop]);
}
