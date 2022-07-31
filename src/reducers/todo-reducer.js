import { actionTypes } from "./todo-actions";

function todoReducer(state, action) {
  switch (action.type) {
    case actionTypes.addTodo:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          isEditing: false,
          completed: false,
        },
      ];
    case actionTypes.updateTodo:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            text: action.text,
            isEditing: false,
          };
        }
        return todo;
      });
    case actionTypes.toggleEditing:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      });
    case actionTypes.toggleCompleted:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case actionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.id);
    case actionTypes.clearCompleted:
      return state.filter((todo) => !todo.completed);
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
}

export default todoReducer;
