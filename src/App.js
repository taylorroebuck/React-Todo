import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Don't Forget to Wind Your Watch! (Click to mark completed)",
          id: 1,
          completed: false
        },
        {
          task: "Homework (Click to mark completed)",
          id: 2,
          completed: false
        }
      ]
    };
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    });
  };

  addTodo = (e, item) => {
    e.preventDefault();
    const newTodoItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodoItem] });
  };

  toggleTask = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(task => {
          if (task.id === id) {
            return {
              ...task,
              completed: !task.completed
            };
          } else {
            return task;
          }
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>No Rest For the Wicked, Am I Right?</h1>
          <TodoForm done={this.clearCompleted} addTodo={this.addTodo}/>
        </div>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;