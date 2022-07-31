import React, { useState } from "react";
import { actionTypes } from "../reducers/todo-actions";

const EditTodo = ({ todo, dispatch }) => {
  const [text, setText] = useState(todo.text);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: actionTypes.updateTodo, id: todo.id, text });
    setText("");
  };

  return (
    <form style={{ display: "inline", width: 200 }} onSubmit={handleSubmit}>
      <input
        style={{ display: "inline", width: 200 }}
        type="text"
        className="input"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default EditTodo;
