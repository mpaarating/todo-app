import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);
    const value = [todos, setTodos];
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function useTodo() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }

    return context;
}

export { TodoProvider, useTodo };
