import React from "react";
import { Todo } from "../models/Todo"

const Todos = ({ todos, deleteTodo, toggleTodoCompletion }: { todos: Todo[], deleteTodo: (id: number) => void, toggleTodoCompletion: (id: number) => void }) => {
  return (
    <div className={"todo-list"}>
      {todos.map((todo: Todo, index: number) => (
        <TodoItem
          todo={todo}
          key={index}
          deleteTodo={deleteTodo}
          toggleTodoCompletion={toggleTodoCompletion}
        />
      ))}
    </div>
  );
};

const TodoItem = ({ todo, deleteTodo, toggleTodoCompletion }: { todo: Todo, deleteTodo: (id: number) => void, toggleTodoCompletion: (id: number) => void }) => (
  <div className="todo">
    <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.id)}
        className="todo-checkbox"
      />
    <p className={`todo-title ${todo.completed ? 'completed' : ''}`}>
      {todo.title}
    </p>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
);

export default Todos;
