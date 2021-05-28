import React, { PureComponent } from 'react';
// PureComponent 란? props,state가 변경되지 않는 이상 re - render함수 호출 하지 않는다.
//PureComponent는 shouldComponentUpdate()를 구현한다 .
//shollow comparison. 이전의 props,state와 현재의 props,state를 비교한다.
//객체의 프로퍼티가 변경되는건 아무런 상관이 없고 주소값을 기준으로 판단한다.
//habit의 주소값이 변경되면 props의 데이터가 변경된다.

class Habit extends PureComponent {
    // 컴포넌트 생명주기 Life Cycle
    // 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다.
    componentDidMount() {
        console.log(`habit: ${this.props.habit.name} mounted`);
    }
    //컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다
    componentWillUnmount() {
        console.log(`habit: ${this.props.habit.name} WillUnmount`);
    }
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