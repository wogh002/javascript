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
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
                        // props란? 외부컴포넌트로 데이터를 전달해준다.
                        <Habit key={habit.id} habitProps={habit} />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;