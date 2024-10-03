import { useEffect, useState } from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todo";
import axios from "axios";
import { BASE_URL } from "./constants";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(`${BASE_URL}/todos`);
      const todosMapping = data.data.map((todo: any) => new Todo(todo));
      setTodos(todosMapping);
    })();
  }, []);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id: number) => {
    const todosDeleted = [...todos].filter(todo => todo.id !== id);
    setTodos([...todosDeleted]);
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="parent-container">
      <div className="container top-container">
        <div className="app">
          <h2>Todos App</h2>
          <div className="todoform">
            <TodoForm addTodo={addTodo} />
            <Todos
              todos={todos}
              deleteTodo={deleteTodo}
              toggleTodoCompletion={toggleTodoCompletion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
