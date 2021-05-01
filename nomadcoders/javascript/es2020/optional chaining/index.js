'use strict';
//react 코드를 깔끔하게 만들어준다 optional chaining
const lynn = {
    name: 'nico',
    profile: {
        email: {
            provider: {
                name: 'jaeho'
            }
        }
    }
}
console.log(lynn && lynn.profile && lynn.profile.email && lynn.profile.email.provider && lynn.profile.email.provider.name);
console.log(lynn?.profile?.email?.provider?.name); // ? === &&
//결과적으로 다 존재할경우 name 이 출력하게 된다
//어떠한 object 가 내가 예상한 것을 가지고 있는지 아닌지. 그때 사용한다




const person1 = {
    name: 'ellie',
    job: {
        title: 'S/W Engineer',
        manager: {
            name: 'Bob'
        }
    }
}

const person2 = {
    name: 'Bob'
};
{
    function printManager(person) {
        console.log(person.job.manager.name);
    }
    // printManager(person1);
    // printManager(person2);
}

{
    //삼항연산자
    function printManager(person) {
        console.log(
            person.job ? person.job.manager ? person.job.manager.name : undefined : undefined
        );
    }
}

{
    //&&연산자
    function printManager(person) {
        console.log(
            person.job && person.job.manager && person.job.manager.name
        );
    }
}

{
    //옵셔널 체이닝
    function printManager(person) {
        console.log(person.job?.manager?.name);
    }
    printManager(person1);
}




