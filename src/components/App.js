import React, { useReducer } from "react";

import todoReducer from "../reducers/todo-reducer";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import ClearCompletedButton from "./ClearCompletedButton";

import "../styles/App.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);


  return (
    <div className="App container">
      <Header />
      <React.StrictMode>
        <TodoForm dispatch={dispatch} />
        <ClearCompletedButton todoList={todos} dispatch={dispatch} />
        <TodoList todoList={todos} dispatch={dispatch} />
      </React.StrictMode>
    </div>
  );
}

export default App;
