import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }
  handleIncrement = habit => {
    // 리액트에서 직접적으로 state 를 변경하는 것은 좋지 않다.
    //ex) state.habits.count++;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        //인자로 들어가게 될 경우 rest.
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  }
  handleDecrement = habit => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
    this.setState({ habits });
  }
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleAdd = name => {
    const habits = [
      ...this.state.habits, {
        id: Date.now(),
        name,
        count: 0
      }
    ];
    this.setState({ habits });

  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      // habit.count = 0;
      // return habit;
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  }
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
