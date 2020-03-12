import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props);
  return (
    <div className="todo-list">
      {props.todos.map(task => {
        return (
          <Todo 
            key={task.id}
            task={task}
            toggleTask={props.toggleTask}
          />
        );
      })}
    </div>
  );
};

export default TodoList;