import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Footer from'./components/Footer';
import './components/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Go to Circle K (Click to mark completed)",
          id: 1,
          completed: false
        },
        {
          task: "Find out when the Mongols Ruled China (Click to mark completed)",
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
          <h1>Don't Forget To Wind Your Watch!<br></br> <span className="hint">a to-do list app</span></h1>
          <TodoForm done={this.clearCompleted} addTodo={this.addTodo}/>
        </div>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;