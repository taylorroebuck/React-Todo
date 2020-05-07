import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Bowl with Walter",
          id: 1,
          completed: false
        },
        {
          task: "Figure out where Bunny Lebowski is",
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
          <h1>The To-Dude Abides<br></br> <span className="hint">a Big Lebowski themed to-do list</span></h1>
          <TodoForm done={this.clearCompleted} addTodo={this.addTodo}/>
        </div>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
      </div>
    );
  }
}

export default App;
