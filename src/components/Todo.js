import React from "react";
import { useTodo } from "../contexts/todo-context";

const Todo = ({ todo }) => {
  const [todos, setTodos] = useTodo();

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <li>
        <span
          className={
            todo.completed ? "icon has-text-success" : "icon has-text-info"
          }
        >
          <i
            className={todo.completed ? "fas fa-check-square" : "far fa-square"}
            onClick={() => handleToggleCompleted(todo.id)}
          ></i>
        </span>
        &nbsp;
        {todo.text}
        {todo.completed ? (
          <span className="icon has-text-danger">
            <i
              className={"fas fa-square-xmark"}
              onClick={() => handleDeleteTodo(todo.id)}
            ></i>
          </span>
        ) : null}
      </li>
    </div>
  );
};

export default Todo;
