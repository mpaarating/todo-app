import React from "react";
import Todo from "./Todo";
import { useTodo } from "../contexts/todo-context";

function TodoList() {
  const [todos] = useTodo();

  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
