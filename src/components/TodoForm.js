import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoInput: "" };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        console.log('rendering form');
        return (
            <div className='formContainer'>
                <form onSubmit={this.handleAddItem}>
                    <input
                        type='text'
                        name='todoInput'
                        placeholder='Enter new task'
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