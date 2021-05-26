import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();
    formRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    type="text"
                    className="add-input"
                    placeholder="Habit">
                </input>
                <button type="submit" className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;