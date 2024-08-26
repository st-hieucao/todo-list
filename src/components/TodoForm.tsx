import React, { useState } from "react";
import axios from "axios";
import { Todo } from "../models/Todo";
import { BASE_URL } from "../constants";

const TodoForm = ({ addTodo }: any) => {
  const [value, setvalue] = useState("");

  const handleChange = (e: any) => {
    setvalue(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!value)
      return;
  
    const body: any = {
      title: value,
      body: '',
      userId: 1,
    };
    const { data } = await axios.post(`${BASE_URL}/posts`, body);
    const newTodo = new Todo(data);
    addTodo(newTodo);
    setvalue("");
  };

  return (
    <div className={"container"}>
      <form onSubmit={handleSubmit} className={"form-group row todo-form"}>
        <input
          className={"form-control col-md-8 "}
          type={"text"}
          placeholder={"Add a ToDo"}
          value={value}
          onChange={handleChange}
        />
        <input
          className={"form-control btn-primary col-md-4 submit-button"}
          type={"submit"}
          value={"Add"}
        />
      </form>
    </div>
  );
};

export default TodoForm;
