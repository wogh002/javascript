import React, { PureComponent } from 'react';
// PureComponent 란? props,state가 변경되지 않는 이상 re - render함수 호출 하지 않는다.
//PureComponent는 shouldComponentUpdate()를 구현한다 .
//shollow comparison. 이전의 props,state와 현재의 props,state를 비교한다.
//객체의 프로퍼티가 변경되는건 아무런 상관이 없고 주소값을 기준으로 판단한다.
//habit의 주소값이 변경되면 props의 데이터가 변경된다.

class Habit extends PureComponent {
    //컴포넌트란? 데이터를 입력받아서 dom NODE 를 출력하는 함수.
    // 컴포넌트에는 state라는 멤버변수 객체가 존재한다.
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }
    render() {
        console.log('habit');
        // props = 외부 컴포넌트에서 전달받은 propreties
        const { name, count } = this.props.habit;
        return (
            <li className='habit'>
                <span className='habit-name'>{name}</span>
                <span className='habit-count'>{count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}><i className="fas fa-plus-square"></i></button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}><i className="fas fa-minus-square"></i></button>
                <button className='habit-button habit-delete' onClick={this.handleDelete}><i className="fas fa-trash"></i></button>
            </li>
        );
    }
}

export default Habit;