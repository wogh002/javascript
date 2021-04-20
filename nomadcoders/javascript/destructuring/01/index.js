'use strict';
//destructuring 이란? object, array , 그 외 요소들 안의 변수를 바깥으로 끄집어내서 사용할 수 있도록 하는 것.
//큰 object 에서 특정 변수나 그 안에 속한 작은 오브젝트에 접근 할 수 있도록 해주는 것.
//if(setting.notification.follow) 이런 방식은 -> 너무 구시대적
const settings = {
    color: {
        theme: 'dark',
        transition: '스르륵'
    }
};
// {경로} = targetObj;
//경로에서 최종적으로 접근 한 값만 가져 올 수 있다.
//const { color } = settings; 
//default value '=' 설정 
//const { notification: { follow = 'default value' } = {} } = settings;
//const notification = settings.notification;
//console.log(follow);
const { color: { theme, transition } } = settings;
console.log(transition,theme);
//경로에서 최종적으로 접근 한 값만 가져 올 수 있다.
const { notification: { follow = 'default value 설정 가능 notification 객체도 현재 settings 객체에 존재 하지 않음 \"=\" 로 default value 가능' } = {} } = settings;
console.log(follow);
