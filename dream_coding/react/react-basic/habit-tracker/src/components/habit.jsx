import React, { Component } from 'react';

class Habit extends Component {
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