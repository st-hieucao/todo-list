import React, { useState } from "react";

const TodoForm = ({ addTodo }: any) => {
  const [value, setvalue] = useState("");

  const handleChange = (e: any) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value)
      return;
    addTodo(value);
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
