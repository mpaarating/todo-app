import React from "react";
import { useTodo } from "../contexts/todo-context";

function ClearCompletedButton() {
  const [todos, setTodos] = useTodo();

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };
  return (
    <div>
      {todos.length > 0 ? (
        <button
          className="mt-1 button is-danger"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      ) : null}
    </div>
  );
}

export default ClearCompletedButton;
