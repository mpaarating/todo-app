import React, { useState } from "react";
import { useTodo } from "../contexts/todo-context";

const TodoForm = () => {
  const formStyle = {
    width: "50%",
  };

  const [text, setText] = useState("");
  const [todos, setTodos] = useTodo();

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    handleAddTodo(text);
    setText("");
  };

  return (
    <form
      className="container mt-2 mb-1"
      style={formStyle}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="input"
        placeholder="Add a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
