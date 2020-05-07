import React from 'react';

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

  render() {
    return (
      <div>
        <h2>Todo App</h2>
      </div>
    );
  }
}

export default App;
