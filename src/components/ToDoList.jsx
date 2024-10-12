import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
