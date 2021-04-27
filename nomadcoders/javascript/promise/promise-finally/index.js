'use strict';
//finally => Promise가 성공적으로 수행 되었는지 거절되었는지에 관계없이 
//Promise가 처리 된 후에 코드가 무조건 한 번은 실행되는 것을 제공합니다.
const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "errrr");
})
    .then(value => console.log(value))
    .catch(error => console.log(error))
    .finally(() => console.log(`i'm done `));
