import React from "react";
import { Todo } from "../models/Todo"

const Todos = ({ todos, deleteTodo }: { todos: Todo[], deleteTodo: (id: number) => void }) => {
  return (
    <div className={"todo-list"}>
      {todos.map((todo: any, index: any) => (
        <TodoItem
          todo={todo}
          key={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const TodoItem = ({ todo, deleteTodo }: { todo: Todo, deleteTodo: (id: number) => void }) => (
  <div className="todo">
    <p>
      {todo.title}
    </p>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </div>
);

export default Todos;
