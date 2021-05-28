import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    //memo === PureComponent
    //이전의 props,state 와 현재의 props,state를 비교 후 달라졌으면 리 렌더.
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // inputRef.current.value = '';
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Habit">
            </input>
            <button type="submit" className="add-button">Add</button>
        </form>
    );
});


export default HabitAddForm;