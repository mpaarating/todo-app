import React, { useState } from "react";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App container">
      <Header />
      <TodoList
        todoList={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleted={handleToggleCompleted}
        handleClearCompleted={handleClearCompleted}
      />
      <TodoForm handleAddTodo={handleAddTodo} />
      {todos.length > 0 ? (
        <button className="mt-1 button is-danger" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      ) : null}
    </div>
  );
}

export default App;
