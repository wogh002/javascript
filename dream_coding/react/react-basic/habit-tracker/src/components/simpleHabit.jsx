import '../app.css';
// 리액트 훅이란? class 없이 React를 사용할 수 있게 해주는 것입니다. rsi  
import React, { useCallback, useState, useRef, useEffect } from 'react';
const SimpleHabit = props => {
    //리액트 훅에서 state 를 사용 하고 싶을경우 useState()를 사용하자.
    //useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다.
    //state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 
    const [count, setCount] = useState(0);
    //useRef() === React.createRef();
    //createRef()같은 경우 매번 새로운 함수가 만들어 질 때마다 새로 만든다.
    //useRef() => 한번만 만들고 메모리에 저장하고 계속 재사용한다.
    const spanRef = useRef();

    //useCallback() 콜백함수를 메모리에 저장해놓고 사용 할 수 있다.
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });
    useEffect(() => {
        //componentDidMount()
        //update
        console.log(`mounted&updated!:${count}`);
    })
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};
export default SimpleHabit;

