import React from "react";

const Todo = ({ todo, handleToggleCompleted, handleDeleteTodo }) => {
  return (
    <div>
      <li>
        <span className={todo.completed ? "icon has-text-success" : "icon has-text-info"}>
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
