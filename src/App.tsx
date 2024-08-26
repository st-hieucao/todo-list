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
      const data = await axios.get(`${BASE_URL}/posts`);
      console.log(data.data)
      const todosMapping = data.data.map((todo: any) => new Todo(todo));
      setTodos(todosMapping);
    })();
  }, []);

  const addTodo = (todo: Todo) => {
    setTodos([...todos]);
  };

  const deleteTodo = (id: number) => {
    const todosDeleted = [...todos].filter(todo => todo.id !== id);
    setTodos([...todosDeleted]);
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
