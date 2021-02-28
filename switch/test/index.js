let browser = prompt('what is your browser name?');
// switch (browser) {
//     case 'Edge':
//         alert('Edge를 사용하고 계시네요!');
//         break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
//         break;
//     default: alert('현재 페이지가 괜찮아 보이길 바랍니다!');
// }
if (browser === 'Edge') {
    alert('Edge를 사용하고 계시네요!');
}
else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
}
else alert('현재 페이지가 괜찮아 보이길 바랍니다!');
//해답에선 가독성을 위해 browser == 'Chrome' || browser == 'Firefox' …을 여러 줄에 나눠서 작성하였습니다.
