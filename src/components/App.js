import React, { useReducer } from "react";

import todoReducer from "../reducers/todo-reducer";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "../styles/App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App container">
      <Header />
      <React.StrictMode>
        <TodoForm dispatch={dispatch} />
        {todos.length > 0 ? (
          <button
            className="mt-1 mb-1 button is-danger"
            onClick={handleClearCompleted}
          >
            Clear Completed
          </button>
        ) : null}
        <TodoList todoList={todos} dispatch={dispatch} />
      </React.StrictMode>
    </div>
  );
}

export default App;
