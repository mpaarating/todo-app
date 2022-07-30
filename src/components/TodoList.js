import React from "react";
import Todo from "./Todo";

function TodoList({
  todoList,
  handleToggleCompleted,
  handleDeleteTodo,
}) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggleCompleted={handleToggleCompleted}
            handleDeleteTodo={handleDeleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
