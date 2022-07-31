import React from "react";
import { actionTypes } from "../reducers/todo-actions";
import EditTodo from "./EditTodo";

const Todo = ({ todo, dispatch }) => {
  const handleToggleCompleted = () => {
    dispatch({ type: actionTypes.toggleCompleted, id: todo.id });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: actionTypes.deleteTodo, id: todo.id });
  };

  const handleToggleEdit = () => {
    dispatch({ type: actionTypes.toggleEditing, id: todo.id });
  };

  return (
    <>
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
        {!todo.isEditing ? (
          <span
            style={todo.completed ? { textDecoration: "line-through" } : null}
            onClick={handleToggleEdit}
          >
            {todo.text}
          </span>
        ) : (
          <EditTodo todo={todo} dispatch={dispatch} />
        )}
        <span className="icon has-text-danger">
          <i
            className={"fas fa-square-xmark"}
            onClick={() => handleDeleteTodo(todo.id)}
          ></i>
        </span>
      </li>
    </>
  );
};

export default React.memo(Todo);
