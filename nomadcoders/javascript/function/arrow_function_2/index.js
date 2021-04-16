'use strict';
const emails = [
    'nico@com',
    'naver@google.com',
    'jaeho@gmail.com',
    'nico@gmail.com'
];

//find
const foundMail = emails.find(item => item.includes('jaeho'));
console.log(foundMail);

//filter
//potato 가 gmail 을 가지고 있지 않다면 noGmail 로 간다.
const noGmail = emails.filter(potato => !potato.includes('@gmail'));
console.log(noGmail);
console.log('----------------forEach()---------------');

//foreach
const cleaned2 = [];
emails.forEach(item => cleaned2.push(item.split('@')[0]));
//item => cleaned.push(item) 만 해주었을 경우 -> 기존 emails 배열하고 같다
//'nico@com'.split('@') --> [nico , com][0];
//split 자체가 string[] 을 리턴한다.
//console.log(cleaned);
//console.log('naver@google.com'.split('@'));// ["naver", "google.com"];
//console.log(emails[0]);
//console.log( ["naver", "google.com"][0]);
console.log('--------------map()-----------------');
const cleaned3 = emails.map(email => email.split('@')[0]);
console.log(cleaned3);
console.log('-------------------------------');

const cleaned = emails.map((email, index) => ({
    username: email.split('@')[0],
    index 
}));
console.log(cleaned);










