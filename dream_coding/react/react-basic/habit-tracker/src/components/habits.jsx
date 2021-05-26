import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count: 0 },
            { id: 2, name: 'Running', count: 0 },
            { id: 3, name: 'Coding', count: 0 },
        ]
    }
    handleIncrement = habit => {
        // 리액트에서 직접적으로 state 를 변경하는 것은 좋지 않다.
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
    }
    handleDecrement = habit => {
        // 리액트에서 직접적으로 state 를 변경하는 것은 좋지 않다.
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({ habits });
    }
    handleDelete = habit => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({ habits });
    }
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
                        // props란? 자식컴포넌트로 데이터를 전달해준다.
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;