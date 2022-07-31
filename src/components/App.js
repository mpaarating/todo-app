import React from "react";

import { TodoProvider } from "../contexts/todo-context";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import ClearCompletedButton from "./ClearCompletedButton";

import "../styles/App.css";

function App() {
  return (
    <div className="App container">
      <Header />
      <TodoProvider>
        <TodoList />
        <TodoForm />
        <ClearCompletedButton />
      </TodoProvider>
    </div>
  );
}

export default App;
