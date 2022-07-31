import React from "react";
import Todo from "./Todo";

function TodoList({ todoList, dispatch }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default TodoList;
