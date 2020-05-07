import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: "" };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddItem = e => {
        this.props.addTodo(e, this.state.todoInput);
        this.setState({ todoInput: "" });
    };

    render() {
        console.log('rendering form');
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleAddItem}>
                    <input
                        type='text'
                        name='todoInput'
                        placeholder='Enter new task, man'
                        value={this.state.todoInput}
                        onChange={this.handleChanges}
                    />
                    <button className='btn'>Add Task</button>
                    <button className='btn' onClick={this.props.done}>Clear Completed Tasks</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;